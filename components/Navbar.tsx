"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, ArrowUpRight } from "lucide-react";

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
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5"
          : "bg-white border-b border-slate-100 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo */}
          <a href="#overview" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/PCIS_logo_light_mode.svg"
              alt="PC Infotech Solutions"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-blue-700 bg-white shadow-sm border border-slate-200 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:02024495041"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-blue-700 py-2 px-3 rounded-lg border border-slate-200 hover:border-blue-300 bg-white transition-colors"
              title="Pune HQ Support Desk"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>020 24495041</span>
            </a>
            <a
              href="#locations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-800 shadow-sm transition-colors"
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
              className="inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-lg text-white bg-blue-700"
            >
              <MapPin className="w-3 h-3" />
              <span>Centers</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-1 pb-3 border-b border-slate-100">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <a
              href="tel:02024495041"
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg bg-slate-50 text-slate-800 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Support: 020 24495041</span>
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg bg-blue-700 text-white shadow-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>Find 13 Service Centers</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
