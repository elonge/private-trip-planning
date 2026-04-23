"use client";

import { useEffect, useMemo, useState } from "react";

import { TravelModeIcon } from "@/components/TravelModeIcon";
import { getVideoEmbedUrl } from "@/lib/video";
import type { TripDay, TripPhoto } from "@/types/trip";

interface DayCardProps {
  day: TripDay;
  align: "left" | "right";
  delayMs: number;
}

function resolveDayPhotos(day: TripDay): TripPhoto[] {
  if (day.photos && day.photos.length > 0) {
    return day.photos;
  }

  if (day.photoUrl) {
    return [
      {
        url: day.photoUrl,
        alt: day.photoAlt ?? `${day.title} photo`
      }
    ];
  }

  return [];
}

export function DayCard({ day, align, delayMs }: DayCardProps) {
  const embedUrl = useMemo(
    () => (day.videoUrl ? getVideoEmbedUrl(day.videoUrl) : null),
    [day.videoUrl]
  );
  const canPlayVideo = Boolean(embedUrl);
  const photos = resolveDayPhotos(day);
  const photoCount = photos.length;
  const hasCarousel = photoCount > 1;
  const canOpenCardVideo = canPlayVideo && !hasCarousel;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

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

  useEffect(() => {
    setActivePhotoIndex(0);
  }, [day.day]);

  const openVideo = () => {
    if (canPlayVideo) {
      setIsVideoOpen(true);
    }
  };

  const onCardKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!canOpenCardVideo) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openVideo();
    }
  };

  const showPreviousPhoto = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActivePhotoIndex((currentIndex) => (currentIndex === 0 ? photoCount - 1 : currentIndex - 1));
  };

  const showNextPhoto = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActivePhotoIndex((currentIndex) => (currentIndex + 1) % photoCount);
  };

  const selectPhoto = (photoIndex: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActivePhotoIndex(photoIndex);
  };

  return (
    <>
      <article
        className={`group overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-[0_26px_70px_-40px_rgba(25,22,20,0.45)] animate-riseIn ${
          align === "left" ? "md:mr-10" : "md:ml-10"
        } ${canOpenCardVideo ? "cursor-pointer hover:border-terracotta/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/45" : ""}`}
        style={{ animationDelay: `${delayMs}ms` }}
        onClick={canOpenCardVideo ? openVideo : undefined}
        onKeyDown={onCardKeyDown}
        role={canOpenCardVideo ? "button" : undefined}
        tabIndex={canOpenCardVideo ? 0 : undefined}
        aria-label={canOpenCardVideo ? `Play video for day ${day.day}: ${day.title}` : undefined}
      >
        <div className="relative h-52 overflow-hidden md:h-64">
          {photos.length > 0 ? (
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activePhotoIndex * 100}%)` }}
            >
              {photos.map((photo, photoIndex) => (
                <div key={`${day.day}-${photoIndex}-${photo.url}`} className="h-full w-full shrink-0">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-sand/75 via-linen to-terracotta/25" />
          )}

          {hasCarousel ? (
            <>
              <button
                type="button"
                onClick={showPreviousPhoto}
                className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-md transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={`Show previous photo for day ${day.day}`}
              >
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m15 18-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={showNextPhoto}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal shadow-md transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={`Show next photo for day ${day.day}`}
              >
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m9 18 6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="absolute inset-x-3 bottom-3 flex justify-center gap-1.5">
                {photos.map((photo, photoIndex) => {
                  const isActive = photoIndex === activePhotoIndex;
                  return (
                    <button
                      key={`${day.day}-dot-${photoIndex}-${photo.url}`}
                      type="button"
                      onClick={selectPhoto(photoIndex)}
                      className={`h-1.5 w-1.5 rounded-full shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        isActive ? "bg-white" : "bg-white/55 hover:bg-white/80"
                      }`}
                      aria-label={`Show photo ${photoIndex + 1} for day ${day.day}`}
                      aria-pressed={isActive}
                    />
                  );
                })}
              </div>
            </>
          ) : null}

          <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-3">
            <span className="rounded-full bg-linen/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-charcoal">
              Day {day.day}
            </span>
            <div className="flex flex-wrap justify-end gap-2">
              {canPlayVideo && hasCarousel ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    openVideo();
                  }}
                  className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-charcoal shadow-sm transition hover:bg-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`Play video for day ${day.day}: ${day.title}`}
                >
                  Video
                </button>
              ) : null}
              {canPlayVideo && !hasCarousel ? (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-charcoal shadow-sm">
                  Video
                </span>
              ) : null}
              {day.optional ? (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-charcoal shadow-sm">
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
