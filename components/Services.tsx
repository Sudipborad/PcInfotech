"use client";
import React, { useState } from "react";
import { 
  Laptop, 
  Printer, 
  Cpu, 
  Wrench, 
  Boxes, 
  Truck, 
  Check, 
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";

interface ServiceBlock {
  id: string;
  category: "Authorized OEM" | "Chip-Level Labs" | "Spares Supply" | "Enterprise SLAs";
  title: string;
  tagline: string;
  badge: string;
  icon: React.ReactNode;
  points: string[];
  brands: string[];
  isFeatured?: boolean;
}

const servicesList: ServiceBlock[] = [
  {
    id: "oem-asc",
    category: "Authorized OEM",
    title: "Authorized OEM Warranty & ASC Hubs",
    tagline: "Certified warranty & non-warranty repair center operating under direct OEM authorization.",
    badge: "Official OEM ASC",
    icon: <ShieldCheck className="w-6 h-6 text-blue-700" />,
    points: [
      "Authorized HP Service Provider across Gujarat State (Laptops, Laser & Deskjets)",
      "Canon Authorized Service Center (ASC) — Conferred 2x Best Partner National Award",
      "TVSE & EPSON authorized technical spares stockist and customer care hubs"
    ],
    brands: ["HP Authorized", "Canon ASC", "EPSON Stockist", "TVSE Partner"],
    isFeatured: true
  },
  {
    id: "chip-level",
    category: "Chip-Level Labs",
    title: "Component & Chip-Level Logic Labs",
    tagline: "Proprietary SMD micro-soldering labs repairing motherboards to save customer replacement costs.",
    badge: "Proprietary Lab",
    icon: <Cpu className="w-5 h-5 text-indigo-700" />,
    points: [
      "Micro-soldering, SMD component restoration & logic card rework",
      "Power supply unit (SMPS) & formatter board diagnostics",
      "Extensive inventory of specialized test jigs and repair stations"
    ],
    brands: ["Logic Cards", "SMPS Boards", "Formatters", "Micro-Controllers"]
  },
  {
    id: "spares",
    category: "Spares Supply",
    title: "Nationwide Genuine Spares Supply",
    tagline: "Bulk quantity distribution of genuine printer spares across 8 major Indian states.",
    badge: "1,000+ Dealers",
    icon: <Boxes className="w-5 h-5 text-emerald-700" />,
    points: [
      "Authorized stockist of authentic EPSON print heads & TVSE spares",
      "Quantity supply of gears, pickup rollers, carriage belts & ribbons",
      "Direct logistics network reaching 1,000+ IT dealers across 8 states"
    ],
    brands: ["EPSON Heads", "TVSE Spares", "Pickup Rollers", "Teflon Sleeves"]
  },
  {
    id: "enterprise-sla",
    category: "Enterprise SLAs",
    title: "Enterprise AMC & Passbook Printers",
    tagline: "Mission-critical hardware maintenance contracts with guaranteed on-site SLA response.",
    badge: "Banking & Industrial",
    icon: <Wrench className="w-5 h-5 text-amber-700" />,
    points: [
      "Passbook printers (Modi Olivetti), thermal POS & line matrix printers",
      "Large-format design plotters & multi-function corporate printer fleets",
      "Preventive maintenance schedules & emergency on-site engineer dispatch"
    ],
    brands: ["Reliance", "Torrent Power", "Thermax", "Axis Bank", "Kotak Bank"]
  }
];

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filtered = activeTab === "All" 
    ? servicesList 
    : servicesList.filter((s) => s.category === activeTab);

  const featured = filtered.find((s) => s.isFeatured) || servicesList[0];
  const others = filtered.filter((s) => s.id !== featured.id);

  return (
    <section id="services" className="py-20 lg:py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Technical Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              What We Do: Engineering &amp; Service Pillars
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              From authorized OEM warranty servicing to component-level motherboard rework and interstate bulk spares supply.
            </p>
          </div>

          {/* Scannable Category Filter */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
            {["All", "Authorized OEM", "Chip-Level Labs", "Spares Supply", "Enterprise SLAs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === tab
                    ? "bg-blue-700 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Composition: Featured Hero Card + 3 Distinct Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Large Capability Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20">
                  {featured.icon}
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-blue-500/30 text-blue-200 border border-blue-400/30">
                  {featured.badge}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-2">
                  {featured.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {featured.tagline}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {featured.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Supported Brand Badges */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Direct OEM Recognition:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {featured.brands.map((b) => (
                  <span
                    key={b}
                    className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/10 text-white border border-white/15"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Remaining 3 Focused Capability Blocks (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((srv) => (
              <div
                key={srv.id}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-blue-300 hover:bg-white hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      {srv.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200/70">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {srv.tagline}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {srv.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-200/70 mt-auto">
                  <div className="flex flex-wrap gap-1">
                    {srv.brands.map((b) => (
                      <span
                        key={b}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white text-slate-600 border border-slate-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Action Bridge Tile */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 block mb-1">
                  13 Certified Locations
                </span>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Have a faulty printer or require genuine parts?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Walk in to any of our 13 direct hubs or arrange an on-site corporate technician dispatch.
                </p>
              </div>

              <a
                href="#locations"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 mt-4 group"
              >
                <span>Find Your Nearest Hub</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
