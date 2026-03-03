import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { defaultTripPlanId, tripPlans } from "../src/data/trips";
import type { TripDay, TripPlan } from "../src/types/trip";

type PlanKey = keyof typeof tripPlans;

interface DayInput extends TripDay {
  phaseId: string;
  phaseName: string;
}

interface GeneratedHighlight {
  title: string;
  description: string;
}

interface GeneratedPhoto {
  subject: string;
  searchQuery: string;
  whyRelevant: string;
}

interface GeneratedDay {
  day: number;
  highlights: GeneratedHighlight[];
  photos: GeneratedPhoto[];
}

interface OpenAIResponse {
  choices?: Array<{
    message?: {
      content?: string | null;
    };
  }>;
  error?: {
    message?: string;
    type?: string;
  };
}

interface TripDayInsights {
  day: number;
  title: string;
  location: string;
  summary: string;
  phaseId: string;
  phaseName: string;
  highlights: GeneratedHighlight[];
  photos: GeneratedPhoto[];
}

interface OutputPayload {
  planId: PlanKey;
  planTitle: string;
  generatedAt: string;
  model: string;
  days: TripDayInsights[];
}

const availablePlans: Record<PlanKey, TripPlan> = {
  ...tripPlans,
};

function isPlanKey(value: string): value is PlanKey {
  return value in tripPlans;
}

function getArgValue(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);
  if (index < 0) return undefined;
  return process.argv[index + 1];
}

function flattenDays(plan: TripPlan): DayInput[] {
  return plan.phases.flatMap((phase) =>
    phase.days.map((day) => ({
      ...day,
      phaseId: phase.id,
      phaseName: phase.name,
    })),
  );
}

function assertValidGeneratedDays(generated: unknown, expectedDays: DayInput[]): asserts generated is GeneratedDay[] {
  if (!Array.isArray(generated)) {
    throw new Error("OpenAI response is missing a valid days array.");
  }

  if (generated.length !== expectedDays.length) {
    throw new Error(`Expected ${expectedDays.length} generated days, received ${generated.length}.`);
  }

  const expectedSet = new Set(expectedDays.map((day) => day.day));
  const seenSet = new Set<number>();

  for (const item of generated) {
    const day = item as Partial<GeneratedDay>;
    if (typeof day.day !== "number") {
      throw new Error("Generated day item is missing a numeric `day`.");
    }
    if (!expectedSet.has(day.day)) {
      throw new Error(`Generated response included unexpected day number: ${day.day}.`);
    }
    if (seenSet.has(day.day)) {
      throw new Error(`Generated response included duplicate day number: ${day.day}.`);
    }
    seenSet.add(day.day);

    if (!Array.isArray(day.highlights) || day.highlights.length !== 3) {
      throw new Error(`Day ${day.day} must include exactly 3 highlights.`);
    }
    for (const highlight of day.highlights) {
      if (
        typeof highlight?.title !== "string" ||
        !highlight.title.trim() ||
        typeof highlight?.description !== "string" ||
        !highlight.description.trim()
      ) {
        throw new Error(`Day ${day.day} has an invalid highlight item.`);
      }
    }

    if (!Array.isArray(day.photos) || day.photos.length < 2) {
      throw new Error(`Day ${day.day} must include at least 2 photo suggestions.`);
    }
    for (const photo of day.photos) {
      if (
        typeof photo?.subject !== "string" ||
        !photo.subject.trim() ||
        typeof photo?.searchQuery !== "string" ||
        !photo.searchQuery.trim() ||
        typeof photo?.whyRelevant !== "string" ||
        !photo.whyRelevant.trim()
      ) {
        throw new Error(`Day ${day.day} has an invalid photo suggestion item.`);
      }
    }
  }
}

async function generateDayContent(params: {
  apiKey: string;
  model: string;
  planTitle: string;
  days: DayInput[];
}): Promise<GeneratedDay[]> {
  const { apiKey, model, planTitle, days } = params;

  const systemPrompt =
    "You are a detail-oriented travel editor. Output only valid JSON. For each day, provide exactly 3 practical highlights and 2-4 relevant photo ideas. Keep content specific to the provided itinerary context and avoid generic filler.";

  const userPayload = {
    tripTitle: planTitle,
    instructions: {
      highlightRules: [
        "Exactly 3 highlights per day.",
        "Each highlight should be an actionable idea for that day.",
        "Use concise, concrete language.",
      ],
      photoRules: [
        "Provide 2-4 photo suggestions per day.",
        "Do not provide image URLs.",
        "Give searchable terms in `searchQuery`.",
      ],
      outputShape: {
        days: [
          {
            day: "number",
            highlights: [{ title: "string", description: "string" }],
            photos: [{ subject: "string", searchQuery: "string", whyRelevant: "string" }],
          },
        ],
      },
    },
    days: days.map((day) => ({
      day: day.day,
      title: day.title,
      summary: day.summary,
      location: day.location,
      note: day.note ?? null,
      optional: day.optional ?? false,
      phaseName: day.phaseName,
    })),
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: JSON.stringify(userPayload) },
      ],
    }),
  });

  const payload = (await response.json()) as OpenAIResponse;

  if (!response.ok) {
    const details = payload.error?.message ?? "Unknown OpenAI API error.";
    throw new Error(`OpenAI request failed (${response.status}): ${details}`);
  }

  const content = payload.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("OpenAI response did not include message content.");
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error("OpenAI response was not valid JSON.");
  }

  const generatedDays = (parsed as { days?: unknown }).days;
  assertValidGeneratedDays(generatedDays, days);
  return generatedDays;
}

async function main() {
  const planArg = getArgValue("--plan") ?? defaultTripPlanId;
  if (!isPlanKey(planArg)) {
    throw new Error(`Unknown plan "${planArg}". Currently supported: ${Object.keys(tripPlans).join(", ")}.`);
  }

  const planId: PlanKey = planArg;
  const plan = availablePlans[planId];
  const days = flattenDays(plan).sort((a, b) => a.day - b.day);

  const model = process.env.OPENAI_MODEL ?? "gpt-4.1-mini";
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is required.");
  }

  const generatedDays = await generateDayContent({
    apiKey,
    model,
    planTitle: plan.title,
    days,
  });

  const generatedByDay = new Map(generatedDays.map((item) => [item.day, item]));
  const outputDays: TripDayInsights[] = days.map((day) => {
    const generated = generatedByDay.get(day.day);
    if (!generated) {
      throw new Error(`Missing generated content for day ${day.day}.`);
    }
    return {
      day: day.day,
      title: day.title,
      location: day.location,
      summary: day.summary,
      phaseId: day.phaseId,
      phaseName: day.phaseName,
      highlights: generated.highlights,
      photos: generated.photos,
    };
  });

  const defaultOutput = path.join("src", "data", "generated", `${planId}-day-insights.json`);
  const outputPath = getArgValue("--out") ?? defaultOutput;
  await mkdir(path.dirname(outputPath), { recursive: true });

  const outputPayload: OutputPayload = {
    planId,
    planTitle: plan.title,
    generatedAt: new Date().toISOString(),
    model,
    days: outputDays,
  };

  await writeFile(outputPath, JSON.stringify(outputPayload, null, 2), "utf8");
  console.log(`Wrote ${outputPayload.days.length} days to ${outputPath}`);
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
});
