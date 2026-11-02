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
import { HeroTechBackground } from "./three/HeroTechBackground";

export const Hero: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-slate-50/70 via-white to-white border-b border-slate-200/80 overflow-hidden"
    >
      {/* Three.js Interactive 3D Tech Background Canvas */}
      <HeroTechBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Split Editorial Layout */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Accreditation Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold tracking-wide">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            <span>Two Trusted Brands. One Reliable Support. • HP &amp; Canon Authorised</span>
          </div>

          {/* Clear, Bold Headline (Answers 'What does company do?') */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
            Authorised IT Hardware, Printer Sales &amp; Spares Across 4 States.
          </h1>

          {/* Concise Supporting Statement */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Direct authorised service partner for <strong className="text-slate-900 font-semibold">HP &amp; Canon</strong> serving <strong className="text-blue-700 font-semibold">Gujarat, Rajasthan, Maharashtra &amp; Madhya Pradesh</strong> with 13 direct service hubs, chip-level labs, and our official Vivek Infotech online parts store.
          </p>

          {/* Visual Credibility Pillars (Short + Scannable) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-3xl mx-auto">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="text-2xl font-black text-slate-900 block">30+</span>
              <span className="text-xs text-slate-600 font-semibold">Years in Business</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="text-2xl font-black text-blue-700 block">4 States</span>
              <span className="text-xs text-slate-600 font-semibold">GJ, RJ, MH &amp; MP</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="text-2xl font-black text-slate-900 block">13</span>
              <span className="text-xs text-slate-600 font-semibold">Direct Service Hubs</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="text-2xl font-black text-slate-900 block">100+</span>
              <span className="text-xs text-slate-600 font-semibold">Hardware Engineers</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/locations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-blue-700 hover:bg-blue-800 shadow-sm transition-all hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <MapPin className="w-4 h-4" />
              <span>Locate 13 Service Hubs</span>
            </Link>

            <a
              href="https://vivekinfotech.catalog.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-2xs transition-all focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Visit Vivek Infotech Online Spare Parts Store (opens in new window)"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-700" />
              <span>Online Parts Store</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-2xs transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Cpu className="w-4 h-4 text-blue-700" />
              <span>Capabilities</span>
            </Link>
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

