"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Phone, ArrowUpRight, ShoppingBag } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-2.5"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo Mark */}
          <Link href="/" className="flex items-center" aria-label="PC Infotech Solutions - Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/LOGOS/pcis-icon.svg"
              alt="PC Infotech Solutions"
              className="h-8 sm:h-9 w-auto object-contain hover:opacity-95 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 border border-slate-200/80 rounded-full px-2.5 py-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    isActive
                      ? "text-blue-700 bg-white shadow-2xs border border-slate-200/80 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:02024495041"
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 py-2 px-3 rounded-xl border border-slate-200/80 hover:border-blue-300 bg-white transition-colors"
              title="Pune HQ Support Desk"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>020 24495041</span>
            </a>
            <a
              href="https://vivekinfotech.catalog.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-2xs transition-all"
              title="Vivek Infotech — Live Printer & Spare Parts Catalog"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-700" />
              <span>Online Store</span>
              <ArrowUpRight className="w-3 h-3 text-emerald-600 opacity-80" />
            </a>
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl text-white bg-blue-700 hover:bg-blue-800 shadow-xs transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Branches</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://vivekinfotech.catalog.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 px-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-700" />
              <span>Store</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-4 border-t border-slate-100 mt-3 space-y-1 bg-white">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://vivekinfotech.catalog.to/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-emerald-700" />
                  <span>Online Store (Vivek Infotech Spares)</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-700" />
              </a>

              <a
                href="tel:02024495041"
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-700"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>Pune HQ: 020 24495041</span>
              </a>
              <Link
                href="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-700 text-white text-xs font-bold shadow-xs"
              >
                <MapPin className="w-4 h-4" />
                <span>Find Nearest Branch &amp; Service Hub</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
