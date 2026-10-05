"use client";
import React, { useState } from "react";
import { achievementsData } from "@/data/achievements";
import { 
  Trophy, 
  Network, 
  Award,
  CheckCircle2
} from "lucide-react";

export const Achievements: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Award", "Partnership", "Network Expansion", "Enterprise Milestone"];

  const filteredAchievements = filterCategory === "All"
    ? achievementsData
    : achievementsData.filter((a) => a.category === filterCategory);

  return (
    <section id="achievements" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Recognitions & Historic Milestones
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Three decades of engineering discipline validated by OEM manufacturer awards and national enterprise trust.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  filterCategory === cat
                    ? "bg-blue-700 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Banners: Canon Best Partner & 1,000+ Dealers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Canon Best Partner Award Card */}
          <div className="p-6 rounded-xl bg-red-50/60 border border-red-200 shadow-xs flex items-start gap-4">
            <div className="p-3 rounded-lg bg-red-600 text-white flex-shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider block">
                Two-Time Winner
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Canon Best Partner Award (2015 & 2018)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conferred by Canon India in Goa convention for operational efficiency, warranty SLA compliance, customer satisfaction rating, and technical excellence across Gujarat and Maharashtra ASC hubs.
              </p>
              <div className="flex items-center gap-3 pt-1 text-[11px] text-red-800 font-medium">
                <span>• Goa Annual Convention Honor</span>
                <span>• Awarded 2015 & 2018</span>
              </div>
            </div>
          </div>

          {/* National Spares Distribution Card */}
          <div className="p-6 rounded-xl bg-blue-50/60 border border-blue-200 shadow-xs flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-700 text-white flex-shrink-0">
              <Network className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
                National Footprint
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                1,000+ Dealers & 8 States Spares Supply
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reputed service and quantity spares provider across 8 major Indian states: Gujarat, Maharashtra, Madhya Pradesh, Karnataka, Andhra Pradesh, West Bengal, Delhi, and Tamil Nadu. Authorized stockist of EPSON print heads and TVSE spares.
              </p>
              <div className="flex items-center gap-3 pt-1 text-[11px] text-blue-800 font-medium">
                <span>• Bulk Quantity Ready Stock</span>
                <span>• EPSON & TVSE Authorized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-8 pl-6 md:pl-10">
          {filteredAchievements.map((item, index) => (
            <div key={index} className="relative">
              {/* Year Pin on Left */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-bold text-blue-700 font-mono">
                  {item.year}
                </span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Node Bullet */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-700" />

              {/* Content Card */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="md:hidden inline-block text-xs font-bold text-blue-700">
                    {item.year} • {item.category}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h4>
                  {item.stat && (
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-white text-blue-800 border border-slate-200">
                      {item.stat}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <p className="text-xs text-slate-500 mt-2 italic leading-relaxed">
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
