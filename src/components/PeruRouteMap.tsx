"use client";

import { useEffect, useMemo, useRef } from "react";

import type { RouteStop } from "@/types/trip";

interface PeruRouteMapProps {
  stops: RouteStop[];
  title?: string;
  description?: string;
  ariaLabel?: string;
}

export function PeruRouteMap({
  stops,
  title = "Route Snapshot",
  description = "Live OpenStreetMap view of your route progression.",
  ariaLabel = "OpenStreetMap route map for the selected trip"
}: PeruRouteMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const orderedStops = useMemo(() => {
    return [...stops].sort((a, b) => a.order - b.order);
  }, [stops]);

  const routePositions = useMemo(() => {
    return orderedStops.map((stop) => [stop.lat, stop.lng] as [number, number]);
  }, [orderedStops]);

  useEffect(() => {
    let map: { remove: () => void } | null = null;
    let active = true;

    async function initMap() {
      if (!mapRef.current) {
        return;
      }

      const leaflet = await import("leaflet");
      if (!active || !mapRef.current) {
        return;
      }

      const L = leaflet.default;
      const leafletMap = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: false
      });
      map = leafletMap;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(leafletMap);

      if (routePositions.length > 0) {
        L.polyline(routePositions, {
          color: "#8f5c43",
          weight: 4,
          dashArray: "8 10"
        }).addTo(leafletMap);

        for (const stop of orderedStops) {
          L.circleMarker([stop.lat, stop.lng], {
            radius: 8,
            color: "#f5efe2",
            weight: 2,
            fillColor: "#8f5c43",
            fillOpacity: 1
          })
            .addTo(leafletMap)
            .bindTooltip(`${stop.order}. ${stop.label}`, {
              direction: "top",
              offset: [0, -8]
            });
        }

        leafletMap.fitBounds(L.latLngBounds(routePositions), { padding: [90, 90] });
      } else {
        leafletMap.setView([0, 0], 2);
      }
    }

    void initMap();

    return () => {
      active = false;
      if (map) {
        map.remove();
      }
    };
  }, [orderedStops, routePositions]);

  return (
    <section
      aria-labelledby="route-map-title"
      className="rounded-3xl border border-charcoal/10 bg-white p-5 shadow-[0_24px_60px_-36px_rgba(25,22,20,0.45)] md:p-8"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="route-map-title" className="font-display text-2xl text-charcoal md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-charcoal/75">
            {description}
          </p>
        </div>
        <p className="rounded-full bg-sand px-4 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-charcoal/80">
          OpenStreetMap Route
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-charcoal/10">
        <div
          ref={mapRef}
          aria-label={ariaLabel}
          className="h-[320px] w-full md:h-[460px]"
        />
      </div>
    </section>
  );
}
