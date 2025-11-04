import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { CTASection } from "../components/home/CTASection";
import { Testimonials } from "../components/home/Testimonials";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;
