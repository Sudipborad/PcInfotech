"use client";
import React from "react";
import { companyData } from "@/data/company";
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Factory, 
  Landmark, 
  Zap 
} from "lucide-react";

const clientMeta: Record<string, { icon: React.ReactNode; scope: string }> = {
  "Reliance Industries Ltd": {
    icon: <Factory className="w-5 h-5 text-blue-700" />,
    scope: "Hazira mega-refinery industrial printing peripherals and multi-function fleet support."
  },
  "Torrent Power Ltd": {
    icon: <Zap className="w-5 h-5 text-amber-600" />,
    scope: "Utility consumer billing and high-volume transactional printer uptime across Bhiwandi & Surat power distribution hubs."
  },
  "Thermax India Ltd": {
    icon: <Building2 className="w-5 h-5 text-emerald-700" />,
    scope: "Pune engineering plants, technical CAD design plotters, and office printer hardware contracts."
  },
  "Axis Bank": {
    icon: <Landmark className="w-5 h-5 text-rose-700" />,
    scope: "Regional branch banking passbook printers (Modi Olivetti), thermal transaction receipt printers, and deskjets."
  },
  "Kotak Mahindra Bank": {
    icon: <Landmark className="w-5 h-5 text-red-700" />,
    scope: "Mission-critical branch transactional printing, line matrix printer support, and emergency on-site engineer dispatch."
  },
  "Cholamandalam Investment and Finance": {
    icon: <ShieldCheck className="w-5 h-5 text-indigo-700" />,
    scope: "Commercial branch documentation printers, dot-matrix hardware maintenance, and SLA-bound parts provisioning."
  }
};

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 lg:py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proven Enterprise Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            Trusted by Critical Infrastructure &amp; Banking Leaders
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Trusted for decades by petrochemical giants, state power utilities, and premier banking institutions where printing downtime halts business operations.
          </p>
        </div>

        {/* Clients Grid (Spacious, High Credibility Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.corporateClients.map((client) => {
            const meta = clientMeta[client.name] || {
              icon: <Building2 className="w-5 h-5 text-blue-700" />,
              scope: "Dedicated SLA corporate hardware maintenance."
            };

            return (
              <div
                key={client.name}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      {meta.icon}
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700">
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

                <div className="mt-6 pt-3.5 border-t border-slate-200/70 flex items-center gap-2 text-[11px] font-medium text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Documented Hardware SLA Contract</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
