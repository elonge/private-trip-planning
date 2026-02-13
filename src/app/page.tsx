import { Hero } from "@/components/Hero";
import { PeruRouteMap } from "@/components/PeruRouteMap";
import { PhaseSection } from "@/components/PhaseSection";
import { peruTrip } from "@/data/peruTrip";

const phaseOffsets = (() => {
  const offsets: number[] = [];
  let runningOffset = 0;

  for (const phase of peruTrip.phases) {
    offsets.push(runningOffset);
    runningOffset += phase.days.length;
  }

  return offsets;
})();

const totalDays = peruTrip.phases.reduce((sum, phase) => sum + phase.days.length, 0);

export default function Home() {
  return (
    <>
      <a
        href="#itinerary-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-linen focus:px-4 focus:py-2 focus:font-semibold focus:text-charcoal"
      >
        Skip to itinerary content
      </a>

      <Hero plan={peruTrip} />

      <main id="itinerary-content" className="mx-auto w-full max-w-6xl space-y-10 px-5 py-10 md:px-10 md:py-14">
        <section
          aria-labelledby="trip-overview"
          className="rounded-3xl border border-charcoal/10 bg-white/80 p-6 shadow-[0_24px_70px_-46px_rgba(25,22,20,0.5)] md:p-8"
        >
          <h2 id="trip-overview" className="font-display text-3xl text-charcoal md:text-4xl">
            14 Days, Four Distinct Chapters
          </h2>
          <p className="mt-3 max-w-3xl text-charcoal/80">
            This itinerary keeps altitude risk low by moving from Lima to the Sacred Valley before spending extended time in Cusco.
            It balances culture, adventure, food, and recovery windows for a family of six.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-sand/70 px-4 py-2 font-semibold text-charcoal">{totalDays} Planned Days</span>
            <span className="rounded-full bg-terracotta/15 px-4 py-2 font-semibold text-charcoal">4 Phases</span>
            <span className="rounded-full bg-olive/20 px-4 py-2 font-semibold text-charcoal">Optional High-Altitude Day Included</span>
          </div>
        </section>

        <PeruRouteMap stops={peruTrip.routeStops} />

        <section aria-labelledby="timeline-title" className="space-y-8">
          <div className="px-1">
            <h2 id="timeline-title" className="font-display text-3xl text-charcoal md:text-4xl">
              Visual Timeline
            </h2>
            <p className="mt-2 text-sm text-charcoal/80 md:text-base">
              Each day card includes location context, travel mode, and family pacing notes.
            </p>
          </div>

          {peruTrip.phases.map((phase, index) => (
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
