import type { ReactNode } from "react";
import type { TravelMode } from "@/types/trip";

interface TravelModeIconProps {
  mode: TravelMode;
}

const labels: Record<string, string> = {
  flight: "Flight",
  "flight & car": "Flight + Car",
  van: "Van Transfer",
  train: "Train",
  walk: "Walk",
  hike: "Hike",
  free: "Free Time",
  boat: "Boat",
  bus: "Bus",
  bike: "Bike",
  ferry: "Ferry",
  car: "Car",
  canoe: "Canoe",
  kayak: "Kayak",
  other: "Other"
};

function toFallbackLabel(mode: string): string {
  return mode
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (value) => value.toUpperCase());
}

export function TravelModeIcon({ mode }: TravelModeIconProps) {
  const icons: Record<string, ReactNode> = {
    flight: (
      <path d="M4 13h7l5 7h2l-2-7h4c1 0 2-.8 2-2s-1-2-2-2h-4l2-7h-2l-5 7H4l3 2-3 2Z" />
    ),
    "flight & car": (
      <path d="M2 13h7l4 5h2l-1-5h4a2 2 0 1 0 0-4h-4l1-5h-2l-4 5H2l2 2-2 2Zm3 6a2 2 0 1 0 4 0h4a2 2 0 1 0 4 0h2v-2H3v2h2Z" />
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
    free: <path d="M12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-6-6V4Zm1 1v6h5A7 7 0 0 0 13 5Z" />,
    boat: (
      <path d="M4 11h16l-2 5H6l-2-5Zm8-7 4 5H8l4-5Zm-9 14c1.3 0 1.3 1 2.7 1 1.3 0 1.3-1 2.6-1s1.3 1 2.7 1c1.3 0 1.3-1 2.6-1s1.3 1 2.7 1c1.3 0 1.3-1 2.7-1v2c-1.3 0-1.3 1-2.7 1-1.4 0-1.4-1-2.7-1s-1.3 1-2.6 1c-1.4 0-1.4-1-2.7-1s-1.3 1-2.6 1c-1.4 0-1.4-1-2.7-1v-2Z" />
    ),
    bus: (
      <path d="M7 3h10a3 3 0 0 1 3 3v10a2 2 0 0 1-2 2v2h-2v-2H8v2H6v-2a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v6h12V6a1 1 0 0 0-1-1H7Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    ),
    bike: (
      <path d="M6 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm12 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM9 8h3l2 3h2v2h-3l-2-3H9V8Zm-3 6h4l3-5h2l-3 5h3v2h-3a2 2 0 0 1-1.7-.9L9 14H6v-2Z" />
    ),
    ferry: (
      <path d="M4 9h16v5H4V9Zm3-4h10l2 3H5l2-3Zm-4 11c1.3 0 1.3 1 2.7 1 1.3 0 1.3-1 2.6-1s1.3 1 2.7 1c1.3 0 1.3-1 2.6-1s1.3 1 2.7 1c1.3 0 1.3-1 2.7-1v2c-1.3 0-1.3 1-2.7 1-1.4 0-1.4-1-2.7-1s-1.3 1-2.6 1c-1.4 0-1.4-1-2.7-1s-1.3 1-2.6 1c-1.4 0-1.4-1-2.7-1v-2Z" />
    ),
    car: (
      <path d="M5 13 7 8h10l2 5v4h-1a2 2 0 1 1-4 0H10a2 2 0 1 1-4 0H5v-4Zm3-3-1 3h10l-1-3H8Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    ),
    canoe: (
      <path d="M3 15h18l-2 3H5l-2-3Zm2-4c2-3 4-4 7-4 2.8 0 4.7 1 7 4h-2c-1.8-2-3-2.6-5-2.6-2.1 0-3.4.7-5 2.6H5Zm4-3h2V5h2v3h2v2H9V8Z" />
    ),
    kayak: (
      <path d="M3 15h18l-2 3H5l-2-3Zm9-9 3 5h-2l-1-2-1 2H9l3-5Zm-6 6h12v2H6v-2Z" />
    ),
    other: (
      <path d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm1 13h-2v-2h2v2Zm1.7-6.3-.9.9A1.9 1.9 0 0 0 13 13h-2v-.5a2.7 2.7 0 0 1 .8-1.9l1.2-1.2a1.2 1.2 0 1 0-2-1L9.8 9.6l-1.4-1.4 1.2-1.2a3.2 3.2 0 1 1 5.1 3.7Z" />
    )
  };
  const icon = icons[mode] ?? icons.other;
  const label = labels[mode] ?? toFallbackLabel(mode);

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-linen/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal">
      <svg
        aria-hidden="true"
        className="h-4 w-4 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon}
      </svg>
      {label}
    </span>
  );
}
