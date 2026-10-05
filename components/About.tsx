"use client";
import React from "react";
import { companyData } from "@/data/company";
import { 
  Building, 
  GraduationCap, 
  Lightbulb, 
  CheckCircle, 
  Layers, 
  Compass,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Organization Overview & Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Company Origin, Philosophy & Group Structure
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            From a single Baroda workshop in 1995 to a multi-state network of 13 certified service centers and over 100 hardware specialists.
          </p>
        </div>

        {/* 2-Column Story & Leadership Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">The PC Infotech Origin Story</h3>
                  <p className="text-xs text-slate-500 font-medium">Established 1995 in Baroda, Gujarat Region</p>
                </div>
              </div>

              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  Founded in 1995 by <strong className="text-slate-900">Mr. Chetan Kumbhani</strong>, a technocrat holding a B.E. in Electronics & Telecommunications from Pune University (1994). The organization was born with a clear vision: to simplify people’s lives by delivering optimum engineering solutions when facing issues with computers and peripherals, enabling them to enjoy great discoveries and emerging technologies.
                </p>
                <p>
                  Over three decades, PC Infotech has expanded from a 4-member repair shop into an interstate technology provider with direct operations in Gujarat, Maharashtra, and Madhya Pradesh, backed by authorized service partnerships with global OEM leaders like <strong className="text-slate-900">HP, Canon, TVSE, and EPSON</strong>.
                </p>
              </div>

              {/* Founding Principle & Guiding Vision Banner */}
              <div className="mt-6 p-4 rounded-lg bg-blue-50/70 border border-blue-100 space-y-2">
                <div className="flex items-start gap-2.5">
                  <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
                      Founding Principle & Guiding Vision
                    </span>
                    <blockquote className="mt-1 text-sm font-medium italic text-slate-800">
                      &ldquo;{companyData.corePhilosophy}&rdquo;
                    </blockquote>
                    <p className="text-xs text-slate-600 mt-1">
                      {companyData.vision}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Companies Structure */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {companyData.groupCompanies.map((company, index) => (
                <div
                  key={company}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <Layers className="w-4 h-4 text-blue-700" />
                    <span className="text-[11px] font-semibold text-slate-500">Group Entity #{index + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{company}</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-normal">
                    {company === "PC Infotech Solutions" && "HQ Pune, Baroda founding office, HP ASC Ahmedabad, Surat, Junagadh, Godhra"}
                    {company === "Vivek Infotech" && "ASC Canon Nashik & Nanded commercial regional branches"}
                    {company === "Swami Vivekanand Infocare" && "ASC Canon Indore center covering Madhya Pradesh"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Profile & Technical Competency (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold text-lg">
                  CK
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{companyData.founder.name}</h3>
                  <p className="text-xs text-blue-700 font-semibold">Founder & Managing Technocrat</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-700 py-1.5 px-3 rounded-md bg-slate-100 border border-slate-200">
                <GraduationCap className="w-4 h-4 text-blue-700" />
                <span>{companyData.founder.qualification}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {companyData.founder.background}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed">
                {companyData.founder.experience}
              </p>

              <div className="pt-3 border-t border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Core Technical Leadership Directives
                </span>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Proprietary component-level logic card micro-soldering labs</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Sound direct liaison with OEM parents: EPSON, TVSE, HP, Canon</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Continuous hands-on cross-training for 100+ hardware engineers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pune Corporate Headquarters Card */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs space-y-2">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Pune Corporate Headquarters
              </span>
              <p className="text-slate-700 font-medium">
                {companyData.headquarters.address}, {companyData.headquarters.city} - {companyData.headquarters.pincode}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-600 pt-1">
                <span>Landline: <strong>{companyData.headquarters.phone}</strong></span>
                <span>Mobile: <strong>{companyData.headquarters.mobile[0]}</strong></span>
                <span>Email: <strong>{companyData.headquarters.email[0]}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
