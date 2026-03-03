"use client";

import { useEffect, useMemo, useState } from "react";
import { getVideoEmbedUrl } from "@/lib/video";

interface PhaseVideoListProps {
  phaseId: string;
  videoUrls: string[];
}

interface PhaseVideoItem {
  id: string;
  label: string;
  sourceUrl: string;
  embedUrl: string | null;
}

export function PhaseVideoList({ phaseId, videoUrls }: PhaseVideoListProps) {
  const videos = useMemo<PhaseVideoItem[]>(
    () =>
      videoUrls.map((sourceUrl, index) => ({
        id: `${phaseId}-video-${index + 1}`,
        label: `Video ${index + 1}`,
        sourceUrl,
        embedUrl: getVideoEmbedUrl(sourceUrl)
      })),
    [phaseId, videoUrls]
  );

  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const activeVideo = useMemo(
    () => videos.find((video) => video.id === activeVideoId) ?? null,
    [activeVideoId, videos]
  );

  useEffect(() => {
    if (!activeVideo) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideoId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo]);

  if (videos.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/70">Videos</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideoId(video.id)}
              className="rounded-full border border-terracotta/30 bg-terracotta/10 px-3 py-1 text-xs font-semibold text-charcoal/85 transition hover:border-terracotta/60 hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/45"
            >
              {video.label}
            </button>
          ))}
        </div>
      </div>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${phaseId} video popup`}
          onClick={() => setActiveVideoId(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              className="absolute -top-11 right-0 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-charcoal shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close video"
            >
              Close
            </button>
            {activeVideo.embedUrl ? (
              <div className="relative h-[88dvh] w-full overflow-hidden rounded-xl bg-black shadow-2xl md:h-auto md:pb-[56.25%]">
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.label}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            ) : (
              <div className="rounded-xl bg-white p-6 text-sm text-charcoal shadow-2xl">
                Unable to embed this video URL.
                <a
                  href={activeVideo.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 font-semibold text-terracotta underline"
                >
                  Open link
                </a>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
