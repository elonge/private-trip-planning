export type TravelMode = "flight" | "van" | "train" | "walk" | "hike" | "free";

export interface TripDay {
  day: number;
  title: string;
  summary: string;
  location: string;
  travelMode: TravelMode;
  photoUrl: string;
  photoAlt: string;
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
