"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ShieldCheck, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { companyData } from "@/data/company";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Overview", href: "#overview" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Growth", href: "#growth" },
  { name: "Achievements", href: "#achievements" },
  { name: "Service Centers", href: "#locations" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Organization identity */}
          <a href="#overview" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-white text-base tracking-tighter">PC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                {companyData.name}
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800">
                  Est. 1995
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                Authorized Service Provider • HP & Canon ASC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/70 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-cyan-400 bg-cyan-950/60 shadow-sm border border-cyan-800/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:02024495041"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors py-2 px-3 rounded-lg border border-slate-800 hover:border-cyan-800 bg-slate-900/40"
              title="Pune HQ Support Desk"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>020 24495041</span>
            </a>
            <a
              href="#locations"
              className="relative inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 hover:shadow-cyan-500/30 transition-all duration-200 active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>13 Centers</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#locations"
              className="inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-lg text-white bg-cyan-600"
            >
              <MapPin className="w-3 h-3" />
              <span>Centers</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:02024495041"
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Support: 020 24495041</span>
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg bg-cyan-600 text-white shadow-lg shadow-cyan-600/30"
            >
              <MapPin className="w-4 h-4" />
              <span>Explore 13 Service Centers</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
