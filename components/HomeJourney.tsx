"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, CheckCircle2 } from "lucide-react";
import { companyData } from "@/data/company";

const summaryTimeline = [
  {
    year: "1995",
    phase: "Phase 1: Inception",
    title: "Founding in Baroda",
    subtitle: "Technocrat Chetan Kumbhani begins operations with 4 engineers.",
    stat: "4 Staff • 200 Calls"
  },
  {
    year: "2002",
    phase: "Phase 2: Regional Hubs",
    title: "Gujarat Corridor Expansion",
    subtitle: "Direct branches in Ahmedabad & Surat; proprietary logic labs established.",
    stat: "GJ Corridor Network"
  },
  {
    year: "2008 & 2015",
    phase: "Phase 3: OEM Honors",
    title: "HP & Canon National Accreditations",
    subtitle: "HP Authorized Partner; 2x Canon Best Partner Winner at Goa Convention.",
    stat: "2x National Winner"
  },
  {
    year: "Present",
    phase: "Phase 4: Scale",
    title: "13 Hubs & 8-State Logistics",
    subtitle: "Certified physical hubs across GJ, MH & MP with 100+ hardware specialists.",
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
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
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

        {/* Progressive Connected Horizontal Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {summaryTimeline.map((item, idx) => (
              <div
                key={item.year}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all group"
              >
                <div>
                  {/* Step Marker Dot */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-full bg-blue-50 border-2 border-blue-600 flex items-center justify-center text-xs font-black text-blue-800 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-700">
                      {item.year}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {item.phase}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-700">{item.stat}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
