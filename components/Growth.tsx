"use client";
import React from "react";
import dynamic from "next/dynamic";
import { keyImpactMetrics } from "@/data/growth";
import { 
  TrendingUp, 
  Users, 
  Headset, 
  Network, 
  MapPin, 
  Building2, 
  CalendarCheck2 
} from "lucide-react";

// Dynamic import with SSR disabled for Recharts
const GrowthChart = dynamic(
  () => import("./GrowthChart").then((mod) => mod.GrowthChart),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-80 rounded-2xl bg-white border border-slate-200 animate-pulse flex items-center justify-center text-slate-500 text-sm">
        Loading growth visualization charts...
      </div>
    ),
  }
);

const iconMap: Record<string, React.ReactNode> = {
  Headset: <Headset className="w-5 h-5 text-blue-700" />,
  Users: <Users className="w-5 h-5 text-indigo-700" />,
  Network: <Network className="w-5 h-5 text-blue-600" />,
  MapPin: <MapPin className="w-5 h-5 text-emerald-700" />,
  Building2: <Building2 className="w-5 h-5 text-amber-700" />,
  CalendarCheck2: <CalendarCheck2 className="w-5 h-5 text-rose-700" />,
};

export const Growth: React.FC = () => {
  return (
    <section id="growth" className="py-20 lg:py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Factual Organizational Scaling</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            How We Grew: Data-Backed Expansion (1995–2020)
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Documented progression from a 4-engineer local workshop into an interstate network handling thousands of mission-critical calls annually.
          </p>
        </div>

        {/* 4 Primary Highlight KPI Tiles (Spacious & Clean) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Volume</span>
              <Headset className="w-4 h-4 text-blue-700" />
            </div>
            <span className="text-3xl font-black text-slate-900 block">2,500+</span>
            <span className="text-xs text-slate-600 font-medium block mt-1">Documented Calls/Year</span>
            <span className="text-[11px] text-blue-700 font-semibold mt-2 block">12.5x growth since 1995</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Engineering Depth</span>
              <Users className="w-4 h-4 text-indigo-700" />
            </div>
            <span className="text-3xl font-black text-slate-900 block">100+</span>
            <span className="text-xs text-slate-600 font-medium block mt-1">Hardware &amp; Support Engineers</span>
            <span className="text-[11px] text-indigo-700 font-semibold mt-2 block">Started with 4 specialists</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hub Footprint</span>
              <Building2 className="w-4 h-4 text-emerald-700" />
            </div>
            <span className="text-3xl font-black text-slate-900 block">13 Hubs</span>
            <span className="text-xs text-slate-600 font-medium block mt-1">GJ, MH &amp; MP Direct Centers</span>
            <span className="text-[11px] text-emerald-700 font-semibold mt-2 block">10,000+ sq.ft total lab space</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Spares Logistics</span>
              <Network className="w-4 h-4 text-amber-700" />
            </div>
            <span className="text-3xl font-black text-slate-900 block">1,000+</span>
            <span className="text-xs text-slate-600 font-medium block mt-1">IT Dealers in 8 States</span>
            <span className="text-[11px] text-amber-700 font-semibold mt-2 block">EPSON &amp; TVSE Bulk Stockist</span>
          </div>
        </div>

        {/* Data Visualization Chart Component */}
        <GrowthChart />
      </div>
    </section>
  );
};
