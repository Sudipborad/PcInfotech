import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Growth } from "@/components/Growth";
import { Achievements } from "@/components/Achievements";
import { Locations } from "@/components/Locations";
import { Clients } from "@/components/Clients";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 relative selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Growth />
      <Achievements />
      <Locations />
      <Clients />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
