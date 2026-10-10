import React from "react";
import Link from "next/link";
import { ShieldCheck, Cpu, Boxes, ArrowRight, Check, ShoppingBag, ExternalLink } from "lucide-react";

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
              What We Do: Four Core Pillars
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Authorised OEM warranty support, advanced chip-level restoration, printer sales, and interstate spare parts distribution.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://vivekinfotech.catalog.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-xs font-bold text-emerald-800 border border-emerald-300 transition-all shadow-2xs"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-700" />
              <span>Browse Online Store</span>
              <ExternalLink className="w-3 h-3 text-emerald-600 opacity-70" />
            </a>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-xs font-bold text-slate-800 transition-all group border border-slate-200/80"
            >
              <span>Full Specifications</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Summary Capability Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: OEM Authorized */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-xs hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-blue-700" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  HP &amp; Canon
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Authorised OEM Service
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Official warranty &amp; out-of-warranty support across Gujarat, Maharashtra, Rajasthan &amp; MP with 13 certified hubs.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>HP &amp; Canon ASC Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>Canon 2x Best Partner</span>
                </div>
              </div>
            </div>
            <Link
              href="/locations"
              className="pt-4 mt-5 border-t border-slate-200 text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center justify-between"
            >
              <span>View 13 Service Hubs</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Card 2: Chip-Level Labs */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-xs hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <Cpu className="w-5 h-5 text-indigo-700" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                  SMD Labs
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Chip-Level Logic Card Labs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Micro-soldering lab restoration for formatter cards, power supplies, and logic boards, saving costly swaps.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <span>Oscilloscope SMD Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <span>BGA Rework &amp; Jigs</span>
                </div>
              </div>
            </div>
            <Link
              href="/services"
              className="pt-4 mt-5 border-t border-slate-200 text-xs font-semibold text-indigo-700 hover:text-indigo-800 flex items-center justify-between"
            >
              <span>Explore Lab Scopes</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Card 3: Online Store & Printer Sales */}
          <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/90 flex flex-col justify-between shadow-xs hover:border-emerald-400 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                  <ShoppingBag className="w-5 h-5 text-emerald-700" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Online Store
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Printer Sales &amp; Spares Store
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Live e-commerce catalog (Vivek Infotech): printer sales, genuine print heads, pickup rollers &amp; fuser parts.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Printer Sales — All Brands</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>50+ Spare Parts Online</span>
                </div>
              </div>
            </div>
            <a
              href="https://vivekinfotech.catalog.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 mt-5 border-t border-emerald-200 text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>vivekinfotech.catalog.to</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 4: Bulk Spares & Logistics */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-xs hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <Boxes className="w-5 h-5 text-slate-700" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                  All Brands
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Bulk Spares &amp; Dealer Supply
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Genuine and compatible parts supply for all brands serving 1,000+ dealers and corporates across 8 states.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>Bulk Dealer Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>Same-Day Dispatch</span>
                </div>
              </div>
            </div>
            <Link
              href="/services"
              className="pt-4 mt-5 border-t border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between"
            >
              <span>Enterprise Logistics</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
