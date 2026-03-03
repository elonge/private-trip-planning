import type { TripPlan } from "@/types/trip";

interface HeroProps {
  plan: TripPlan;
  routeSummary: string;
}

export function Hero({ plan, routeSummary }: HeroProps) {
  return (
    <header className="relative isolate min-h-[80vh] overflow-hidden border-b border-white/10 text-linen">
      <img
        src={plan.heroPhotoUrl}
        alt={plan.heroPhotoAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/35 via-charcoal/50 to-charcoal/85" />
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-end px-6 pb-14 pt-24 md:px-10">
        <p className="mb-3 max-w-fit rounded-full border border-linen/30 bg-charcoal/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
          Family Trip Blueprint
        </p>
        <h1 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">{plan.title}</h1>
        <p className="mt-5 max-w-2xl text-base text-linen/90 md:text-lg">{plan.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full border border-linen/30 bg-charcoal/35 px-4 py-2 font-semibold tracking-wide">
            {plan.durationDays} Days
          </span>
          <span className="rounded-full border border-linen/30 bg-charcoal/35 px-4 py-2 font-semibold tracking-wide">
            {routeSummary}
          </span>
        </div>
      </div>
    </header>
  );
}
