import type { TravelMode } from "@/types/trip";

interface TravelModeIconProps {
  mode: TravelMode;
}

const labels: Record<TravelMode, string> = {
  flight: "Flight",
  van: "Van Transfer",
  train: "Train",
  walk: "Walk",
  hike: "Hike",
  free: "Free Time"
};

export function TravelModeIcon({ mode }: TravelModeIconProps) {
  const icon = {
    flight: (
      <path d="M4 13h7l5 7h2l-2-7h4c1 0 2-.8 2-2s-1-2-2-2h-4l2-7h-2l-5 7H4l3 2-3 2Z" />
    ),
    van: (
      <path d="M3 16V8a2 2 0 0 1 2-2h11l3 3v7h-1a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3Zm13-7h-3V8h2l1 1ZM7 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    ),
    train: (
      <path d="M7 3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3l2 3h-2l-2-3H9l-2 3H5l2-3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v5h12V6a1 1 0 0 0-1-1H7Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    ),
    walk: (
      <path d="M13 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-1 5h3l2 3h-2l-1-1.5-.5 2.5 2 3h-2l-1.6-2.5L10 19H8l2.2-6.5L9 10h3Z" />
    ),
    hike: (
      <path d="M4 18h16v2H4v-2Zm2-3 4-8 3 5 2-3 3 6h-2l-1-2-2 3-3-5-2 4H6Z" />
    ),
    free: <path d="M12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-6-6V4Zm1 1v6h5A7 7 0 0 0 13 5Z" />
  };

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-linen/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal">
      <svg
        aria-hidden="true"
        className="h-4 w-4 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon[mode]}
      </svg>
      {labels[mode]}
    </span>
  );
}
