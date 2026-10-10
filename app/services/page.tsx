import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { servicesData } from "@/data/services";
import { 
  ShieldCheck, 
  Cpu, 
  Boxes, 
  Wrench, 
  Check, 
  Layers, 
  MapPin, 
  ArrowRight,
  Zap,
  Printer,
  Laptop,
  Truck,
  RotateCw,
  ShoppingBag
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Capabilities | PC Infotech Solutions — Authorized OEM Repair & Spares",
  description:
    "Explore our full technical capabilities: HP Authorized Service Provider, Canon ASC, proprietary chip-level logic card repair labs, and genuine spares supply across 8 states.",
};

const repairProcess = [
  {
    step: "01",
    title: "Diagnostic Intake",
    description: "Detailed hardware intake at any of our 13 walk-in hubs or corporate on-site assessment with barcoded tracking."
  },
  {
    step: "02",
    title: "Component & Lab Diagnostics",
    description: "Oscilloscope and SMD testing to identify logic card, formatter, or print-head failure at micro-component level."
  },
  {
    step: "03",
    title: "OEM Spares Replacement",
    description: "Direct installation of factory-authorized original spares (EPSON print heads, TVSE assemblies, HP components)."
  },
  {
    step: "04",
    title: "Burn-in QA & Delivery",
    description: "Rigorous test-pattern printing, thermal calibration, and return to client with verified warranty coverage."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 relative selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-4">
              <Layers className="w-3.5 h-3.5 text-blue-700" />
              <span>Technical Capabilities &amp; OEM Authorizations</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Enterprise IT Hardware &amp; Printer Engineering.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From authorized OEM warranty hubs to proprietary component micro-soldering labs and interstate bulk spares supply.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars Detailed Breakdown */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
              Service Specializations
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Four Specialized Engineering Pillars
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Explore our core technical domains backed by 100+ certified engineers and specialized laboratory tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Pillar 1: OEM Authorized */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-700 text-white shadow-2xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
                    Official OEM ASC
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Authorized OEM Service Center (ASC) Operations
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Direct warranty and out-of-warranty support operating strictly according to factory OEM guidelines, genuine part inventories, and verified turnaround SLAs.
                </p>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>HP Authorized Service Provider:</strong> Gujarat state warranty for HP laptops, LaserJets, and Deskjets.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Canon ASC (2x Best Partner):</strong> Regional hubs across Surat, Junagadh, Godhra, Nashik, Nanded, and Indore.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>TVSE &amp; EPSON Spares Stockist:</strong> Official distributor of authorized spare components and print heads.</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">HP Laptops &amp; Printers</span>
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">Canon Inkjet &amp; Laser</span>
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">TVSE Dot Matrix</span>
              </div>
            </div>

            {/* Pillar 2: Chip Level Labs with Authentic Workbench Photo */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-xs overflow-hidden">
              <div>
                <div className="relative h-44 -mx-8 -mt-8 mb-6 overflow-hidden bg-slate-900 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hardware-lab-workbench.jpg"
                    alt="SMD Logic Card Micro-Soldering Lab Workbench"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-bold text-white bg-indigo-700/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-xs">
                    In-House Component Rework Lab
                  </span>
                  <span className="absolute top-3 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-indigo-300 backdrop-blur-sm border border-indigo-400/30">
                    Proprietary Jigs
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-700 text-white shadow-2xs">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800">
                    Proprietary Labs
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Component &amp; Chip-Level Micro-Soldering Labs
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Advanced in-house electronics labs equipped with rework stations and diagnostic jigs to restore damaged logic cards, motherboards, and power units.
                </p>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Formatter Board Restoration:</strong> Micro-soldering of surface-mount ICs, firmware reflashing, and capacitor rework.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Power Supply (SMPS) Rebuilds:</strong> High-voltage circuit diagnosis, transformer winding repairs, and fuse rail protection.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Significant Cost Savings:</strong> Saves commercial clients up to 70% compared to discarding entire OEM assemblies.</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">Logic Cards</span>
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">Formatter Boards</span>
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">SMPS Units</span>
              </div>
            </div>

            {/* Pillar 3: Spares Network */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-700 text-white shadow-2xs">
                    <Boxes className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                    8-State Logistics
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Bulk Genuine Spares Distribution Network
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Supplying genuine replacement parts to over 1,000 independent IT dealers across Gujarat, Maharashtra, MP, Karnataka, AP, WB, Delhi, and TN.
                </p>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Authorized EPSON Print Heads:</strong> Ready stock of brand-new genuine print heads for micro-piezo inkjet printers.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>TVSE Mechanical Assemblies:</strong> Gears, carriage motors, tractor assemblies, and dot matrix print heads.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Fast Courier Dispatches:</strong> Same-day dispatch of mission-critical pickup rollers, fuser sleeves, and belts.</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">EPSON Heads</span>
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">TVSE Assemblies</span>
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">1,000+ Dealers</span>
              </div>
            </div>

            {/* Pillar 4: Enterprise SLAs */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-amber-700 text-white shadow-2xs">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
                    Banking &amp; Enterprise
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Enterprise AMC &amp; Banking Peripherals Contracts
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Guaranteed uptime SLAs for industrial power utilities, refineries, design bureaus, and banking branch networks throughout Western India.
                </p>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Banking Passbook Printers:</strong> Specialized maintenance for Modi Olivetti, thermal POS receipt printers, and deskjets.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Industrial Utility Billing:</strong> High-volume continuous printer uptime for Torrent Power and Reliance Hazira.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Design Plotters &amp; CAD Output:</strong> Large-format color plotter maintenance for Thermax and engineering plants.</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">Reliance Hazira</span>
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">Torrent Power</span>
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white text-slate-800 border border-slate-200">Axis &amp; Kotak Bank</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Online Store & Parts Catalog Showcase */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Official Online Store • Vivek Infotech</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Printer Sales &amp; Bulk Spare Parts Catalog
              </h2>
              <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
                Browse our live digital catalog at <strong className="text-emerald-400">vivekinfotech.catalog.to</strong> for immediate pricing, ready inventory, and fast nationwide courier dispatch.
              </p>
            </div>

            <a
              href="https://vivekinfotech.catalog.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-all self-start md:self-auto group"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Launch Online Store (vivekinfotech.catalog.to)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Catalog Item 1 */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-2 font-mono">
                  50+ Items In Stock
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Printer Spare Parts
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Paper pickup roller assemblies, fuser sleeves, pressure rollers, gears, carriage motors, logic cards, and SMPS power units.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
                HP, Canon, EPSON &amp; TVS-E
              </div>
            </div>

            {/* Catalog Item 2 */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-2 font-mono">
                  Genuine &amp; OEM
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Ink &amp; Print Heads
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Ready stock of authentic print heads for EPSON EcoTank series, Canon Pixma &amp; MAXIFY, and HP Smart Tank systems.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
                Direct OEM Sourced &amp; Tested
              </div>
            </div>

            {/* Catalog Item 3 */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-2 font-mono">
                  Maintenance Kits
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Waste Ink Pads &amp; Absorbers
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Complete ink absorber box sets, maintenance cartridge sponges, and reset solutions to resolve printer error states.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
                Ready Dispatch Across India
              </div>
            </div>

            {/* Catalog Item 4 */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-2 font-mono">
                  All Leading Brands
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  New Printer Sales
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Competitive dealer and enterprise pricing on laser printers, tank inkjets, multi-function copiers, and dot-matrix printers.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
                Full Manufacturer Warranty
              </div>
            </div>
          </div>

          {/* Capabilities Banner */}
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-emerald-400" />
                Bulk Printer Spare Parts Selling
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-emerald-400" />
                Genuine &amp; Certified Compatible Parts
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-emerald-400" />
                Dedicated Support for Dealers &amp; Businesses
              </span>
            </div>
            <a
              href="https://vivekinfotech.catalog.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 shrink-0 flex items-center gap-1"
            >
              <span>Explore 70+ Products &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4-Step Technical Quality & Repair Workflow */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
              Engineering Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Structured 4-Step Quality Assurance Process
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Every printer and logic card undergoes methodical bench testing to ensure durability and prevent repeated breakdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Bench Diagnostics Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm group bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/printer-diagnostics-service.jpg"
                  alt="Technician performing bench diagnostic QA on printer hardware"
                  className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block">
                    Quality Bench Testing
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    Test-Pattern Calibration &amp; Thermal Burn-In
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    Zero-defect verification before release back to corporate client fleets.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 4-Step Progressive Lifecycle (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repairProcess.map((proc) => (
                <div
                  key={proc.step}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-blue-700 font-mono block mb-2">
                      {proc.step}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      {proc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-blue-50/80 border border-blue-100 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Have a Printer Issue or Require Genuine Parts?
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-xl leading-relaxed">
              Locate any of our 25 branches across Gujarat, Maharashtra, Rajasthan &amp; MP, order directly from our online parts store, or call our Pune central coordination desk.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Locate 25 Service Branches (Map)</span>
              </Link>
              <a
                href="https://vivekinfotech.catalog.to/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Parts Online</span>
              </a>
              <a
                href="tel:02024495041"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold transition-colors shadow-2xs"
              >
                <span>Call Pune HQ: 020 24495041</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
