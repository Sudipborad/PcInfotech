"use client";
import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/data/services";
import { CardSpotlight } from "./ui/CardSpotlight";
import { 
  Laptop, 
  Printer, 
  Cpu, 
  Wrench, 
  Boxes, 
  Truck, 
  Check, 
  ChevronRight,
  ShieldCheck,
  Layers
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-6 h-6 text-sky-400" />,
  Printer: <Printer className="w-6 h-6 text-red-400" />,
  Cpu: <Cpu className="w-6 h-6 text-indigo-400" />,
  Wrench: <Wrench className="w-6 h-6 text-amber-400" />,
  Boxes: <Boxes className="w-6 h-6 text-cyan-400" />,
  Truck: <Truck className="w-6 h-6 text-emerald-400" />,
};

const categories = [
  "All Services",
  "Authorized OEM Services",
  "Component & Chip-Level",
  "Spares & Distribution",
  "Field & Enterprise"
] as const;

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Services");

  const filteredServices = selectedCategory === "All Services"
    ? servicesData
    : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Technical Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Capabilities & Services
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            From factory-certified OEM warranty servicing to component micro-soldering and multi-state bulk spare supply.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                    : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <CardSpotlight
              key={service.id}
              className="flex flex-col justify-between h-full bg-slate-900/60 border-slate-800/80 hover:border-slate-700"
              glowColor="rgba(56, 189, 248, 0.12)"
            >
              <div>
                {/* Header inside Card */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-inner">
                    {iconMap[service.icon]}
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-semibold bg-slate-800 text-cyan-300 border border-slate-700">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Detailed Technical Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {service.detailedPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supported Brands / Scope Tag list */}
              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  Scope & Equipment Handled
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.supportedBrands.map((brand) => (
                    <span
                      key={brand}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>

        {/* Third-party printer coverage note from PDF */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-300">
            <strong className="text-cyan-400 font-semibold">Broad Market Capability:</strong> Third-party repair support, genuine spares, and print-head reconditioning available for all printer makes available in the Indian market (HP, Canon, Epson, Samsung, Xerox, Brother, TVSE, WeP, Modi Olivetti).
          </p>
        </div>
      </div>
    </section>
  );
};
