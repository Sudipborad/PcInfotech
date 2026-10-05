"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ServiceCenter } from "@/data/locations";

interface LocationMapProps {
  locations: ServiceCenter[];
  selectedLocation: ServiceCenter | null;
  onSelectLocation: (loc: ServiceCenter) => void;
}

export const LocationMap: React.FC<LocationMapProps> = ({
  locations,
  selectedLocation,
  onSelectLocation,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Center around Western India (Gujarat/Maharashtra/MP)
      const map = L.map(mapContainerRef.current, {
        center: [20.5937, 74.5],
        zoom: 6,
        scrollWheelZoom: false,
      });

      // 100% Free OpenStreetMap public tiles - No API key required
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        subdomains: ["a", "b", "c"],
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Markers when locations change or selected location changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear previous markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current.clear();

    locations.forEach((loc) => {
      const isSelected = selectedLocation?.id === loc.id;
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${loc.coordinates[0]},${loc.coordinates[1]}`;

      // Custom HTML Marker Pin in Brand Colors
      const customIcon = L.divIcon({
        className: "custom-map-pin",
        html: `
          <div class="relative cursor-pointer flex items-center justify-center">
            <div class="w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-transform duration-200 ${
              isSelected
                ? "bg-blue-700 ring-4 ring-blue-300 scale-125"
                : "bg-white border-2 border-blue-700 hover:scale-110"
            }">
              <span class="text-[11px] font-black ${isSelected ? "text-white" : "text-blue-800"}">
                ${loc.city.substring(0, 2).toUpperCase()}
              </span>
            </div>
            <div class="absolute -bottom-1 w-2.5 h-2.5 rotate-45 ${isSelected ? "bg-blue-700" : "bg-blue-700"}"></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      const marker = L.marker(loc.coordinates, { icon: customIcon }).addTo(map);

      // Popup Content with explicit Google Maps directions link
      const popupHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; min-width: 240px; padding: 4px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 10px; font-weight: 700; color: #0B4EA2; text-transform: uppercase;">
              ${loc.state} • ${loc.unitEntity}
            </span>
          </div>
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin: 0 0 4px 0; line-height: 1.3;">
            ${loc.name}
          </h4>
          <p style="font-size: 11px; color: #475569; margin: 0 0 6px 0; line-height: 1.4;">
            ${loc.address}, ${loc.city}
          </p>
          <div style="font-size: 11px; color: #0f172a; margin-bottom: 10px; font-weight: 600;">
            📞 ${loc.phones.join(", ")}
          </div>
          <a
            href="${googleMapsUrl}"
            target="_blank"
            rel="noopener noreferrer"
            style="display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; padding: 7px 12px; background-color: #0B4EA2; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 11px; font-weight: 700; text-align: center; box-sizing: border-box;"
          >
            Get Direction ↗
          </a>
        </div>
      `;

      marker.bindPopup(popupHtml);

      marker.on("click", () => {
        onSelectLocation(loc);
      });

      markersRef.current.set(loc.id, marker);
    });

    if (selectedLocation) {
      const marker = markersRef.current.get(selectedLocation.id);
      if (marker) {
        map.flyTo(selectedLocation.coordinates, 12, { duration: 1.2 });
        marker.openPopup();
      }
    }
  }, [locations, selectedLocation, onSelectLocation]);

  return (
    <div className="relative w-full h-[450px] lg:h-[620px] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
      <div ref={mapContainerRef} className="w-full h-full z-0" />
      
      {/* Map Badge */}
      <div className="absolute top-4 left-4 z-[400] bg-white/95 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm pointer-events-none">
        <span className="text-xs font-semibold text-blue-800 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          Interactive Hub Map ({locations.length} Filtered Centers)
        </span>
      </div>
    </div>
  );
};
