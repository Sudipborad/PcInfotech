"use client";
import React from "react";
import { companyData } from "@/data/company";
import { CardSpotlight } from "./ui/CardSpotlight";
import { 
  Building, 
  UserCheck, 
  GraduationCap, 
  Lightbulb, 
  CheckCircle, 
  Layers, 
  Award,
  Compass,
  Cpu,
  ShieldCheck
} from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white relative">
      {/* Background subtle radial spotlight */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Organization Overview & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Origin, Philosophy & Group Structure
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            From a single Baroda workshop in 1995 to a multi-state network of 13 certified service centers and over 100 hardware specialists.
          </p>
        </div>

        {/* 2-Column Story & Leadership Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <CardSpotlight className="bg-slate-900/50 border-slate-800">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800 text-cyan-400">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">The PC Infotech Origin Story</h3>
                    <p className="text-xs text-slate-400">Established 1995 in Baroda, Gujarat Region</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Founded in 1995 by <strong>Mr. Chetan Kumbhani</strong>, a technocrat holding a B.E. in Electronics & Telecommunications from Pune University (1994). The organization was born with a singular focus: to simplify people’s lives by delivering optimum engineering solutions when facing issues with computers and peripherals, enabling them to enjoy great discoveries and emerging technologies.
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Over three decades, PC Infotech has expanded from a local 4-member repair shop into an interstate technology provider with direct operations in Gujarat, Maharashtra, and Madhya Pradesh, backed by authorized service partnerships with global OEM leaders like <strong>HP, Canon, TVSE, and Epson</strong>.
                </p>

                {/* Organization Vision & Philosophy Banner */}
                <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                        Founding Principle & Guiding Vision
                      </span>
                      <blockquote className="mt-1 text-sm italic text-slate-200">
                        &ldquo;{companyData.corePhilosophy}&rdquo;
                      </blockquote>
                      <p className="text-xs text-slate-400 mt-2">
                        {companyData.vision}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardSpotlight>

            {/* Group Companies Structure */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {companyData.groupCompanies.map((company, index) => (
                <div
                  key={company}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="text-[11px] font-semibold text-slate-400">Group Entity #{index + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{company}</h4>
                  <p className="text-[11px] text-slate-400 mt-2">
                    {company === "PC Infotech Solutions" && "HQ Pune, Baroda founding, HP ASC Ahmedabad, Surat, Junagadh, Godhra"}
                    {company === "Vivek Infotech" && "ASC Canon Nashik & Nanded commercial regional branches"}
                    {company === "Swami Vivekanand Infocare" && "ASC Canon Indore center covering Madhya Pradesh"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Profile & Technical Competency (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <CardSpotlight className="bg-slate-900/70 border-slate-800 relative overflow-hidden" glowColor="rgba(99, 102, 241, 0.15)">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20">
                    CK
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{companyData.founder.name}</h3>
                    <p className="text-xs text-cyan-400 font-medium">Founder & Managing Technocrat</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300 py-1.5 px-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>{companyData.founder.qualification}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {companyData.founder.background}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {companyData.founder.experience}
                </p>

                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Core Technical Leadership Directives
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Proprietary component-level logic card micro-soldering labs</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Sound direct liaison with OEM parents: EPSON, TVSE, HP, Canon</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Continuous hands-on cross-training for 100+ hardware engineers</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardSpotlight>

            {/* Head Office Information Card */}
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 text-xs space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Pune Corporate Headquarters
              </span>
              <p className="text-slate-200 font-medium">
                {companyData.headquarters.address}, {companyData.headquarters.city} - {companyData.headquarters.pincode}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400 pt-1">
                <span>Landline: {companyData.headquarters.phone}</span>
                <span>Mobile: {companyData.headquarters.mobile[0]}</span>
                <span>Email: {companyData.headquarters.email[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
