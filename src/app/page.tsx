import BrandSection from "@/components/landing/BrandSection";
import { HeroSection } from "@/components/landing/HeroSection";
import StatisticSection from "@/components/landing/StatisticSection";
import AppNavbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <AppNavbar />
      <main>
        <HeroSection />
        <BrandSection />
        <StatisticSection />
      </main>
    </div>
  );
}
