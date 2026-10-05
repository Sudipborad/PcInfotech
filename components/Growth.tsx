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
      <div className="w-full h-80 rounded-2xl bg-slate-900/60 border border-slate-800 animate-pulse flex items-center justify-center text-slate-500 text-sm">
        Loading growth visualization charts...
      </div>
    ),
  }
);

const iconMap: Record<string, React.ReactNode> = {
  Headset: <Headset className="w-5 h-5 text-amber-400" />,
  Users: <Users className="w-5 h-5 text-sky-400" />,
  Network: <Network className="w-5 h-5 text-cyan-400" />,
  MapPin: <MapPin className="w-5 h-5 text-emerald-400" />,
  Building2: <Building2 className="w-5 h-5 text-indigo-400" />,
  CalendarCheck2: <CalendarCheck2 className="w-5 h-5 text-rose-400" />,
};

export const Growth: React.FC = () => {
  return (
    <section id="growth" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-cyan-400 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Factual Organizational Expansion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Growth Story & Operational Scaling
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            From 4 employees and 200 service calls in 1995 to over 100+ hardware and support engineers, 13 certified service centers, and 2,500+ documented calls.
          </p>
        </div>

        {/* 6 Key Stat Banners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {keyImpactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="mb-2">
                <div className="p-2 rounded-lg bg-slate-950 inline-block border border-slate-800">
                  {iconMap[metric.icon]}
                </div>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-white block">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold text-slate-300 block mt-0.5">
                  {metric.label}
                </span>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                  {metric.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Interactive Data Visualization */}
        <GrowthChart />
      </div>
    </section>
  );
};
