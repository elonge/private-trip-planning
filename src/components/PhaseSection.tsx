import { DayCard } from "@/components/DayCard";
import type { TripPhase } from "@/types/trip";

interface PhaseSectionProps {
  phase: TripPhase;
  phaseIndex: number;
  startOffset: number;
}

export function PhaseSection({ phase, phaseIndex, startOffset }: PhaseSectionProps) {
  return (
    <section
      aria-labelledby={`${phase.id}-title`}
      className="rounded-3xl border border-charcoal/10 bg-gradient-to-b from-white to-sand/35 px-4 py-8 md:px-8 md:py-10"
    >
      <div className="mb-8 border-b border-charcoal/10 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta">Phase {phaseIndex + 1}</p>
        <h2 id={`${phase.id}-title`} className="mt-2 font-display text-3xl text-charcoal md:text-4xl">
          {phase.name.replace(/^Phase \d+:\s*/, "")}
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-charcoal/80 md:text-base">{phase.description}</p>
        <p className="mt-3 inline-block rounded-full bg-terracotta/15 px-3 py-1 text-xs font-semibold tracking-wide text-charcoal/85">
          {phase.altitudeNote}
        </p>
      </div>

      <div className="relative space-y-8">
        <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-charcoal/15 md:block" />

        {phase.days.map((day, dayIndex) => {
          const globalIndex = startOffset + dayIndex;
          const align = globalIndex % 2 === 0 ? "left" : "right";
          const columnClass = align === "left" ? "md:col-start-1" : "md:col-start-3";

          return (
            <div key={day.day} className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-start">
              <div className={columnClass}>
                <DayCard day={day} align={align} delayMs={150 + globalIndex * 40} />
              </div>

              <div className="hidden md:flex md:col-start-2 md:justify-center">
                <span className="mt-8 h-4 w-4 rounded-full border-2 border-terracotta bg-linen shadow" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
