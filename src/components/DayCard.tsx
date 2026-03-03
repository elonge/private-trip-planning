import { TravelModeIcon } from "@/components/TravelModeIcon";
import type { TripDay } from "@/types/trip";

interface DayCardProps {
  day: TripDay;
  align: "left" | "right";
  delayMs: number;
}

export function DayCard({ day, align, delayMs }: DayCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-[0_26px_70px_-40px_rgba(25,22,20,0.45)] animate-riseIn ${
        align === "left" ? "md:mr-10" : "md:ml-10"
      }`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="relative h-52 overflow-hidden md:h-64">
        <img
          src={day.photoUrl}
          alt={day.photoAlt}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/25 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
          <span className="rounded-full bg-linen/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-charcoal">
            Day {day.day}
          </span>
          {day.optional ? (
            <span className="rounded-full bg-olive/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-linen">
              Optional
            </span>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <TravelModeIcon mode={day.travelMode} />
          <p className="text-xs font-semibold uppercase tracking-[0.13em] text-charcoal/70">{day.location}</p>
        </div>

        <h3 className="font-display text-2xl leading-tight text-charcoal">{day.title}</h3>
        <p className="text-sm leading-relaxed text-charcoal/80 md:text-base">{day.summary}</p>

        {day.note ? (
          <p className="rounded-xl border border-olive/25 bg-olive/10 px-3 py-2 text-sm text-charcoal/85">{day.note}</p>
        ) : null}
      </div>
    </article>
  );
}
