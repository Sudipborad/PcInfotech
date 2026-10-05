"use client";
import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { 
  serviceCentersData, 
  ServiceCenter, 
  statesList, 
  brandList 
} from "@/data/locations";
import { 
  MapPin, 
  Search, 
  Phone, 
  Building, 
  Users, 
  ExternalLink, 
  Filter,
  CheckCircle2,
  Navigation
} from "lucide-react";

// Dynamic import with SSR disabled for Leaflet Map
const LocationMap = dynamic(
  () => import("./LocationMap").then((mod) => mod.LocationMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[450px] lg:h-[620px] rounded-2xl bg-slate-900 border border-slate-800 animate-pulse flex flex-col items-center justify-center text-slate-500 gap-3">
        <MapPin className="w-8 h-8 text-cyan-500 animate-bounce" />
        <span className="text-sm font-medium">Loading Interactive Service Center Map...</span>
      </div>
    ),
  }
);

export const Locations: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>("All States");
  const [selectedBrand, setSelectedBrand] = useState<string>("All Brands");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<ServiceCenter | null>(
    serviceCentersData[0]
  );

  const filteredLocations = useMemo(() => {
    return serviceCentersData.filter((loc) => {
      const matchState =
        selectedState === "All States" || loc.state === selectedState;
      const matchBrand =
        selectedBrand === "All Brands" ||
        loc.brandFocus.some(
          (b) => b.toLowerCase() === selectedBrand.toLowerCase()
        );
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        loc.city.toLowerCase().includes(query) ||
        loc.name.toLowerCase().includes(query) ||
        loc.address.toLowerCase().includes(query) ||
        loc.coveredAreas.some((a) => a.toLowerCase().includes(query));

      return matchState && matchBrand && matchSearch;
    });
  }, [selectedState, selectedBrand, searchQuery]);

  return (
    <section id="locations" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-cyan-400 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Geographic Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            13 Verified Service Centers & Coverage
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Click any service center card to focus the map, or select a marker on the map to inspect full facility details, staff count, and district coverage.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-8 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, district, address, or center..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 text-slate-200 placeholder-slate-500 border border-slate-800 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* State Filter */}
            <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {statesList.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedState === state
                      ? "bg-cyan-500 text-slate-950 font-bold"
                      : "bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>

            {/* Brand Filter */}
            <div className="md:col-span-3 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {brandList.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-2.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedBrand === brand
                      ? "bg-sky-400 text-slate-950 font-bold"
                      : "bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Two-Panel Layout: Synchronized Map (Left) and Location List (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Interactive Leaflet Map (7 cols) */}
          <div className="lg:col-span-7 sticky top-24">
            <LocationMap
              locations={filteredLocations}
              selectedLocation={selectedLocation}
              onSelectLocation={(loc) => setSelectedLocation(loc)}
            />

            {/* Selected Location Quick Snapshot beneath map */}
            {selectedLocation && (
              <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                    Focused Center
                  </span>
                  <span className="font-bold text-white text-sm">
                    {selectedLocation.name} ({selectedLocation.city})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${selectedLocation.phones[0]}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Center</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel: Scrollable Location Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 max-h-[750px] overflow-y-auto pr-1">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <span>Showing {filteredLocations.length} locations</span>
              <span className="text-cyan-400">Click to focus on map</span>
            </div>

            {filteredLocations.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400 text-xs">
                No service centers match your filter criteria. Try selecting &quot;All States&quot;.
              </div>
            ) : (
              filteredLocations.map((loc) => {
                const isSelected = selectedLocation?.id === loc.id;
                return (
                  <div
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? "bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-950/50 scale-[1.01]"
                        : "bg-slate-900/50 border-slate-800/90 hover:bg-slate-900/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-cyan-400 uppercase tracking-wider">
                            {loc.city}
                          </span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300">
                            {loc.state}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mt-1">
                          {loc.name}
                        </h4>
                      </div>

                      <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800 whitespace-nowrap">
                        Est. {loc.establishedYear}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {loc.address}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800/80">
                      <div className="flex items-center gap-1 text-slate-200 font-medium">
                        <Phone className="w-3 h-3 text-cyan-400" />
                        <span>{loc.phones[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Building className="w-3 h-3 text-slate-500" />
                        <span>{loc.areaSqFt} sq.ft ({loc.tenure})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-slate-500" />
                        <span>{loc.staffCount} Staff</span>
                      </div>
                    </div>

                    {/* Coverage tags */}
                    <div className="mt-3 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80 text-[10px] text-slate-400">
                      <span className="font-semibold text-slate-300 block mb-1">
                        District & Municipal Coverage:
                      </span>
                      <span>{loc.coveredAreas.join(", ")}</span>
                    </div>

                    <div className="mt-2 text-[10px] text-cyan-300/80 italic">
                      {loc.specialization}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
