"use client";
import React from "react";
import { companyData } from "@/data/company";
import { Building2, ShieldCheck, CheckCircle2, Factory, Landmark, Zap } from "lucide-react";

const clientMeta: Record<string, { icon: React.ReactNode; scope: string }> = {
  "Reliance Industries Ltd": {
    icon: <Factory className="w-5 h-5 text-blue-700" />,
    scope: "Hazira mega-refinery complex and industrial printing peripherals fleet maintenance."
  },
  "Torrent Power Ltd": {
    icon: <Zap className="w-5 h-5 text-amber-600" />,
    scope: "Utility billing & high-volume transactional printer uptime across Bhiwandi and Surat power distribution hubs."
  },
  "Thermax India Ltd": {
    icon: <Building2 className="w-5 h-5 text-emerald-700" />,
    scope: "Pune engineering plants, design plotters, and enterprise multi-function office printer fleet."
  },
  "Axis Bank": {
    icon: <Landmark className="w-5 h-5 text-rose-700" />,
    scope: "Regional bank branch networks: Passbook printers (Modi Olivetti), thermal receipt printers, and deskjets."
  },
  "Kotak Mahindra Bank": {
    icon: <Landmark className="w-5 h-5 text-red-700" />,
    scope: "Mission-critical branch transactional printing, line matrix support, and emergency on-site engineer dispatch."
  },
  "Cholamandalam Investment and Finance": {
    icon: <ShieldCheck className="w-5 h-5 text-indigo-700" />,
    scope: "Branch operations customer documentation printing and SLA-bound hardware maintenance."
  }
};

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proven Enterprise Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Corporate Handling Experience
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Trusted by industrial conglomerates, major power utilities, and leading banking institutions for critical hardware SLA management.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.corporateClients.map((client) => {
            const meta = clientMeta[client.name] || {
              icon: <Building2 className="w-5 h-5 text-blue-700" />,
              scope: "Corporate SLA and dedicated peripherals support."
            };

            return (
              <div
                key={client.name}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                      {meta.icon}
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      {client.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {client.name}
                  </h3>
                  <div className="text-xs text-blue-700 font-semibold mb-3">
                    {client.location}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {meta.scope}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Documented Enterprise Contract</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
