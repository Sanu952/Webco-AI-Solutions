import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { motion } from "framer-motion";

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <SEOHead 
        title="AI Chatbot Solutions That Grow Your Business" 
        description="Webco builds intelligent AI chatbots that capture leads, book appointments, and support customers 24/7. Premium AI agency for enterprise clients."
      />
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <ServicesOverview />
      <IndustriesGrid />
      <FeaturesSection />
      <HowItWorks />
      <PortfolioPreview />
      <TestimonialsSection />
      <PricingPreview />
      <FAQPreview />
      <ContactCTA />
    </motion.div>
  );
}

// Ensure default export for lazy loading if needed, though wouter typically uses named
export default HomePage;
