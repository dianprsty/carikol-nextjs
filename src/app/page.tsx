import { FaqSection } from "@/components/landing/faqSection";
import BrandSection from "@/components/landing/BrandSection";
import HeroSection from "@/components/landing/HeroSection";
import StatisticSection from "@/components/landing/StatisticSection";
import AppNavbar from "@/components/layout/Navbar";
import { AdsSection } from "@/components/landing/adsSection";
import FloatingActionButton from "@/components/landing/FloatingActionButton";

export default function Home() {
  return (
    <div>
      <AppNavbar
        auth={{
          login: { title: "Login", url: "/login" },
          signup: { title: "Sign up", url: "/register" },
        }}
      />
      <main>
        <HeroSection />
        <BrandSection />
        <StatisticSection />
        <AdsSection />
        <FaqSection />
        <FloatingActionButton />
      </main>
    </div>
  );
}
