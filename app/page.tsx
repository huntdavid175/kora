import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeFavouritesSection from "@/components/HomeFavouritesSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import HomeTeamSection from "@/components/HomeTeamSection";
import HomeWhyChooseSection from "@/components/HomeWhyChooseSection";
import HomePricingSection from "@/components/HomePricingSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeroSection />
      <HomeFavouritesSection />
      <HomeAboutSection />
      <HomeTeamSection />
      <HomeWhyChooseSection />
      <HomePricingSection />
      <TestimonialsCarousel />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
