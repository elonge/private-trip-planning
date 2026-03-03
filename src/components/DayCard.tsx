"use client";

import { useEffect, useMemo, useState } from "react";

import { TravelModeIcon } from "@/components/TravelModeIcon";
import { getVideoEmbedUrl } from "@/lib/video";
import type { TripDay } from "@/types/trip";

interface DayCardProps {
  day: TripDay;
  align: "left" | "right";
  delayMs: number;
}

export function DayCard({ day, align, delayMs }: DayCardProps) {
  const embedUrl = useMemo(
    () => (day.videoUrl ? getVideoEmbedUrl(day.videoUrl) : null),
    [day.videoUrl]
  );
  const canPlayVideo = Boolean(embedUrl);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (!isVideoOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isVideoOpen]);

  const openVideo = () => {
    if (canPlayVideo) {
      setIsVideoOpen(true);
    }
  };

  const onCardKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!canPlayVideo) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openVideo();
    }
  };

  return (
    <>
      <article
        className={`group overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-[0_26px_70px_-40px_rgba(25,22,20,0.45)] animate-riseIn ${
          align === "left" ? "md:mr-10" : "md:ml-10"
        } ${canPlayVideo ? "cursor-pointer hover:border-terracotta/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/45" : ""}`}
        style={{ animationDelay: `${delayMs}ms` }}
        onClick={canPlayVideo ? openVideo : undefined}
        onKeyDown={onCardKeyDown}
        role={canPlayVideo ? "button" : undefined}
        tabIndex={canPlayVideo ? 0 : undefined}
        aria-label={canPlayVideo ? `Play video for day ${day.day}: ${day.title}` : undefined}
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
            <div className="flex flex-wrap justify-end gap-2">
              {canPlayVideo ? (
                <span className="rounded-full bg-terracotta/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-linen">
                  Video
                </span>
              ) : null}
              {day.optional ? (
                <span className="rounded-full bg-olive/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-linen">
                  Optional
                </span>
              ) : null}
            </div>
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

      {isVideoOpen && embedUrl ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Day ${day.day} video popup`}
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-11 right-0 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-charcoal shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close video"
            >
              Close
            </button>
            <div className="relative h-[88dvh] w-full overflow-hidden rounded-xl bg-black shadow-2xl md:h-auto md:pb-[56.25%]">
              <iframe
                src={embedUrl}
                title={`Day ${day.day} video`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
