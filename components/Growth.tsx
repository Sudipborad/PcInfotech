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
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Factual Organizational Scaling</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            Three Decades of Measured Expansion (1995–2020)
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Documented progression from a 4-engineer Baroda workshop into an interstate technical network handling 2,500+ mission-critical hardware calls annually.
          </p>
        </div>

        {/* 4 Progression Metrics (How We Grew) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Volume</span>
              <Headset className="w-4 h-4 text-blue-700" />
            </div>
            <span className="text-3xl font-black text-slate-900 block font-mono">12.5x</span>
            <span className="text-xs text-slate-700 font-semibold block mt-1">200 &rarr; 2,500+ Calls/Year</span>
            <span className="text-[11px] text-blue-700 font-medium mt-1.5 block">Documented annual throughput</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Engineering Depth</span>
              <Users className="w-4 h-4 text-indigo-700" />
            </div>
            <span className="text-3xl font-black text-slate-900 block font-mono">25x</span>
            <span className="text-xs text-slate-700 font-semibold block mt-1">4 &rarr; 100+ Specialists</span>
            <span className="text-[11px] text-indigo-700 font-medium mt-1.5 block">Field &amp; logic lab engineers</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Physical Hubs</span>
              <Building2 className="w-4 h-4 text-emerald-700" />
            </div>
            <span className="text-3xl font-black text-slate-900 block font-mono">13 Hubs</span>
            <span className="text-xs text-slate-700 font-semibold block mt-1">1 &rarr; 13 Certified Centers</span>
            <span className="text-[11px] text-emerald-700 font-medium mt-1.5 block">10,000+ sq.ft total lab space</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dealer Network</span>
              <Network className="w-4 h-4 text-amber-700" />
            </div>
            <span className="text-3xl font-black text-slate-900 block font-mono">1,000+</span>
            <span className="text-xs text-slate-700 font-semibold block mt-1">Active Regional Dealers</span>
            <span className="text-[11px] text-amber-700 font-medium mt-1.5 block">Original parts across 8 states</span>
          </div>
        </div>

        {/* Data Visualization Chart Component */}
        <GrowthChart />
      </div>
    </section>
  );
};
