"use client";
import React from "react";
import Link from "next/link";
import { ShieldCheck, Cpu, Boxes, ArrowRight, Check } from "lucide-react";

export const HomeWhatWeDo: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
              Capabilities Overview
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              What We Do: Three Core Competencies
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              An overview of our technical capabilities. Explore deeper service workflows, testing standards, and brand scopes on our services page.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-xs font-bold text-slate-800 transition-all self-start md:self-auto group border border-slate-200/80"
          >
            <span>View All Services &amp; Specifications</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Summary Capability Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-xs hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <ShieldCheck className="w-6 h-6 text-blue-700" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  HP &amp; Canon
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Authorized OEM Warranty Hubs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Certified warranty and out-of-warranty repairs for HP laptops and printers (Gujarat State) and Canon Authorized Service Centers across Western India.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>Canon 2x Best Partner Winner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>13 Certified Direct Hubs</span>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-200 text-xs font-semibold text-blue-700">
              Direct OEM Authorization &rarr;
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-xs hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <Cpu className="w-6 h-6 text-indigo-700" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                  Proprietary Labs
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Chip-Level Logic Card Labs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Proprietary SMD micro-soldering labs restoring formatter boards, logic cards, and SMPS units, saving client replacement capital.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Component Micro-Soldering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Advanced Test Jigs &amp; Rework</span>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-200 text-xs font-semibold text-indigo-700">
              Board-Level Engineering &rarr;
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-xs hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <Boxes className="w-6 h-6 text-emerald-700" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  8-State Reach
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Bulk Spares &amp; Enterprise SLAs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Authorized stockist of EPSON print heads &amp; TVSE spares supplying 1,000+ dealers, plus mission-critical banking printer contracts.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>EPSON Print Heads in Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Passbook &amp; Plotter Contracts</span>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-200 text-xs font-semibold text-emerald-700">
              Interstate Logistics &rarr;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
