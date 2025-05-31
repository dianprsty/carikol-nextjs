import {FaqSection } from "@/components/landing/faqSection";
import BrandSection from "@/components/landing/BrandSection";
import { HeroSection } from "@/components/landing/HeroSection";
import StatisticSection from "@/components/landing/StatisticSection";
import AppNavbar from "@/components/layout/Navbar";
import { AdsSection } from "@/components/landing/adsSection";


export default function Home() {
  return (
    <div>
      <AppNavbar />
      <main>
        <HeroSection />
        <BrandSection />
        <StatisticSection />
        <AdsSection />
        <FaqSection />
      </main>
    </div>
  );
}
