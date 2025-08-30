import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Handle anchor links when navigating from other pages
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash) as HTMLElement;
      if (element) {
        setTimeout(() => {
          const offset = 100; // Offset to account for fixed navbar
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }, 100); // Small delay to ensure page is loaded
        // Clear the hash after scrolling
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ComparisonSection />
      <Footer />
    </div>
  );
};

export default Index;
