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
  Navigation,
  ArrowUpRight
} from "lucide-react";

// Dynamic import with SSR disabled for Leaflet Map
const LocationMap = dynamic(
  () => import("./LocationMap").then((mod) => mod.LocationMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[450px] lg:h-[620px] rounded-xl bg-white border border-slate-200 animate-pulse flex flex-col items-center justify-center text-slate-500 gap-3">
        <MapPin className="w-8 h-8 text-blue-600 animate-bounce" />
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
    <section id="locations" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Geographic Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            13 Verified Service Centers & Coverage
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Click any service center to focus on the map and get instant turn-by-turn directions in Google Maps.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, district, address, or center..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 text-slate-800 placeholder-slate-400 border border-slate-200 text-xs focus:outline-none focus:border-blue-600 transition-colors"
              />
            </div>

            {/* State Filter */}
            <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {statesList.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedState === state
                      ? "bg-blue-700 text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedBrand === brand
                      ? "bg-slate-800 text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Two-Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Map (7 cols) */}
          <div className="lg:col-span-7 sticky top-24">
            <LocationMap
              locations={filteredLocations}
              selectedLocation={selectedLocation}
              onSelectLocation={(loc) => setSelectedLocation(loc)}
            />

            {/* Selected Location Summary Bar below map */}
            {selectedLocation && (
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
                    Focused Service Center
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {selectedLocation.name} ({selectedLocation.city})
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.coordinates[0]},${selectedLocation.coordinates[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions in Google Maps</span>
                    <ArrowUpRight className="w-3 h-3 opacity-80" />
                  </a>

                  <a
                    href={`tel:${selectedLocation.phones[0]}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Call Center</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel: Location Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5 max-h-[750px] overflow-y-auto pr-1">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
              <span>Showing {filteredLocations.length} locations</span>
              <span className="text-blue-700 font-medium">Click to focus on map</span>
            </div>

            {filteredLocations.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-white border border-slate-200 text-slate-500 text-xs">
                No service centers match your filter criteria. Try selecting &quot;All States&quot;.
              </div>
            ) : (
              filteredLocations.map((loc) => {
                const isSelected = selectedLocation?.id === loc.id;
                const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${loc.coordinates[0]},${loc.coordinates[1]}`;

                return (
                  <div
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`p-4 rounded-xl cursor-pointer transition-all border ${
                      isSelected
                        ? "bg-white border-blue-600 shadow-md ring-1 ring-blue-600/30"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-blue-700 uppercase tracking-wider">
                            {loc.city}
                          </span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                            {loc.state}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mt-1">
                          {loc.name}
                        </h4>
                      </div>

                      <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-blue-50 text-blue-800 border border-blue-200 whitespace-nowrap">
                        Est. {loc.establishedYear}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {loc.address}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500 mt-3 pt-2.5 border-t border-slate-100">
                      <div className="flex items-center gap-1 text-slate-800 font-medium">
                        <Phone className="w-3 h-3 text-blue-600" />
                        <span>{loc.phones[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Building className="w-3 h-3 text-slate-400" />
                        <span>{loc.areaSqFt} sq.ft ({loc.tenure})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-slate-400" />
                        <span>{loc.staffCount} Staff</span>
                      </div>
                    </div>

                    {/* Coverage tags */}
                    <div className="mt-2.5 bg-slate-50 p-2 rounded-lg border border-slate-100 text-[10px] text-slate-600">
                      <span className="font-semibold text-slate-800 block mb-0.5">
                        District Coverage:
                      </span>
                      <span>{loc.coveredAreas.join(", ")}</span>
                    </div>

                    {/* Action Row: Get Directions in Google Maps & Call */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                      <span className="text-[10px] text-blue-700 italic truncate">
                        {loc.specialization}
                      </span>

                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors whitespace-nowrap"
                        title="Get directions to this service center in Google Maps"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>Get Directions ↗</span>
                      </a>
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
