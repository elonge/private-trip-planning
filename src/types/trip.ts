export type TravelMode =
  | "flight"
  | "van"
  | "train"
  | "walk"
  | "hike"
  | "free"
  | "boat"
  | "bus"
  | "bike"
  | "ferry"
  | "car"
  | "canoe"
  | "kayak"
  | "flight & car"
  | "other"
  | (string & {});

export interface TripPhoto {
  url: string;
  alt: string;
}

export interface TripDay {
  day: number;
  title: string;
  summary: string;
  location: string;
  travelMode: TravelMode;
  photoUrl?: string;
  photoAlt?: string;
  photos?: TripPhoto[];
  note?: string;
  optional?: boolean;
  videoUrl?: string;
}

export interface TripBlog {
  title: string;
  url: string;
}

export interface TripPhase {
  id: string;
  name: string;
  description: string;
  altitudeNote: string;
  blogs: TripBlog[];
  videoUrls: string[];
  days: TripDay[];
}

export interface RouteStop {
  id: string;
  label: string;
  lat: number;
  lng: number;
  order: number;
}

export interface TripPlan {
  title: string;
  subtitle: string;
  durationDays: number;
  heroPhotoUrl: string;
  heroPhotoAlt: string;
  phases: TripPhase[];
  routeStops: RouteStop[];
}
