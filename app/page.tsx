import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HomeWhatWeDo } from "@/components/HomeWhatWeDo";
import { HomeJourney } from "@/components/HomeJourney";
import { Growth } from "@/components/Growth";
import { HomeAchievements } from "@/components/HomeAchievements";
import { HomeReach } from "@/components/HomeReach";
import { HomePresentDay } from "@/components/HomePresentDay";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "PC Infotech Solutions | Authorized Service Provider (HP, Canon, TVSE)",
  description:
    "Authorized warranty and out-of-warranty service provider for HP, Canon, TVSE, and EPSON across Western India. 13 certified hubs, 100+ hardware specialists, and proprietary chip-level repair labs.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 relative selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      {/* 1. Hero: Who is the company & what does it do? */}
      <Hero />

      {/* 2. What We Do: Concise capability overview linking to /services */}
      <HomeWhatWeDo />

      {/* 3. Company Journey: Timeline milestones linking to /about */}
      <HomeJourney />

      {/* 4. Growth Over the Years: Data visualization with Recharts & key metrics */}
      <Growth />

      {/* 5. Major Achievements: Standout honors (Canon Best Partner 2x, 1000+ Dealers) */}
      <HomeAchievements />

      {/* 6. Geographic Reach: Summary of 13 hubs & 8 states linking to /locations */}
      <HomeReach />

      {/* 7. Current Presence / Where We Are Today: Numbers & Corporate Client Trust */}
      <HomePresentDay />

      {/* 8. Strong Final CTA */}
      <CTA />

      {/* 9. Footer */}
      <Footer />

      <ScrollToTop />
    </main>
  );
}
