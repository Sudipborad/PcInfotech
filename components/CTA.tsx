"use client";
import React from "react";
import { MapPin, Phone, Mail, Wrench } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-12 bg-white border border-slate-200 shadow-sm text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Ready for Corporate & Retail Support</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight max-w-2xl">
            Need Authorized Printer Repair or Genuine Spares?
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Connect directly with our central Pune coordination desk or visit any of our 13 certified service centers across Gujarat, Maharashtra, and Madhya Pradesh.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#locations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-blue-700 hover:bg-blue-800 shadow-xs transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Locate Nearest Center (13 Hubs)</span>
            </a>

            <a
              href="tel:02024495041"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Call Pune HQ: 020 24495041</span>
            </a>

            <a
              href="mailto:svipl.pune@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>svipl.pune@gmail.com</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span>• On-site Field Engineers</span>
            <span>• Component Chip-Level Labs</span>
            <span>• Quantity Bulk Spares Supply in 8 States</span>
          </div>
        </div>
      </div>
    </section>
  );
};
