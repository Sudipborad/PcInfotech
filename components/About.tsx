"use client";
import React from "react";
import { companyData } from "@/data/company";
import { 
  Building2, 
  GraduationCap, 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award,
  Layers,
  ArrowRight
} from "lucide-react";

interface MilestoneEra {
  year: string;
  era: string;
  headline: string;
  description: string;
  stats: string;
}

const journeyTimeline: MilestoneEra[] = [
  {
    year: "1995",
    era: "The Inception",
    headline: "Founded in Baroda by Technocrat Chetan Kumbhani",
    description: "Started with 4 hardware engineers solving complex computer & peripheral repair problems for early businesses in Gujarat.",
    stats: "4 Staff • 200 Calls"
  },
  {
    year: "2000s",
    era: "Lab & Regional Growth",
    headline: "Proprietary Chip-Level Logic Card Labs",
    description: "Built advanced micro-soldering labs for formatter boards and expanded direct hubs to Ahmedabad, Surat, and Rajkot.",
    stats: "5 Centers • 20+ Engineers"
  },
  {
    year: "2015 & 2018",
    era: "National Excellence",
    headline: "Conferred Canon Best Partner National Award Twice",
    description: "Honored at Canon India Annual Convention for top SLA compliance and appointed HP Authorized Service Provider for Gujarat.",
    stats: "2x OEM Winner • 8 Hubs"
  },
  {
    year: "Present",
    era: "Interstate Network",
    headline: "13 Certified Hubs & 8-State Spares Network",
    description: "Managing over 100+ hardware specialists, 3 group entities, and bulk quantity spares delivery to 1,000+ IT dealers.",
    stats: "13 Hubs • 100+ Specialists"
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Company Journey &amp; Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            Who We Are: Three Decades of Engineering Discipline
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded in 1995 by an electronics engineer, evolving from a local technical workbench to a multi-state authorized service powerhouse.
          </p>
        </div>

        {/* Founding Philosophy Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
              Core Technical Philosophy
            </span>
            <blockquote className="text-lg sm:text-xl font-bold text-slate-900 italic">
              &ldquo;{companyData.corePhilosophy}&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founded by <strong className="text-slate-900 font-semibold">{companyData.founder.name}</strong>, B.E. (Electronics &amp; Telecommunications), Pune University (1994), whose hands-on leadership drives technical rigor across all 13 centers.
            </p>
          </div>

          <div className="flex-shrink-0 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1.5 self-start md:self-auto">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <GraduationCap className="w-4 h-4 text-blue-700" />
              <span>Chetan Kumbhani</span>
            </div>
            <p className="text-slate-500 text-[11px]">B.E. Electronics • 30+ Yrs Field Leadership</p>
            <div className="text-blue-700 font-semibold text-[11px] pt-1 border-t border-slate-200">
              Proprietor &amp; Chief Technocrat
            </div>
          </div>
        </div>

        {/* Visual Timeline: 4 Distinct Eras (Visual Storytelling) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Chronological Milestones (1995 &rarr; Today)
            </span>
            <span className="text-xs font-semibold text-blue-700">
              Verified PDF Records
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {journeyTimeline.map((item, index) => (
              <div
                key={item.year}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-blue-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-blue-700 font-mono">
                      {item.year}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {item.era}
                  </span>

                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                    {item.headline}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-auto">
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md block text-center">
                    {item.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Group Entities & Headquarters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Group Entities (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-slate-900 font-bold mb-4">
                <Layers className="w-4 h-4 text-blue-700" />
                <span className="text-sm uppercase tracking-wider">Group Company Entities</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-xs font-black text-slate-900 block mb-1">
                    PC Infotech Solutions
                  </span>
                  <span className="text-[11px] text-blue-700 font-semibold block mb-2">
                    HQ Pune &amp; Gujarat Network
                  </span>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Manages central coordination, HP Gujarat state ASC hubs, Baroda, Ahmedabad &amp; Surat centers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-xs font-black text-slate-900 block mb-1">
                    Vivek Infotech
                  </span>
                  <span className="text-[11px] text-blue-700 font-semibold block mb-2">
                    Maharashtra ASC Hubs
                  </span>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Operates Canon Authorized Service Centers in Nashik &amp; Nanded commercial districts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-xs font-black text-slate-900 block mb-1">
                    Swami Vivekanand Infocare
                  </span>
                  <span className="text-[11px] text-blue-700 font-semibold block mb-2">
                    Madhya Pradesh ASC Hub
                  </span>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Direct Canon Authorized Service Center in Indore covering MP commercial corridors.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>All 3 entities operate under unified technical leadership</span>
              <span className="font-semibold text-slate-700">100+ Total Workforce</span>
            </div>
          </div>

          {/* Pune Corporate Headquarters Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <Building2 className="w-4 h-4 text-blue-700" />
                  <span className="text-sm uppercase tracking-wider">Corporate Headquarters</span>
                </div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Pune, Maharashtra
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5 text-xs">
                <div className="flex items-start gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                  <span>
                    {companyData.headquarters.address}, {companyData.headquarters.city} - {companyData.headquarters.pincode}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 pt-1">
                  <Phone className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
                  <span>Landline: <strong>{companyData.headquarters.phone}</strong> • Mobile: <strong>{companyData.headquarters.mobile[0]}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
                  <span>Email: <strong>{companyData.headquarters.email[0]}</strong></span>
                </div>
              </div>
            </div>

            <a
              href="#locations"
              className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-xs font-bold text-slate-800 transition-colors mt-4 group"
            >
              <span>Explore All 13 Regional Center Addresses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
