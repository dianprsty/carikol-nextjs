import { FaqSection } from "@/components/landing/faqSection";
import BrandSection from "@/components/landing/BrandSection";
import HeroSection from "@/components/landing/HeroSection";
import StatisticSection from "@/components/landing/StatisticSection";
import AppNavbar from "@/components/layout/Navbar";
import { AdsSection } from "@/components/landing/adsSection";
import FloatingActionButton from "@/components/landing/FloatingActionButton";
import PrmotionalSection from "@/components/landing/PromotionalSection";
import ReviewSection from "@/components/landing/ReviewSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import Footer from "@/components/landing/Footer";

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
        <PrmotionalSection/>
        <ReviewSection/>
        <NewsletterSection/>
        <Footer/>
      </main>
    </div>
  );
}
