"use client";
import React from "react";
import { companyData } from "@/data/company";
import { 
  Award, 
  MapPin, 
  TrendingUp, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck,
  Building,
  Users
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 text-slate-900 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Certification Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-6">
          <Award className="w-4 h-4 text-blue-700" />
          <span className="text-xs font-semibold text-blue-900">
            Founded 1995 • Canon Best Partner (2015 & 2018) • HP Authorized Service Provider
          </span>
        </div>

        {/* Clean Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-4xl text-slate-900 leading-tight">
          Authorized Service Provider for{" "}
          <span className="text-blue-700">HP, Canon & Multi-Brand</span>{" "}
          Printing Hardware
        </h1>

        {/* Professional Supporting Text */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Founded in 1995 by technocrat <strong className="text-slate-900 font-semibold">Mr. Chetan Kumbhani</strong>. Operating across <strong className="text-blue-700 font-semibold">13 service centers</strong> in Gujarat, Maharashtra, and Madhya Pradesh with over <strong className="text-slate-900 font-semibold">100+ hardware engineers</strong>, component chip-level repair labs, and genuine spares supply to 1,000+ dealers nationwide.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#locations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-blue-700 hover:bg-blue-800 shadow-sm transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span>Find Service Center (13 Hubs)</span>
          </a>

          <a
            href="#growth"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs"
          >
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span>View Growth & Milestones</span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs"
          >
            <Cpu className="w-4 h-4 text-amber-600" />
            <span>Chip-Level & OEM Services</span>
          </a>
        </div>

        {/* Factual Stats Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center">
            <span className="text-3xl font-extrabold text-blue-700">100+</span>
            <span className="text-xs text-slate-600 font-medium mt-1 text-center">Hardware & Support Engineers</span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center">
            <span className="text-3xl font-extrabold text-slate-900">1,000+</span>
            <span className="text-xs text-slate-600 font-medium mt-1 text-center">Dealers Supplied in India</span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center">
            <span className="text-3xl font-extrabold text-blue-700">13</span>
            <span className="text-xs text-slate-600 font-medium mt-1 text-center">Direct Service Centers</span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center">
            <span className="text-3xl font-extrabold text-emerald-700">8 States</span>
            <span className="text-xs text-slate-600 font-medium mt-1 text-center">Spares Distribution Reach</span>
          </div>
        </div>

        {/* Multi-Vendor Technical Partnerships Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 w-full max-w-5xl">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            Authorized Service Partnerships & Multi-Brand Capabilities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-700">
            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-xs">
              <strong className="text-blue-700">HP</strong> Authorized Partner (Laptops & Printers)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-xs">
              <strong className="text-red-600">Canon</strong> ASC (Best Partner 2015 & 2018)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-xs">
              <strong className="text-blue-900">EPSON</strong> Spare Stockist (Surat & Nashik)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-xs">
              <strong className="text-slate-900">TVSE</strong> ASC & Spares Distributor
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-xs">
              <strong className="text-slate-900">Redington</strong> Authorized Partner
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-xs">
              <strong className="text-slate-900">WeP</strong> Support Center
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-xs">
              <strong className="text-blue-700">Samsung</strong> Laser Printers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
