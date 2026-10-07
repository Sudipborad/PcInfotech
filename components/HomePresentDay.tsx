"use client";
import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Factory, 
  Landmark, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers
} from "lucide-react";

const corporateClientVignettes = [
  {
    name: "Reliance Industries Ltd",
    sector: "Petrochemical & Industrial",
    scope: "Hazira Mega-Refinery: Industrial multi-function printing fleets, engineering plotters, and rapid parts maintenance.",
    icon: <Factory className="w-5 h-5 text-blue-700" />
  },
  {
    name: "Torrent Power Ltd",
    sector: "Power Utilities & Billing",
    scope: "Bhiwandi & Surat Corridors: High-volume consumer billing transactional printer fleet uptime under strict SLAs.",
    icon: <Zap className="w-5 h-5 text-amber-600" />
  },
  {
    name: "Thermax India Ltd",
    sector: "Energy & Industrial Engineering",
    scope: "Pune Plants & Offices: Technical CAD design plotters, corporate document fleets, and annual maintenance contracts.",
    icon: <Building2 className="w-5 h-5 text-emerald-700" />
  },
  {
    name: "Axis Bank",
    sector: "National Banking Network",
    scope: "Branch Operations: Regional passbook printers, thermal transaction receipt printers, and deskjet hardware uptime.",
    icon: <Landmark className="w-5 h-5 text-rose-700" />
  },
  {
    name: "Kotak Mahindra Bank",
    sector: "Commercial & Retail Banking",
    scope: "Branch Transactional Hubs: Passbook printing peripherals, high-speed line matrix printers, and emergency engineer dispatch.",
    icon: <Landmark className="w-5 h-5 text-red-700" />
  },
  {
    name: "Cholamandalam Finance",
    sector: "NBFC & Financial Documentation",
    scope: "Branch Loan Processing: Commercial documentation printers, dot-matrix hardware maintenance, and OEM spares.",
    icon: <ShieldCheck className="w-5 h-5 text-indigo-700" />
  }
];

export const HomePresentDay: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
            Where We Are Today
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            A Leading Engineering Network Across Western India
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            From humble beginnings in 1995, PC Infotech has matured into an essential infrastructure partner serving multinational OEMs, critical industries, and 1,000+ IT dealers every single day.
          </p>
        </div>

        {/* 3 Core Physical Infrastructure Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Physical Network
                </span>
                <Building2 className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-1">
                13 Direct Walk-In Hubs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating direct certified centers across Gujarat (9), Maharashtra (3), and Madhya Pradesh (1) with customer service counters.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Direct OEM Authorized</span>
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                  Lab Infrastructure
                </span>
                <Layers className="w-5 h-5 text-indigo-700" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-1">
                10,000+ Sq.Ft ESD Labs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated component rework facilities equipped with digital oscilloscopes, BGA rework stations, and ultrasonic cleaning baths.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Proprietary Logic Repair</span>
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Distribution Reach
                </span>
                <Clock className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-1">
                1,000+ Dealers in 8 States
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authorized stockist for genuine EPSON printheads, TVS-E assemblies, and HP laser parts dispatched daily to registered dealer accounts.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Daily Courier Dispatch</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Corporate Trust Matrix with Real Case Context */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                Enterprise Uptime Track Record
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Trusted by Critical Infrastructure &amp; Banking Leaders
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              SLA-backed emergency technician dispatch
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {corporateClientVignettes.map((client) => (
              <div
                key={client.name}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs shrink-0">
                      {client.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{client.name}</h4>
                      <span className="text-[10px] font-semibold text-blue-700 block">
                        {client.sector}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {client.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              Looking for commercial printer fleet AMCs, guaranteed response SLAs, or authorized warranty support?
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors shrink-0"
            >
              <span>Explore Corporate AMC Scopes &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
