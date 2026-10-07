import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Locations } from "@/components/Locations";
import { MapPin, Network, Phone, Mail, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Service Center Locations | PC Infotech Solutions — 13 Direct Hubs Across GJ, MH & MP",
  description:
    "Interactive map and directory of all 13 certified service centers in Gujarat, Maharashtra, and MP. Get turn-by-turn directions, direct phone numbers, and walk-in support addresses.",
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 relative selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-4">
              <MapPin className="w-3.5 h-3.5 text-blue-700" />
              <span>Interactive Geographic Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              13 Certified Service Hubs Across Western India.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Direct walk-in centers and corporate dispatch bases in Gujarat, Maharashtra, and Madhya Pradesh. Click any center on the map or list below for instant turn-by-turn Google Maps navigation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Map & Directory Experience */}
      <Locations />

      {/* 8-State Logistics & Central Support Desk */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 8 States Logistics (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Interstate Distribution Reach
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Supplying 1,000+ Dealers in 8 Indian States
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                Beyond our 13 direct walk-in centers, PC Infotech operates bulk parts dispatch to registered computer peripheral dealers and regional service providers in:
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {companyData.sparesSupplyStates.map((st) => (
                  <span
                    key={st}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs"
                  >
                    • {st}
                  </span>
                ))}
              </div>

              <div className="pt-3 flex items-center gap-4 text-xs font-semibold text-slate-500">
                <span>Authorized EPSON Print Heads Stockist</span>
                <span>•</span>
                <span>TVSE Assemblies Distributor</span>
              </div>
            </div>

            {/* Central Desk Coordination (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">
                    Pune Central Coordination Desk
                  </h3>
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-800 px-2.5 py-0.5 rounded-full border border-blue-200">
                    All Regions
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  For inter-city commercial AMC contracts, multi-branch banking SLAs, or wholesale spares procurement across any state:
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-700" />
                    <span>HQ Landline: <strong>{companyData.headquarters.phone}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-700" />
                    <span>Direct Mobile: <strong>{companyData.headquarters.mobile.join(", ")}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-700" />
                    <span>Corporate Email: <strong>{companyData.headquarters.email[0]}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
