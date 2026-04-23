import type { TripPlan } from "../types/trip";

import { hollandMexicoTrip } from "./mexicoTrip";
import { nycCanadaTrip } from "./nycCanadaTrip";
import { nycRockiesTrip } from "./rockyMountainsTrip";
import { peruTrip } from "./peruTrip";
import { frieslandFamilyTrip } from "./Holland";

export const tripPlans = {
  peruTrip,
  nycCanadaTrip,
  nycRockiesTrip,
  hollandMexicoTrip,
  frieslandFamilyTrip
} satisfies Record<string, TripPlan>;

export type TripPlanId = keyof typeof tripPlans;

const tripDisplayNames: Record<TripPlanId, string> = {
  peruTrip: "Peru Adventure",
  nycCanadaTrip: "NYC + Eastern Canada",
  nycRockiesTrip: "NYC + Canadian Rockies",
  hollandMexicoTrip: "Holland + Mexico",
  frieslandFamilyTrip: "Friesland Family Trip"
};

export const defaultTripPlanId: TripPlanId = "hollandMexicoTrip";

function isTripPlanId(value: string): value is TripPlanId {
  return value in tripPlans;
}

export function getTripPlanIds(): TripPlanId[] {
  return Object.keys(tripPlans) as TripPlanId[];
}

export function getTripDisplayName(tripId: TripPlanId): string {
  return tripDisplayNames[tripId];
}

export function resolveTripPlan(rawTripId?: string | null): {
  tripId: TripPlanId;
  plan: TripPlan;
} {
  if (rawTripId && isTripPlanId(rawTripId)) {
    return {
      tripId: rawTripId,
      plan: tripPlans[rawTripId]
    };
  }

  return {
    tripId: defaultTripPlanId,
    plan: tripPlans[defaultTripPlanId]
  };
}
