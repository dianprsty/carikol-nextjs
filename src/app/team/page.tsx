import AppNavbar from "@/components/layout/Navbar";
import Description from "@/components/about/AboutDescription";
import VisionMission from "@/components/about/VisionMission";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Footer from "@/components/landing/Footer";
import AboutDescription from "@/components/about/AboutDescription";
import TeamSection from "@/components/other/TeamPage";

export default function TeamPage() {
  return (
    <div>
      <AppNavbar
        auth={{
          login: { title: "Login", url: "/login" },
          signup: { title: "Sign up", url: "/register" },
        }}
      />
      <main> 
        <TeamSection />
        <Footer/>
      </main>
    </div>
  );
}
