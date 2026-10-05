"use client";
import React from "react";
import { companyData } from "@/data/company";
import { CardSpotlight } from "./ui/CardSpotlight";
import { Building2, ShieldCheck, CheckCircle2, Factory, Landmark, Zap } from "lucide-react";

const clientMeta: Record<string, { icon: React.ReactNode; scope: string }> = {
  "Reliance Industries Ltd": {
    icon: <Factory className="w-6 h-6 text-sky-400" />,
    scope: "Hazira mega-refinery complex and industrial printing peripherals fleet maintenance."
  },
  "Torrent Power Ltd": {
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    scope: "Utility billing & high-volume transactional printer uptime across Bhiwandi and Surat power distribution hubs."
  },
  "Thermax India Ltd": {
    icon: <Building2 className="w-6 h-6 text-emerald-400" />,
    scope: "Pune engineering plants, design plotters, and enterprise multi-function office printer fleet."
  },
  "Axis Bank": {
    icon: <Landmark className="w-6 h-6 text-rose-400" />,
    scope: "Regional bank branch networks: Passbook printers (Modi Olivetti), thermal receipt printers, and deskjets."
  },
  "Kotak Mahindra Bank": {
    icon: <Landmark className="w-6 h-6 text-red-400" />,
    scope: "Mission-critical branch transactional printing, line matrix support, and emergency on-site engineer dispatch."
  },
  "Cholamandalam Investment and Finance": {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
    scope: "Branch operations customer documentation printing and SLA-bound hardware maintenance."
  }
};

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-cyan-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proven Enterprise Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Corporate Handling Experience
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Trusted by industrial conglomerates, major power utilities, and leading banking institutions for critical hardware SLA management.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.corporateClients.map((client) => {
            const meta = clientMeta[client.name] || {
              icon: <Building2 className="w-6 h-6 text-cyan-400" />,
              scope: "Corporate SLA and dedicated peripherals support."
            };

            return (
              <CardSpotlight
                key={client.name}
                className="p-6 bg-slate-900/60 border-slate-800/80 flex flex-col justify-between"
                glowColor="rgba(14, 165, 233, 0.12)"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      {meta.icon}
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      {client.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {client.name}
                  </h3>
                  <div className="text-xs text-cyan-400 font-medium mb-3">
                    {client.location}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {meta.scope}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Documented Enterprise Contract</span>
                </div>
              </CardSpotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
};
