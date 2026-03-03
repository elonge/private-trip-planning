import type { TripPlan } from "../types/trip";

import { nycCanadaTrip } from "./nycCanadaTrip";
import { nycRockiesTrip } from "./rockyMountainsTrip";
import { peruTrip } from "./peruTrip";

export const tripPlans = {
  peruTrip,
  nycCanadaTrip,
  nycRockiesTrip
} satisfies Record<string, TripPlan>;

export type TripPlanId = keyof typeof tripPlans;

export const defaultTripPlanId: TripPlanId = "nycCanadaTrip";

function isTripPlanId(value: string): value is TripPlanId {
  return value in tripPlans;
}

export function getTripPlanIds(): TripPlanId[] {
  return Object.keys(tripPlans) as TripPlanId[];
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
