"use client";
import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/data/services";
import { 
  Laptop, 
  Printer, 
  Cpu, 
  Wrench, 
  Boxes, 
  Truck, 
  Check, 
  Layers
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-5 h-5 text-blue-700" />,
  Printer: <Printer className="w-5 h-5 text-red-600" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-700" />,
  Wrench: <Wrench className="w-5 h-5 text-amber-600" />,
  Boxes: <Boxes className="w-5 h-5 text-emerald-700" />,
  Truck: <Truck className="w-5 h-5 text-cyan-700" />,
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
    <section id="services" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Technical Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Engineering Capabilities & Services
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            From factory-certified OEM warranty servicing to component micro-soldering and multi-state bulk spare supply.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? "bg-blue-700 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
            <div
              key={service.id}
              className="bg-slate-50/70 border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    {iconMap[service.icon]}
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {service.detailedPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supported Brands */}
              <div className="pt-4 border-t border-slate-200 mt-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Scope & Equipment Handled
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.supportedBrands.map((brand) => (
                    <span
                      key={brand}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-slate-700 border border-slate-200"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Third-party Printer Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-600">
            <strong className="text-slate-900 font-semibold">Broad Market Capability:</strong> Third-party repair support, genuine spares, and print-head reconditioning available for all printer makes in the Indian market (HP, Canon, EPSON, Samsung, Xerox, Brother, TVSE, WeP, Modi Olivetti).
          </p>
        </div>
      </div>
    </section>
  );
};
