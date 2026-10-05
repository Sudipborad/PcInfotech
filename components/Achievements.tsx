"use client";
import React, { useState } from "react";
import { achievementsData } from "@/data/achievements";
import { CardSpotlight } from "./ui/CardSpotlight";
import { 
  Award, 
  CheckCircle, 
  Calendar, 
  Sparkles, 
  Trophy, 
  ShieldCheck, 
  Network, 
  Building 
} from "lucide-react";

export const Achievements: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Award", "Partnership", "Network Expansion", "Enterprise Milestone"];

  const filteredAchievements = filterCategory === "All"
    ? achievementsData
    : achievementsData.filter((a) => a.category === filterCategory);

  return (
    <section id="achievements" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-cyan-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Recognitions & Historic Milestones
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Three decades of engineering discipline validated by OEM manufacturer awards and national enterprise trust.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-colors ${
                  filterCategory === cat
                    ? "bg-cyan-500 text-slate-950 font-semibold"
                    : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Feature Banners: Canon Best Partner & 1,000+ Dealers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Canon Best Partner Award Card */}
          <CardSpotlight
            className="p-6 bg-gradient-to-br from-red-950/30 via-slate-900/60 to-slate-950 border-red-900/40 relative overflow-hidden"
            glowColor="rgba(239, 68, 68, 0.2)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-red-950/80 border border-red-800 text-red-400 shadow-lg shadow-red-900/30 flex-shrink-0">
                <Trophy className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-400 uppercase tracking-wider">
                  Two-Time Winner
                </span>
                <h3 className="text-xl font-bold text-white">
                  Canon Best Partner Award (2015 & 2018)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Conferred by Canon India in Goa convention for highest operational efficiency, warranty SLA compliance, customer satisfaction rating, and technical excellence across Gujarat and Maharashtra ASC hubs.
                </p>
                <div className="flex items-center gap-3 pt-2 text-[11px] text-red-300 font-medium">
                  <span>• Goa Annual Convention Honor</span>
                  <span>• Awarded 2015 & 2018</span>
                </div>
              </div>
            </div>
          </CardSpotlight>

          {/* National Spares Distribution Card */}
          <CardSpotlight
            className="p-6 bg-gradient-to-br from-cyan-950/30 via-slate-900/60 to-slate-950 border-cyan-900/40 relative overflow-hidden"
            glowColor="rgba(6, 182, 212, 0.2)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-950/80 border border-cyan-800 text-cyan-400 shadow-lg shadow-cyan-900/30 flex-shrink-0">
                <Network className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                  National Footprint
                </span>
                <h3 className="text-xl font-bold text-white">
                  1,000+ Dealers & 8 States Spares Supply
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Reputed service and quantity spares provider across 8 major Indian states: Gujarat, Maharashtra, Madhya Pradesh, Karnataka, Andhra Pradesh, West Bengal, Delhi, and Tamil Nadu. Authorized stockist of EPSON print heads and TVSE spares.
                </p>
                <div className="flex items-center gap-3 pt-2 text-[11px] text-cyan-300 font-medium">
                  <span>• Bulk Quantity Ready Stock</span>
                  <span>• EPSON & TVSE Authorized</span>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </div>

        {/* Timeline Visualization */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
          {filteredAchievements.map((item, index) => (
            <div key={index} className="relative group">
              {/* Year Pin on Left */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-bold text-cyan-400 font-mono">
                  {item.year}
                </span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Node Bullet */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              {/* Content Card */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="md:hidden inline-block text-xs font-bold text-cyan-400">
                    {item.year} • {item.category}
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>
                  {item.stat && (
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-sky-300 border border-slate-700">
                      {item.stat}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <p className="text-xs text-slate-400 mt-2 italic leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
