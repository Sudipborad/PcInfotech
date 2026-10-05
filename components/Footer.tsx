"use client";
import React from "react";
import { companyData } from "@/data/company";
import { serviceCentersData } from "@/data/locations";
import { Shield, Phone, Mail, MapPin, Award, Layers } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 border-t border-slate-800/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Organization overview (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-cyan-500/20">
                PC
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight block">
                  {companyData.name}
                </span>
                <span className="text-[11px] text-cyan-400 font-medium">
                  Founded 1995 • Proprietor: Mr. Chetan Kumbhani
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Authorized Service Provider for HP laptops and printers (Gujarat State), Canon Authorized Service Center (Best Partner 2015 & 2018), and authorized TVSE & EPSON spares stockist. Operating 13 direct centers with over 100 hardware and support engineers.
            </p>

            <div className="pt-2 space-y-1">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                Group Companies:
              </span>
              <ul className="text-slate-400 space-y-0.5">
                {companyData.groupCompanies.map((c) => (
                  <li key={c} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="hover:text-cyan-400 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Origin & Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Services & Repair
                </a>
              </li>
              <li>
                <a href="#growth" className="hover:text-cyan-400 transition-colors">
                  Growth Timeline
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-cyan-400 transition-colors">
                  Achievements & Awards
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-cyan-400 transition-colors">
                  Service Center Map
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-cyan-400 transition-colors">
                  Corporate Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Primary Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Major Hubs
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#locations" className="hover:text-cyan-400 transition-colors">
                  Pune HQ (Somesh Appt)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-cyan-400 transition-colors">
                  Ahmedabad HP ASC (Ellisbridge)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-cyan-400 transition-colors">
                  Surat ASC Canon (Athwagate)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-cyan-400 transition-colors">
                  Baroda Founding Base (Jetalpur)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-cyan-400 transition-colors">
                  Nashik ASC Canon (Mumbai Naka)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-cyan-400 transition-colors">
                  Indore ASC Canon (MIG Colony)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-cyan-400 transition-colors">
                  Aurangabad ASC (Cidco)
                </a>
              </li>
            </ul>
          </div>

          {/* Pune HQ Central Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Central Office
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="leading-tight">
                  {companyData.headquarters.address}, {companyData.headquarters.city} - {companyData.headquarters.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>{companyData.headquarters.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>{companyData.headquarters.mobile.join(", ")}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>{companyData.headquarters.email[0]}</span>
                  <span>{companyData.headquarters.email[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal integrity */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All verified operational data from certified organizational profile.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Vision: &ldquo;{companyData.corePhilosophy}&rdquo;
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
