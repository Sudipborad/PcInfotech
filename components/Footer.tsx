"use client";
import React from "react";
import { companyData } from "@/data/company";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-slate-600 border-t border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Organization overview (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/LOGOS/pcis-icon.svg"
                alt="PC Infotech Solutions"
                className="h-8 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-tight text-slate-900 leading-tight">
                  PC INFOTECH <span className="text-[#f0453f]">SOLUTIONS</span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Founded 1995 • Proprietor: Mr. Chetan Kumbhani
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Authorized Service Provider for HP laptops and printers (Gujarat State), Canon Authorized Service Center (Best Partner 2015 & 2018), and authorized TVSE & EPSON spares stockist. Operating 13 direct centers with over 100 hardware and support engineers.
            </p>

            <div className="pt-2 space-y-1">
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                Group Companies:
              </span>
              <ul className="text-slate-600 space-y-0.5">
                {companyData.groupCompanies.map((c) => (
                  <li key={c} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="hover:text-blue-700 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-700 transition-colors">
                  Origin & Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-700 transition-colors">
                  Services & Repair
                </a>
              </li>
              <li>
                <a href="#growth" className="hover:text-blue-700 transition-colors">
                  Growth Timeline
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-blue-700 transition-colors">
                  Achievements & Awards
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-700 transition-colors">
                  Service Center Map
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-blue-700 transition-colors">
                  Corporate Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Primary Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Major Hubs
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#locations" className="hover:text-blue-700 transition-colors">
                  Pune HQ (Somesh Appt)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-700 transition-colors">
                  Ahmedabad HP ASC (Ellisbridge)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-700 transition-colors">
                  Surat ASC Canon (Athwagate)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-700 transition-colors">
                  Baroda Founding Base (Jetalpur)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-700 transition-colors">
                  Nashik ASC Canon (Mumbai Naka)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-700 transition-colors">
                  Indore ASC Canon (MIG Colony)
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-700 transition-colors">
                  Aurangabad ASC (Cidco)
                </a>
              </li>
            </ul>
          </div>

          {/* Pune HQ Central Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Central Office
            </h4>
            <div className="space-y-2 text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                <span className="leading-tight">
                  {companyData.headquarters.address}, {companyData.headquarters.city} - {companyData.headquarters.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
                <span>{companyData.headquarters.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
                <span>{companyData.headquarters.mobile.join(", ")}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>{companyData.headquarters.email[0]}</span>
                  <span>{companyData.headquarters.email[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal integrity */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All verified operational data from certified organizational profile.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">
              Vision: &ldquo;{companyData.corePhilosophy}&rdquo;
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
