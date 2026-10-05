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
      // Center roughly around Western India (Gujarat/Maharashtra/MP)
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
      // Map cleanup on unmount
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

      // Custom HTML Marker Pin
      const customIcon = L.divIcon({
        className: "custom-map-pin",
        html: `
          <div class="relative group cursor-pointer flex items-center justify-center">
            <div class="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
              isSelected
                ? "bg-cyan-500 ring-4 ring-cyan-300/40 scale-125 shadow-lg shadow-cyan-500/50"
                : "bg-slate-900 border-2 border-cyan-400 hover:scale-110"
            }">
              <span class="text-[10px] font-black ${isSelected ? "text-slate-950" : "text-cyan-300"}">
                ${loc.city.substring(0, 2).toUpperCase()}
              </span>
            </div>
            <div class="absolute -bottom-1 w-2 h-2 rotate-45 ${isSelected ? "bg-cyan-500" : "bg-cyan-400"}"></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      const marker = L.marker(loc.coordinates, { icon: customIcon }).addTo(map);

      // Popup Content
      const popupHtml = `
        <div style="font-family: sans-serif; min-width: 220px; padding: 4px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 11px; font-weight: 700; color: #0284c7; text-transform: uppercase;">
              ${loc.state} • ${loc.unitEntity}
            </span>
          </div>
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin: 0 0 4px 0;">
            ${loc.name}
          </h4>
          <p style="font-size: 11px; color: #475569; margin: 0 0 6px 0; line-height: 1.4;">
            ${loc.address}, ${loc.city}
          </p>
          <div style="font-size: 11px; color: #1e293b; margin-bottom: 6px; font-weight: 600;">
            📞 ${loc.phones.join(", ")}
          </div>
          <div style="font-size: 10px; color: #64748b; margin-bottom: 6px;">
            🏢 <b>Facility:</b> ${loc.areaSqFt} sq.ft (${loc.tenure}) | <b>Staff:</b> ${loc.staffCount} Engineers
          </div>
          <div style="background-color: #f1f5f9; padding: 6px; border-radius: 6px; font-size: 10px; color: #334155;">
            <b>Coverage:</b> ${loc.coveredAreas.slice(0, 4).join(", ")}${loc.coveredAreas.length > 4 ? ` +${loc.coveredAreas.length - 4} more` : ""}
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml);

      marker.on("click", () => {
        onSelectLocation(loc);
      });

      markersRef.current.set(loc.id, marker);
    });

    // Auto-pan / fit bounds if multiple locations, or pan to selected
    if (selectedLocation) {
      const marker = markersRef.current.get(selectedLocation.id);
      if (marker) {
        map.flyTo(selectedLocation.coordinates, 12, { duration: 1.2 });
        marker.openPopup();
      }
    }
  }, [locations, selectedLocation, onSelectLocation]);

  return (
    <div className="relative w-full h-[450px] lg:h-[620px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      <div ref={mapContainerRef} className="w-full h-full z-0" />
      
      {/* Map Overlay Badge */}
      <div className="absolute top-4 left-4 z-[400] bg-slate-900/90 border border-slate-800 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg pointer-events-none">
        <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          Interactive Hub Map ({locations.length} Filtered Centers)
        </span>
      </div>
    </div>
  );
};
