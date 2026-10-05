"use client";
import React from "react";
import { MapPin, Phone, Mail, ArrowUpRight, ShieldAlert, Wrench } from "lucide-react";
import { companyData } from "@/data/company";

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-cyan-500/30 shadow-2xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 mb-6">
            <Wrench className="w-3.5 h-3.5" />
            <span>Ready for Immediate Corporate & Retail Dispatch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl">
            Need Authorized Printer Repair or Genuine Spares?
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Connect directly with our central Pune coordination desk or visit any of our 13 certified service centers across Gujarat, Maharashtra, and Madhya Pradesh.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#locations"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 shadow-xl shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4 text-slate-900" />
              <span>Locate Nearest Center (13 Hubs)</span>
            </a>

            <a
              href="tel:02024495041"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-700 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Pune HQ: 020 24495041</span>
            </a>

            <a
              href="mailto:svipl.pune@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/40 border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>svipl.pune@gmail.com</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>• On-site Field Engineers</span>
            <span>• Component Chip-Level Labs</span>
            <span>• Quantity Bulk Spares Supply in 8 States</span>
          </div>
        </div>
      </div>
    </section>
  );
};
