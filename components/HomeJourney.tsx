"use client";
import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, GraduationCap } from "lucide-react";
import { companyData } from "@/data/company";

const summaryTimeline = [
  {
    year: "1995",
    title: "Founding in Baroda",
    subtitle: "Technocrat Chetan Kumbhani begins operations with 4 engineers.",
    stat: "4 Staff • 200 Calls"
  },
  {
    year: "2000s",
    title: "Regional Expansion",
    subtitle: "Direct branches in Ahmedabad, Surat & proprietary logic labs.",
    stat: "GJ Corridor Network"
  },
  {
    year: "2015 & 2018",
    title: "National Canon Honors",
    subtitle: "Conferred Canon Best Partner award twice for SLA excellence.",
    stat: "2x National Winner"
  },
  {
    year: "Present",
    title: "Interstate Footprint",
    subtitle: "13 certified hubs across GJ, MH & MP with 100+ specialists.",
    stat: "13 Hubs • 100+ Staff"
  }
];

export const HomeJourney: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
              The Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              How We Started &amp; Developed
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              From a single technical workshop in 1995 to a multi-state organization backed by three decades of engineering discipline.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50 hover:text-blue-700 text-xs font-bold text-slate-800 transition-all self-start md:self-auto group border border-slate-200 shadow-2xs"
          >
            <span>Explore Full Company Story</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Core Philosophy Callout */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
              Founding Principle
            </span>
            <blockquote className="text-base sm:text-lg font-bold text-slate-900 italic">
              &ldquo;{companyData.corePhilosophy}&rdquo;
            </blockquote>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/70 self-start md:self-auto shrink-0">
            <GraduationCap className="w-4 h-4 text-blue-700" />
            <span>Chetan Kumbhani, B.E. Electronics (1994)</span>
          </div>
        </div>

        {/* 4 Summary Timeline Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryTimeline.map((item, idx) => (
            <div
              key={item.year}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-blue-700 font-mono">
                    {item.year}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                    Phase {idx + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-500">
                {item.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
