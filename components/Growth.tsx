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
      <div className="w-full h-80 rounded-xl bg-white border border-slate-200 animate-pulse flex items-center justify-center text-slate-500 text-sm">
        Loading growth visualization charts...
      </div>
    ),
  }
);

const iconMap: Record<string, React.ReactNode> = {
  Headset: <Headset className="w-5 h-5 text-amber-600" />,
  Users: <Users className="w-5 h-5 text-blue-700" />,
  Network: <Network className="w-5 h-5 text-blue-600" />,
  MapPin: <MapPin className="w-5 h-5 text-emerald-600" />,
  Building2: <Building2 className="w-5 h-5 text-indigo-600" />,
  CalendarCheck2: <CalendarCheck2 className="w-5 h-5 text-rose-600" />,
};

export const Growth: React.FC = () => {
  return (
    <section id="growth" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Factual Organizational Expansion</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Growth Story & Operational Scaling
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            From 4 employees and 200 service calls in 1995 to over 100+ hardware engineers, 13 certified service centers, and 2,500+ documented calls.
          </p>
        </div>

        {/* 6 Key Stat Banners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {keyImpactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div className="mb-2">
                <div className="p-2 rounded-lg bg-slate-50 inline-block border border-slate-100">
                  {iconMap[metric.icon]}
                </div>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-slate-900 block">
                  {metric.value}
                </span>
                <span className="text-xs font-bold text-slate-700 block mt-0.5">
                  {metric.label}
                </span>
                <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                  {metric.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Data Visualization */}
        <GrowthChart />
      </div>
    </section>
  );
};
