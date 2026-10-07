"use client";
import React from "react";
import { MapPin, Phone, Mail, Wrench, ShieldCheck } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-md text-center flex flex-col items-center relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/15 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>Ready for Corporate SLAs &amp; Walk-In Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl leading-tight">
            Connect with Gujarat &amp; Western India&apos;s Proven Engineering Network.
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Visit any of our 13 certified service centers across Gujarat, Maharashtra, and Madhya Pradesh, or contact our central Pune desk for commercial AMC coordination.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#locations"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 shadow-sm transition-all hover:scale-[1.02]"
            >
              <MapPin className="w-4 h-4 text-blue-700" />
              <span>Locate Nearest Hub (13 Centers)</span>
            </a>

            <a
              href="tel:02024495041"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-blue-700 hover:bg-blue-800 border border-blue-600 shadow-sm transition-all hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 text-blue-200" />
              <span>Call Pune HQ: 020 24495041</span>
            </a>

            <a
              href="mailto:svipl.pune@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-300" />
              <span>svipl.pune@gmail.com</span>
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-300">
            <span>• 100+ Hardware Engineers</span>
            <span>• Proprietary Component Labs</span>
            <span>• Spares Logistics Across 8 States</span>
          </div>
        </div>
      </div>
    </section>
  );
};
