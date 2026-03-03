import Link from "next/link";

import { Hero } from "@/components/Hero";
import { PeruRouteMap } from "@/components/PeruRouteMap";
import { PhaseSection } from "@/components/PhaseSection";
import { defaultTripPlanId, getTripDisplayName, getTripPlanIds, resolveTripPlan } from "@/data/trips";

interface HomeProps {
  searchParams?: Promise<{
    trip?: string | string[];
  }>;
}

function toTripId(rawTripParam: string | string[] | undefined): string | undefined {
  if (Array.isArray(rawTripParam)) {
    return rawTripParam[0];
  }

  return rawTripParam;
}

function buildTripHref(tripId: string): string {
  if (tripId === defaultTripPlanId) {
    return "/";
  }

  return `/?trip=${encodeURIComponent(tripId)}`;
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawTripId = toTripId(resolvedSearchParams?.trip);
  const { tripId: selectedTripId, plan } = resolveTripPlan(rawTripId);

  const phaseOffsets: number[] = [];
  let runningOffset = 0;
  for (const phase of plan.phases) {
    phaseOffsets.push(runningOffset);
    runningOffset += phase.days.length;
  }

  const totalDays = plan.phases.reduce((sum, phase) => sum + phase.days.length, 0);
  const tripIds = getTripPlanIds();

  const routeLabels: string[] = [];
  for (const stop of plan.routeStops) {
    const previousLabel = routeLabels[routeLabels.length - 1];
    if (previousLabel !== stop.label) {
      routeLabels.push(stop.label);
    }
  }
  const routeSummary = routeLabels.join(" -> ");
  const phaseNavItems = plan.phases.map((phase) => ({
    id: phase.id,
    name: phase.name,
    dayCount: phase.days.length
  }));

  return (
    <>
      <a
        href="#itinerary-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-linen focus:px-4 focus:py-2 focus:font-semibold focus:text-charcoal"
      >
        Skip to itinerary content
      </a>

      <Hero plan={plan} routeSummary={routeSummary} />

      <main id="itinerary-content" className="mx-auto w-full max-w-6xl space-y-10 px-5 py-10 md:px-10 md:py-14">
        <section
          aria-labelledby="trip-selector-title"
          className="rounded-3xl border border-charcoal/10 bg-white/90 p-4 shadow-[0_24px_60px_-42px_rgba(25,22,20,0.45)] md:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 id="trip-selector-title" className="font-display text-2xl text-charcoal md:text-3xl">
              Select Trip
            </h2>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-charcoal/65">URL parameter: trip=</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tripIds.map((tripId) => {
              const isActive = tripId === selectedTripId;
              return (
                <Link
                  key={tripId}
                  href={buildTripHref(tripId)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/60 ${
                    isActive
                      ? "border-terracotta bg-terracotta/15 text-charcoal"
                      : "border-charcoal/20 bg-white text-charcoal/85 hover:border-terracotta/40 hover:text-terracotta"
                  }`}
                >
                  {getTripDisplayName(tripId)}
                </Link>
              );
            })}
          </div>
        </section>

        <section
          aria-labelledby="trip-overview"
          className="rounded-3xl border border-charcoal/10 bg-white/80 p-6 shadow-[0_24px_70px_-46px_rgba(25,22,20,0.5)] md:p-8"
        >
          <h2 id="trip-overview" className="font-display text-3xl text-charcoal md:text-4xl">
            {totalDays} Days, {plan.phases.length} Distinct Chapters
          </h2>
          <p className="mt-3 max-w-3xl text-charcoal/80">
            {plan.subtitle}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-sand/70 px-4 py-2 font-semibold text-charcoal">{totalDays} Planned Days</span>
            <span className="rounded-full bg-terracotta/15 px-4 py-2 font-semibold text-charcoal">{plan.phases.length} Phases</span>
            <span className="rounded-full bg-olive/20 px-4 py-2 font-semibold text-charcoal">Trip ID: {selectedTripId}</span>
          </div>
        </section>

        <PeruRouteMap
          stops={plan.routeStops}
          phaseNavItems={phaseNavItems}
          description={`Live OpenStreetMap view of your route across ${routeLabels.join(", ")}.`}
          ariaLabel={`OpenStreetMap route map for ${plan.title}`}
        />

        <section aria-labelledby="timeline-title" className="space-y-8">
          <div className="px-1">
            <h2 id="timeline-title" className="font-display text-3xl text-charcoal md:text-4xl">
              Visual Timeline
            </h2>
            <p className="mt-2 text-sm text-charcoal/80 md:text-base">
              Each day card includes location context, travel mode, and family pacing notes.
            </p>
          </div>

          {plan.phases.map((phase, index) => (
            <PhaseSection
              key={phase.id}
              phase={phase}
              phaseIndex={index}
              startOffset={phaseOffsets[index] ?? 0}
            />
          ))}
        </section>
      </main>
    </>
  );
}
