"use client";
import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  Headset, 
  Factory, 
  Landmark, 
  Zap, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { companyData } from "@/data/company";

const corporateClientBadges = [
  {
    name: "Reliance Industries Ltd",
    badge: "Hazira Mega-Refinery Operations",
    icon: <Factory className="w-4 h-4 text-blue-700" />
  },
  {
    name: "Torrent Power Ltd",
    badge: "Power Utility Billing Printers",
    icon: <Zap className="w-4 h-4 text-amber-600" />
  },
  {
    name: "Thermax India Ltd",
    badge: "Industrial Plotters & Fleet Maintenance",
    icon: <Building2 className="w-4 h-4 text-emerald-700" />
  },
  {
    name: "Axis Bank",
    badge: "Branch Banking Passbook Printers",
    icon: <Landmark className="w-4 h-4 text-rose-700" />
  },
  {
    name: "Kotak Mahindra Bank",
    badge: "Branch Transactional Printers & Line Matrix",
    icon: <Landmark className="w-4 h-4 text-red-700" />
  },
  {
    name: "Cholamandalam Finance",
    badge: "Commercial Dot-Matrix Hardware",
    icon: <ShieldCheck className="w-4 h-4 text-indigo-700" />
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
            From humble beginnings in 1995, PC Infotech has grown into a high-trust infrastructure partner serving global OEMs, critical industries, and thousands of IT dealers.
          </p>
        </div>

        {/* Large Metrics Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="text-3xl sm:text-4xl font-black text-blue-700 block font-mono">30+</span>
            <span className="text-xs font-bold text-slate-900 mt-2 block">Years of Heritage</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">Founded 1995</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 block font-mono">13</span>
            <span className="text-xs font-bold text-slate-900 mt-2 block">Direct Centers</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">GJ, MH &amp; MP</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="text-3xl sm:text-4xl font-black text-indigo-700 block font-mono">100+</span>
            <span className="text-xs font-bold text-slate-900 mt-2 block">Technical Staff</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">Certified Engineers</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 block font-mono">2,500+</span>
            <span className="text-xs font-bold text-slate-900 mt-2 block">Annual Calls</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">SLA-bound repairs</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="text-3xl sm:text-4xl font-black text-emerald-700 block font-mono">10K+</span>
            <span className="text-xs font-bold text-slate-900 mt-2 block">Sq.Ft Labs</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">ESD-safe facilities</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="text-3xl sm:text-4xl font-black text-amber-700 block font-mono">1,000+</span>
            <span className="text-xs font-bold text-slate-900 mt-2 block">IT Dealers</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">8 Indian States</span>
          </div>
        </div>

        {/* Corporate Trust Matrix */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                Enterprise Credibility
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Trusted by Critical Infrastructure &amp; Banking Institutions
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Mission-critical uptime support
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {corporateClientBadges.map((client) => (
              <div
                key={client.name}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-white border border-slate-200/80 shrink-0">
                  {client.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{client.name}</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">{client.badge}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              Need corporate AMC, SLA-backed fleet maintenance, or authorized warranty servicing?
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors"
            >
              <span>Explore Corporate Service SLA Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
