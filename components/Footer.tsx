"use client";
import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-slate-600 border-t border-slate-200/80 text-xs">
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
              Authorised Service Provider for HP (Gujarat, Rajasthan, Maharashtra &amp; Madhya Pradesh) and Canon (Gujarat &amp; Maharashtra). Operating 25 branches with 100+ hardware specialists, chip-level labs, and our online spares store.
            </p>

            <div className="pt-2 space-y-1">
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                Group Companies &amp; E-Commerce:
              </span>
              <ul className="text-slate-600 space-y-1">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0" />
                  <span>PC Infotech Solutions (Service Network)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <a
                    href="https://vivekinfotech.catalog.to/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                  >
                    Vivek Infotech (Online Store ↗)
                  </a>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>Swami Vivekanand Infocare</span>
                </li>
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
                <Link href="/" className="hover:text-blue-700 transition-colors">
                  Home (Story)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-700 transition-colors">
                  About &amp; Journey
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-700 transition-colors">
                  Services &amp; Capabilities
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-blue-700 transition-colors">
                  25 Branches (Map)
                </Link>
              </li>
              <li>
                <a
                  href="https://vivekinfotech.catalog.to/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>Online Store ↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Primary Regional Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Key Hubs (4 States)
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/locations" className="hover:text-blue-700 transition-colors">
                  Pune HQ (Narayan Peth)
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-blue-700 transition-colors">
                  Pimpri Pune (Canon ASC)
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-blue-700 transition-colors">
                  Jaipur (Rajasthan Hub)
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-blue-700 transition-colors">
                  Ahmedabad HP ASC (Ellisbridge)
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-blue-700 transition-colors">
                  Surat ASC Canon (Athwagate)
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-blue-700 transition-colors">
                  Indore ASC Canon (MIG Colony)
                </Link>
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
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
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
