"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Navigation, ArrowRight, Building2, CheckCircle2, Globe2 } from "lucide-react";
import { companyData } from "@/data/company";

export const HomeReach: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
              Geographic Footprint
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              How Far We Have Reached
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              13 physical walk-in centers and technical labs across Gujarat, Maharashtra, and Madhya Pradesh, plus logistics coverage in 8 Indian states.
            </p>
          </div>

          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-xs font-bold text-white transition-all self-start md:self-auto group shadow-xs hover:shadow-sm"
          >
            <span>Explore All 13 Locations on Map</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Quick Stat Banners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 block font-mono">13</span>
            <span className="text-xs text-slate-600 font-medium mt-1 block">Certified Direct Hubs</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
            <span className="text-2xl sm:text-3xl font-black text-blue-700 block font-mono">3 States</span>
            <span className="text-xs text-slate-600 font-medium mt-1 block">Physical Centers (GJ, MH, MP)</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 block font-mono">8 States</span>
            <span className="text-xs text-slate-600 font-medium mt-1 block">Spares Supply Distribution</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
            <span className="text-2xl sm:text-3xl font-black text-blue-700 block font-mono">1,000+</span>
            <span className="text-xs text-slate-600 font-medium mt-1 block">Registered Dealer Accounts</span>
          </div>
        </div>

        {/* State Cluster Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gujarat Cluster */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-900">
                  Gujarat State (9 Centers)
                </span>
                <MapPin className="w-4 h-4 text-blue-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Core Origin &amp; Primary Corridor
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Full-territory warranty &amp; out-of-warranty coverage with certified walk-in centers and field engineer teams.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Vadodara (2)", "Ahmedabad", "Surat", "Rajkot", "Bhavnagar", "Jamnagar", "Anand", "Bharuch"].map((city) => (
                  <span
                    key={city}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200/60"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/locations"
              className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1 pt-3 border-t border-slate-200"
            >
              <span>View Gujarat Hub Addresses</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Maharashtra Cluster */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-900">
                  Maharashtra State (3 Centers)
                </span>
                <Building2 className="w-4 h-4 text-indigo-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Corporate HQ &amp; Metro Coverage
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Home to our central corporate headquarters in Pune, alongside active branches in Mumbai and Nashik.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Pune (HQ)", "Mumbai", "Nashik"].map((city) => (
                  <span
                    key={city}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200/60"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/locations"
              className="text-xs font-semibold text-indigo-700 hover:text-indigo-800 flex items-center gap-1 pt-3 border-t border-slate-200"
            >
              <span>View Maharashtra Hub Addresses</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* MP Cluster + Interstate Spares */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">
                  MP Hub + 8 States Logistics
                </span>
                <Globe2 className="w-4 h-4 text-emerald-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Central India Hub &amp; Parts Logistics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Direct walk-in hub in Indore, combined with daily parts dispatch covering 8 states across India.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Indore (Hub)", "Rajasthan", "Goa", "Karnataka", "Punjab", "Delhi NCR"].map((loc) => (
                  <span
                    key={loc}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200/60"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/locations"
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 pt-3 border-t border-slate-200"
            >
              <span>View Map &amp; Navigation</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
