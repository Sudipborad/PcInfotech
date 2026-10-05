"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { companyData } from "@/data/company";
import { 
  Award, 
  MapPin, 
  Wrench, 
  Cpu, 
  ShieldCheck, 
  ChevronRight, 
  Users, 
  Building2,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center items-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Gradients & Aceternity Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#38bdf8" />
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Established & Certification Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md mb-8 animate-fade-in">
          <Award className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-medium text-cyan-200">
            Founded 1995 • Canon Best Partner Awardee (2015 & 2018) • HP Authorized Partner
          </span>
        </div>

        {/* Factual, Purpose-Driven Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl text-slate-100 leading-[1.15]">
          Authorized Service Provider for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
            HP, Canon & Enterprise Printing
          </span>{" "}
          Hardware Solutions
        </h1>

        {/* Supporting Copy grounded strictly in PDF content */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">
          Founded in 1995 by technocrat <strong className="text-white font-semibold">Mr. Chetan Kumbhani</strong>. 
          Operating across <span className="text-cyan-300 font-semibold">13 service centers</span> in Gujarat, Maharashtra & Madhya Pradesh with over <span className="text-white font-semibold">100+ technical engineers</span>, component chip-level repair labs, and genuine spares distribution to 1,000+ dealers nationwide.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#locations"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            <MapPin className="w-4 h-4 text-slate-900" />
            <span>Find Service Center (13 Hubs)</span>
          </a>

          <a
            href="#growth"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
          >
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>Growth & Milestones</span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-transparent hover:bg-slate-900/50 border border-slate-800 transition-colors"
          >
            <Cpu className="w-4 h-4 text-indigo-400" />
            <span>Chip-Level & OEM Services</span>
          </a>
        </div>

        {/* Factual Core Strengths Pill Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full">
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400">100+</span>
            <span className="text-xs text-slate-400 mt-1 text-center font-medium">Hardware & Support Engineers</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky-400">1,000+</span>
            <span className="text-xs text-slate-400 mt-1 text-center font-medium">Dealer Network Across India</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400">13</span>
            <span className="text-xs text-slate-400 mt-1 text-center font-medium">Direct Service Centers</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">8 States</span>
            <span className="text-xs text-slate-400 mt-1 text-center font-medium">Spares Supply Footprint</span>
          </div>
        </div>

        {/* Official OEM & Hardware Brands Serviced Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 w-full max-w-5xl">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
            Authorized Service Partnerships & Multi-Vendor Technical Capabilities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-sky-400">
              <span className="text-base font-black">hp</span>
              <span className="text-xs font-normal text-slate-400">Authorized Partner</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-red-400">
              <span className="text-base font-black">Canon</span>
              <span className="text-xs font-normal text-slate-400">ASC (Best Partner '15 & '18)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-blue-400">
              <span className="text-base font-black">EPSON</span>
              <span className="text-xs font-normal text-slate-400">Authorized Spares Stockist</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-cyan-300">
              <span className="text-base font-black">TVSE</span>
              <span className="text-xs font-normal text-slate-400">ASC & Spares Distributor</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-indigo-300">
              <span className="text-base font-black">REDINGTON</span>
              <span className="text-xs font-normal text-slate-400">Service Partner</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-emerald-400">
              <span className="text-base font-black">WeP</span>
              <span className="text-xs font-normal text-slate-400">Peripherals Center</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-blue-300">
              <span className="text-base font-black">SAMSUNG</span>
              <span className="text-xs font-normal text-slate-400">Laser Printers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
