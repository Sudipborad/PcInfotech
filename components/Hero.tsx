"use client";
import React from "react";
import Link from "next/link";
import { 
  Award, 
  MapPin, 
  Cpu, 
  Phone, 
  CheckCircle2, 
  Users, 
  Building2, 
  Network, 
  Trophy,
  ArrowRight
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-slate-50/70 via-white to-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold Company Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Accreditation Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold tracking-wide">
              <Award className="w-3.5 h-3.5 text-blue-700" />
              <span>Est. 1995 • HP Authorized • Canon 2x Best Partner • TVSE & EPSON Spares</span>
            </div>

            {/* Clear, Bold Headline (Answers 'What does company do?') */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Authorized IT Hardware &amp; Printer Engineering Across Western India.
            </h1>

            {/* Concise Supporting Statement (1 sentence, no filler) */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Direct authorized service partner for <strong className="text-slate-900 font-semibold">HP, Canon, TVSE, and EPSON</strong> with <strong className="text-blue-700 font-semibold">13 verified hubs</strong>, 100+ hardware specialists, and proprietary chip-level logic card repair labs since 1995.
            </p>

            {/* Visual Credibility Pillars (Short + Scannable) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-2xl font-black text-slate-900 block">30+</span>
                <span className="text-xs text-slate-500 font-medium">Years in Business</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-2xl font-black text-slate-900 block">13</span>
                <span className="text-xs text-slate-500 font-medium">Direct Service Hubs</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-2xl font-black text-slate-900 block">100+</span>
                <span className="text-xs text-slate-500 font-medium">Hardware Engineers</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-2xl font-black text-slate-900 block">1,000+</span>
                <span className="text-xs text-slate-500 font-medium">Dealers in 8 States</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-blue-700 hover:bg-blue-800 shadow-sm transition-all hover:shadow-md"
              >
                <MapPin className="w-4 h-4" />
                <span>Locate 13 Service Hubs</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-2xs transition-all"
              >
                <Cpu className="w-4 h-4 text-blue-700" />
                <span>Explore Capabilities</span>
              </Link>

              <a
                href="tel:02024495041"
                className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-blue-700 px-3 py-2 font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>HQ Pune: 020 24495041</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Operational Highlights (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Operational Scope
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Gujarat • Maharashtra • Madhya Pradesh
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Active Network
                </span>
              </div>

              {/* 4 Story Metric Tiles */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                  <div className="flex items-center gap-2 text-blue-700 mb-1.5">
                    <Building2 className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Service Hubs</span>
                  </div>
                  <span className="text-2xl font-black text-slate-900 block">13 Direct</span>
                  <span className="text-[11px] text-slate-500">Walk-in &amp; Onsite</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                  <div className="flex items-center gap-2 text-blue-700 mb-1.5">
                    <Users className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Technical Team</span>
                  </div>
                  <span className="text-2xl font-black text-slate-900 block">100+ Staff</span>
                  <span className="text-[11px] text-slate-500">Field &amp; Lab Engineers</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                  <div className="flex items-center gap-2 text-blue-700 mb-1.5">
                    <Network className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Spares Network</span>
                  </div>
                  <span className="text-2xl font-black text-slate-900 block">8 States</span>
                  <span className="text-[11px] text-slate-500">1,000+ IT Dealers</span>
                </div>

                <div className="p-4 rounded-xl bg-red-50/50 border border-red-200/70">
                  <div className="flex items-center gap-2 text-red-600 mb-1.5">
                    <Trophy className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Canon Award</span>
                  </div>
                  <span className="text-2xl font-black text-slate-900 block">2x Winner</span>
                  <span className="text-[11px] text-slate-500">Best Partner (2015 &amp; 2018)</span>
                </div>
              </div>

              {/* Direct Link to Interactive Map */}
              <a
                href="#locations"
                className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/80 border border-blue-100 text-xs font-bold text-blue-800 hover:bg-blue-100 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-700" />
                  <span>View All 13 Locations &amp; Get Directions</span>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Partner Logos Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Authorized Brands &amp; Capabilities:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {/* HP */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/LOGOS/HP_logo_2025.svg" alt="HP Logo" className="h-5 w-5 object-contain" />
                <span className="text-xs font-semibold text-slate-800">HP</span>
                <span className="text-[10px] text-blue-700 font-medium">Authorized</span>
              </div>

              {/* Canon */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/LOGOS/Canon_logo.svg" alt="Canon Logo" className="h-4 w-auto object-contain" />
                <span className="text-[10px] text-red-600 font-semibold">ASC</span>
              </div>

              {/* EPSON */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/LOGOS/EPSON-Logo.svg" alt="EPSON Logo" className="h-4 w-auto object-contain" />
                <span className="text-[10px] text-slate-500 font-medium">Stockist</span>
              </div>

              {/* TVSE */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/LOGOS/TVSE_LOGO.jpeg" alt="TVSE Logo" className="h-5 w-auto object-contain" />
                <span className="text-[10px] text-slate-500 font-medium">Distributor</span>
              </div>

              {/* Samsung */}
              <div className="flex items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/LOGOS/Samsung_wordmark.svg" alt="Samsung Logo" className="h-4 w-auto object-contain" />
              </div>

              {/* Redington */}
              <div className="flex items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/LOGOS/redington.svg" alt="Redington Logo" className="h-4 w-auto object-contain" />
              </div>

              {/* WeP */}
              <div className="flex items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/LOGOS/wep.svg" alt="WeP Logo" className="h-5 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

