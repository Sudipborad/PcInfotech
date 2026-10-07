"use client";
import React, { useState } from "react";
import { 
  Trophy, 
  Network, 
  Award,
  CheckCircle2,
  Medal,
  Calendar
} from "lucide-react";

interface MilestoneItem {
  year: string;
  category: "Award" | "Partnership" | "Network";
  title: string;
  description: string;
  badge: string;
  isMajor?: boolean;
}

const milestonesList: MilestoneItem[] = [
  {
    year: "1995",
    category: "Network",
    title: "Founding in Baroda, Gujarat",
    description: "Started technical repair operations with 4 engineers, handling DMP & early peripheral diagnostics.",
    badge: "Foundation"
  },
  {
    year: "2002",
    category: "Network",
    title: "Expansion to Ahmedabad & Surat",
    description: "Opened direct branches in Gujarat's major economic corridors, expanding field technician coverage.",
    badge: "Regional Growth"
  },
  {
    year: "2008",
    category: "Partnership",
    title: "HP Authorized Service Provider Appointment",
    description: "Authorized by HP for laptop and printer warranty services across Gujarat State territory.",
    badge: "HP Authorized"
  },
  {
    year: "2015",
    category: "Award",
    title: "Canon Best Partner Award (Goa)",
    description: "Conferred national honor by Canon India for highest warranty SLA compliance and technical excellence.",
    badge: "National Award",
    isMajor: true
  },
  {
    year: "2018",
    category: "Award",
    title: "Second Canon Best Partner National Award",
    description: "Second national convention honor from Canon India, validating sustained multi-year service benchmarks.",
    badge: "2x Winner",
    isMajor: true
  },
  {
    year: "2020+",
    category: "Network",
    title: "13 Certified Hubs & 8-State Logistics",
    description: "Established 13 direct walk-in centers across GJ, MH, and MP, supplying genuine spares to 1,000+ dealers.",
    badge: "Interstate Footprint"
  }
];

export const Achievements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? milestonesList
    : milestonesList.filter((m) => m.category === activeCategory);

  return (
    <section id="achievements" className="py-20 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors &amp; Historic Milestones</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Validated by OEM Awards &amp; Dealer Trust
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Three decades of hardware discipline recognized by OEM global leaders and verified by over 1,000 IT dealer partners.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {["All", "Award", "Partnership", "Network"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeCategory === cat
                    ? "bg-blue-700 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2 Primary Headline Honor Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Canon Best Partner Award Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-red-600 text-white shadow-xs">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200">
                  Two-Time National Winner
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2">
                Canon Best Partner National Award (2015 &amp; 2018)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conferred by Canon India at the annual Goa national convention for outstanding warranty SLA turnaround, customer happiness metrics, and technical bench competence across Gujarat &amp; Maharashtra ASC centers.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-red-100 flex items-center justify-between text-xs font-bold text-red-800">
              <span>Goa Annual Convention</span>
              <span>Conferred 2015 &amp; 2018</span>
            </div>
          </div>

          {/* National Spares Distribution Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-700 text-white shadow-xs">
                  <Network className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                  Interstate Footprint
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2">
                1,000+ Dealers &amp; 8 States Genuine Spares
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trusted technical parts provider across 8 major Indian states: Gujarat, Maharashtra, Madhya Pradesh, Karnataka, Andhra Pradesh, West Bengal, Delhi, and Tamil Nadu. Authorized stockist of EPSON print heads and TVSE spares.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-blue-100 flex items-center justify-between text-xs font-bold text-blue-800">
              <span>Bulk Ready Stock Inventory</span>
              <span>EPSON &amp; TVSE Authorized</span>
            </div>
          </div>
        </div>

        {/* Milestone Progression (Visual Timeline with Large Numbers & Short Text) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Historic Milestone Timeline
            </span>
            <span className="text-xs text-slate-400">
              Sequential Organization Progress
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.year}
                className={`p-5 rounded-xl border transition-all ${
                  item.isMajor
                    ? "bg-red-50/40 border-red-200/70 hover:border-red-300"
                    : "bg-slate-50/70 border-slate-200/70 hover:border-blue-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black font-mono ${
                    item.isMajor ? "text-red-600" : "text-blue-700"
                  }`}>
                    {item.year}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-slate-700 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
