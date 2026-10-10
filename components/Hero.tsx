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
  ArrowRight,
  ShoppingBag,
  ExternalLink
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
              <span>Two Trusted Brands. One Reliable Support. • HP &amp; Canon Authorised</span>
            </div>

            {/* Clear, Bold Headline (Answers 'What does company do?') */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Authorised IT Hardware, Printer Sales &amp; Spares Across 4 States.
            </h1>

            {/* Concise Supporting Statement (1 sentence, no filler) */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Direct authorised service partner for <strong className="text-slate-900 font-semibold">HP &amp; Canon</strong> serving <strong className="text-blue-700 font-semibold">Gujarat, Rajasthan, Maharashtra &amp; Madhya Pradesh</strong> with 13 direct service hubs, chip-level labs, and our official Vivek Infotech online parts store.
            </p>

            {/* Visual Credibility Pillars (Short + Scannable) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-2xl font-black text-slate-900 block">30+</span>
                <span className="text-xs text-slate-500 font-medium">Years in Business</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-2xl font-black text-blue-700 block">4 States</span>
                <span className="text-xs text-slate-500 font-medium">GJ, RJ, MH &amp; MP</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-2xl font-black text-slate-900 block">13</span>
                <span className="text-xs text-slate-500 font-medium">Direct Service Hubs</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-2xl font-black text-slate-900 block">100+</span>
                <span className="text-xs text-slate-500 font-medium">Hardware Engineers</span>
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

              <a
                href="https://vivekinfotech.catalog.to/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-2xs transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-emerald-700" />
                <span>Online Parts Store</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-2xs transition-all"
              >
                <Cpu className="w-4 h-4 text-blue-700" />
                <span>Capabilities</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Resolution Hardware Lab Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group bg-slate-900">
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hardware-lab-workbench.jpg"
                alt="PC Infotech Component Diagnostic Workstation"
                className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-blue-700/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-xs">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>SMD Micro-Soldering &amp; Logic Labs</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Lab Operations
                </span>
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                    Proprietary Technical Infrastructure
                  </span>
                  <span className="text-[10px] text-slate-300 font-mono">10,000+ sq.ft ESD Labs</span>
                </div>
                <p className="text-xs text-slate-200 leading-snug">
                  Component-level diagnostics on oscilloscopes, BGA rework stations, and printer formatter reconditioning.
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <Link
                    href="/services"
                    className="font-bold text-blue-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View Engineering Scopes</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/locations"
                    className="font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <MapPin className="w-3 h-3 text-blue-400" />
                    <span>13 Physical Centers</span>
                  </Link>
                </div>
              </div>
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

