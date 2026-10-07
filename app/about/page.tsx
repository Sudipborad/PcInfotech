import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
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
  ArrowRight,
  CheckCircle2,
  Trophy
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | PC Infotech Solutions — Origin, Leadership & 30-Year Journey",
  description:
    "Founded in 1995 by technocrat Chetan Kumbhani. Operating 13 direct centers across Gujarat, Maharashtra, and MP with over 100+ hardware specialists and 3 group entities.",
};

const detailedJourney = [
  {
    year: "1995",
    title: "Founding in Baroda, Gujarat",
    badge: "Inception",
    description:
      "Founded by Chetan Kumbhani with 4 hardware engineers. Early focus on dot-matrix printer (DMP) repairs, power supply diagnostics, and peripheral servicing for regional commercial accounts.",
    impact: "Initial 4 staff • 200 annual service calls handled"
  },
  {
    year: "2002",
    title: "Direct Regional Hubs in Ahmedabad & Surat",
    badge: "Gujarat Expansion",
    description:
      "Established direct company branches along Gujarat's high-demand industrial corridor, introducing on-site maintenance contracts for manufacturing and power utility corporations.",
    impact: "Footprint grew to 3 key hubs • 20+ specialized technicians"
  },
  {
    year: "2008",
    title: "HP Authorized Service Provider Appointment",
    badge: "OEM Partnership",
    description:
      "Appointed Authorized Service Provider for HP laptops and commercial printers across Gujarat State, with regional ASC center at Ellisbridge, Ahmedabad.",
    impact: "Direct HP warranty support across all Gujarat commercial districts"
  },
  {
    year: "2015",
    title: "Canon Best Partner National Award (Goa)",
    badge: "National Honor",
    description:
      "Conferred top partner award by Canon India at annual convention for exceptional warranty SLA compliance, rapid turnaround time, and high customer satisfaction rating.",
    impact: "Recognized as #1 service benchmark across Western India"
  },
  {
    year: "2018",
    title: "Second Canon Best Partner National Award",
    badge: "2x Winner",
    description:
      "Honored for a second time at the Canon India national convention, cementing multi-year engineering consistency and technical competence across Gujarat & Maharashtra ASC hubs.",
    impact: "Sustained national excellence and multi-branch audit verification"
  },
  {
    year: "Present Day",
    title: "Interstate Network: 13 Hubs & 8-State Logistics",
    badge: "Current Scale",
    description:
      "Direct operations in 13 cities across Gujarat, Maharashtra, and Madhya Pradesh, backed by over 100 hardware engineers and bulk quantity spares supply to 1,000+ IT dealers.",
    impact: "13 direct walk-in hubs • 10,000+ sq.ft lab infrastructure"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 relative selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-4">
              <Compass className="w-3.5 h-3.5 text-blue-700" />
              <span>Company Background &amp; Leadership</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Three Decades of Precision Hardware Engineering.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Founded in 1995 by an electronics and telecommunications engineer, PC Infotech Solutions has grown from a single Baroda workbench into Western India&apos;s trusted multi-brand authorized service partner.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Core Philosophy Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Philosophy Banner (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/70">
                <span>The Guiding Principle</span>
              </div>
              <blockquote className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                &ldquo;{companyData.corePhilosophy}&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {companyData.vision}
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Leadership Standard
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Prioritizing rigorous technical training and diagnostic mastery before commercially deploying engineers in the field.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Component Level First
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Saving client capital expenditure by repairing micro-components and logic cards instead of immediately discarding entire assemblies.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 shadow-xs space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white font-black text-xl flex items-center justify-center shadow-sm">
                    CK
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{companyData.founder.name}</h2>
                    <p className="text-xs text-blue-700 font-bold">Proprietor &amp; Chief Technocrat</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium">
                  <GraduationCap className="w-4 h-4 text-blue-700 flex-shrink-0" />
                  <span>{companyData.founder.qualification}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {companyData.founder.background}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {companyData.founder.experience}
                </p>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Pune University (1994)</span>
                  <span className="font-semibold text-slate-700">30+ Yrs Field Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline of the Company Journey */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
              Chronological Evolution
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              The 30-Year Milestones: 1995 &rarr; Present
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Every phase of expansion has been rooted in technical discipline, OEM partner verification, and verifiable records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedJourney.map((step) => (
              <div
                key={step.year}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-blue-700 font-mono">
                      {step.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200/60">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-auto">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    {step.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Honors & Canon National Award Showcase */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Authentic Award Photograph (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/canon-award-trophy.jpg"
                  alt="Canon Best Partner National Award Trophy"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      National Convention Honor
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      2015 &amp; 2018
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Canon Best Partner National Award (Goa)
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Awarded for highest SLA compliance, warranty turnaround speed, and customer satisfaction across Western India.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Accreditations & SLA Audit (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
                  Verified OEM Accreditations
                </span>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
                  National Honors Backed by Sustained Technical Performance
                </h2>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our recognition is not ceremonial—it is audited every month by multinational printer manufacturers tracking first-time fix rates, turnaround timelines, and genuine parts authenticity.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Canon India: 2x Best Partner Winner
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Conferred national top honors twice at the Canon India National Partner Convention in Goa, certifying SLA excellence across our 9 Canon ASC branches.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-800 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      HP Authorized Service Provider (Gujarat State)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Official warranty provider for HP commercial laptops, LaserJet printers, and DesignJet plotters with regional hub at Devnandan Mall, Ellisbridge, Ahmedabad.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Authorized TVS-E Distributor &amp; EPSON Spares Stockist
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Bulk importer and authorized channel partner distributing authentic EPSON printheads, TVS-E dot matrix sub-assemblies, and consumables to 1,000+ dealers in 8 states.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Corporate Architecture & Headquarters */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
              Corporate Structure
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              Group Entities &amp; Central Coordination
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Three registered corporate entities executing unified technical service standards across Western India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Primary Enterprise
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  PC Infotech Solutions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Headquartered in Pune, Maharashtra. Manages central coordination, HP Gujarat state ASC hubs, Baroda founding office, Ahmedabad, and Surat centers.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-slate-700">
                HQ Pune • HP &amp; Canon ASC Gujarat
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Maharashtra Entity
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Vivek Infotech
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Operates Canon Authorized Service Centers in Maharashtra, including Nashik and Nanded commercial regional branches.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-slate-700">
                Nashik &amp; Nanded Canon ASC
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Madhya Pradesh Entity
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Swami Vivekanand Infocare
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Operates Canon Authorized Service Center in Indore, covering commercial and industrial printing clients throughout Madhya Pradesh.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs font-bold text-slate-700">
                Indore Canon ASC (MP Region)
              </div>
            </div>
          </div>

          {/* Pune Corporate Headquarters Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
                Central Headquarters
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Pune Operations &amp; Support Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {companyData.headquarters.address}, {companyData.headquarters.city} - {companyData.headquarters.pincode}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-2">
                <span>Phone: <strong>{companyData.headquarters.phone}</strong></span>
                <span>Mobile: <strong>{companyData.headquarters.mobile.join(", ")}</strong></span>
                <span>Email: <strong>{companyData.headquarters.email[0]}</strong></span>
              </div>
            </div>

            <Link
              href="/locations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-xs transition-colors self-start md:self-auto"
            >
              <MapPin className="w-4 h-4" />
              <span>Explore All 13 Hub Locations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
