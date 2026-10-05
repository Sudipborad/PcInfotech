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
    <section id="services" className="py-14 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Services & Repair Solutions
          </h2>

          {/* Category Filter Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? "bg-blue-700 text-white shadow-2xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Compact, scannable cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50/70 border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-blue-300 hover:shadow-2xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    {iconMap[service.icon]}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>

                {/* Concise Bullet Points */}
                <ul className="space-y-1.5 mb-4">
                  {service.detailedPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supported Brands */}
              <div className="pt-2.5 border-t border-slate-200 mt-auto">
                <div className="flex flex-wrap gap-1">
                  {service.supportedBrands.map((brand) => (
                    <span
                      key={brand}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-white text-slate-700 border border-slate-200"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single line third-party printer capability note */}
        <p className="mt-6 text-center text-xs text-slate-500">
          Support and genuine spares available for all printer makes in India (HP, Canon, EPSON, TVSE, Samsung, Brother, WeP, Xerox).
        </p>
      </div>
    </section>
  );
};
