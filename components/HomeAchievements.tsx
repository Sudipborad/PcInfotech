"use client";
import React from "react";
import Link from "next/link";
import { Trophy, Award, Network, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const HomeAchievements: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
              Recognition &amp; Milestones
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Major Achievements
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Demonstrated technical excellence certified by multinational OEMs and our expansive regional partner network.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50 hover:text-blue-700 text-xs font-bold text-slate-800 transition-all self-start md:self-auto group border border-slate-200 shadow-2xs"
          >
            <span>View Company Story &amp; Timeline</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Standout Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Canon 2x Best Partner */}
          <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-700">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                  2x National Winner
                </span>
              </div>
              <div className="text-xs font-bold text-blue-700 font-mono mb-1">
                2015 &amp; 2018
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Canon Best Partner National Awards
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Conferred national honors by Canon India in Goa convention for highest warranty SLA compliance, turnaround speed, and customer satisfaction across Western India.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Certified Canon Service Hubs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Sustained Multi-Year SLA Record</span>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-100 text-xs font-semibold text-amber-700">
              National Convention Honor &rarr;
            </div>
          </div>

          {/* Card 2: 1000+ Dealers in 8 States */}
          <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-700">
                  <Network className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-900">
                  Interstate Reach
                </span>
              </div>
              <div className="text-xs font-bold text-blue-700 font-mono mb-1">
                2010–Present
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                1,000+ IT Dealers in 8 States
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Established as a premier distribution backbone for original EPSON, TVS-E, and HP printer parts, logic cards, formatters, and consumables across Western and Central India.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Authorised EPSON &amp; TVSE Stockist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Bulk Courier Dispatch Network</span>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-100 text-xs font-semibold text-blue-700">
              Interstate Spares Channel &rarr;
            </div>
          </div>

          {/* Card 3: 30+ Years Continuous Service */}
          <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200/80 text-indigo-700">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-900">
                  1995–2025
                </span>
              </div>
              <div className="text-xs font-bold text-indigo-700 font-mono mb-1">
                Three Decades
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                30+ Years Industry Leadership
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Founded by an electronics engineer, growing from 4 technicians into 100+ hardware specialists, 13 physical hubs, and 10,000+ sq.ft of ESD-protected technical lab space.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>100+ Hardware Engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>10,000+ sq.ft Facility Space</span>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-100 text-xs font-semibold text-indigo-700">
              Technocrat Governance &rarr;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
