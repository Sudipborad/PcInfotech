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
              Geographic Footprint • 4 States
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              One Trust. Two Brands. Four States.
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              13 physical walk-in centers and technical labs across Gujarat, Maharashtra, and Madhya Pradesh, with network coverage in 4 states and spares supply across 8 states.
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
            <span className="text-2xl sm:text-3xl font-black text-blue-700 block font-mono">4 States</span>
            <span className="text-xs text-slate-600 font-medium mt-1 block">GJ, MH, MP &amp; RJ</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 block font-mono">8 States</span>
            <span className="text-xs text-slate-600 font-medium mt-1 block">Spares Supply Distribution</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
            <span className="text-2xl sm:text-3xl font-black text-blue-700 block font-mono">1,000+</span>
            <span className="text-xs text-slate-600 font-medium mt-1 block">Dealer Network Accounts</span>
          </div>
        </div>

        {/* 4 State Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Gujarat Cluster */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-900">
                  Gujarat (12 Cities)
                </span>
                <MapPin className="w-4 h-4 text-blue-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                HP &amp; Canon Service Network
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Comprehensive state coverage with walk-in repair hubs and enterprise engineer teams.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {[
                  "Vapi",
                  "Surat",
                  "Ankleshwar",
                  "Baroda",
                  "Godhara",
                  "Ahmedabad",
                  "Gandhinagar",
                  "Rajkot",
                  "Morbi",
                  "Junagadh",
                  "Adipur",
                  "Jamnagar"
                ].map((city) => (
                  <span
                    key={city}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200/60"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/locations?state=Gujarat"
              className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1 pt-3 border-t border-slate-200"
            >
              <span>View Gujarat Centers</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Maharashtra Cluster */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-900">
                  Maharashtra (6 Cities)
                </span>
                <Building2 className="w-4 h-4 text-indigo-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Pune HQ &amp; Pimpri Canon ASC
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Home to our central corporate headquarters, high-end labs, and dedicated Canon service branch.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {[
                  "Pune (Narayan Peth HQ)",
                  "Pimpri (Canon ASC)",
                  "Nashik",
                  "Chh. Sambhajinagar",
                  "Jalgaon",
                  "Ahilyanagar"
                ].map((city) => (
                  <span
                    key={city}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200/60"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/locations?state=Maharashtra"
              className="text-xs font-semibold text-indigo-700 hover:text-indigo-800 flex items-center gap-1 pt-3 border-t border-slate-200"
            >
              <span>View Maharashtra Centers</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Madhya Pradesh Cluster */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">
                  Madhya Pradesh (4 Cities)
                </span>
                <Globe2 className="w-4 h-4 text-emerald-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Central India Service Network
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                HP and Canon regional support across major commercial and industrial hubs of MP.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Gwalior", "Indore", "Bhopal", "Jabalpur"].map((city) => (
                  <span
                    key={city}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200/60"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/locations?state=Madhya Pradesh"
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 pt-3 border-t border-slate-200"
            >
              <span>View MP Centers</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Rajasthan Cluster */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                  Rajasthan (3 Cities)
                </span>
                <MapPin className="w-4 h-4 text-amber-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                North-Western Corridor Hubs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Dedicated HP service presence connecting major industrial and business centers of Rajasthan.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Jaipur", "Udaipur", "Alwar"].map((city) => (
                  <span
                    key={city}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200/60"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/locations?state=Rajasthan"
              className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 pt-3 border-t border-slate-200"
            >
              <span>View Rajasthan Centers</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
