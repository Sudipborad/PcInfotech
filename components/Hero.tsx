"use client";
import React from "react";
import { 
  Award, 
  MapPin, 
  Wrench, 
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
      className="relative pt-24 pb-12 lg:pt-28 lg:pb-14 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Split Grid: Left Content + Right Visual Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Clean, Compact Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-blue-700" />
              <span>Est. 1995 • Canon Best Partner (2015 & 2018) • HP Authorized Partner</span>
            </div>

            {/* Clean, Balanced Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
              Authorized IT Hardware, Printer & Peripherals Solutions
            </h1>

            {/* Concise Subtitle (Short & Easy to Scan) */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Operating <strong className="text-slate-900 font-semibold">13 service centers</strong> in Gujarat, Maharashtra, and Madhya Pradesh with <strong className="text-blue-700 font-semibold">100+ hardware engineers</strong>, advanced chip-level labs, and genuine spares supply to 1,000+ dealers nationwide.
            </p>

            {/* Visual Feature Tags Grid (Replaces long paragraphs) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>13 Direct Service Hubs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Chip-Level Logic Card Labs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>100+ Hardware Engineers</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Spares Supply in 8 States</span>
              </div>
            </div>

            {/* Action Buttons & Phone */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#locations"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs text-white bg-blue-700 hover:bg-blue-800 shadow-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Find Service Center (13 Hubs)</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-colors"
              >
                <Cpu className="w-3.5 h-3.5 text-blue-600" />
                <span>Services & Spares</span>
              </a>

              <a
                href="tel:02024495041"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-700 px-3 py-2 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>HQ: 020 24495041</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Bento Metrics Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Network Highlights
                </span>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                  Active Operations
                </span>
              </div>

              {/* 4 Visual Metric Tiles */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-blue-700 mb-1">
                    <Building2 className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Centers</span>
                  </div>
                  <span className="text-2xl font-black text-slate-900 block">13</span>
                  <span className="text-[11px] text-slate-500">GJ, MH & MP</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-blue-700 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Engineers</span>
                  </div>
                  <span className="text-2xl font-black text-slate-900 block">100+</span>
                  <span className="text-[11px] text-slate-500">Hardware experts</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-blue-700 mb-1">
                    <Network className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Dealers</span>
                  </div>
                  <span className="text-2xl font-black text-slate-900 block">1,000+</span>
                  <span className="text-[11px] text-slate-500">Across 8 states</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-red-600 mb-1">
                    <Trophy className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Canon</span>
                  </div>
                  <span className="text-2xl font-black text-slate-900 block">2x</span>
                  <span className="text-[11px] text-slate-500">Best Partner Award</span>
                </div>
              </div>

              {/* Quick Link to Interactive Map */}
              <a
                href="#locations"
                className="flex items-center justify-between p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs font-semibold text-blue-800 hover:bg-blue-100 transition-colors group"
              >
                <span>View All 13 Locations on Map</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Partner Logos Strip */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Authorized Brands & Capabilities:
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
