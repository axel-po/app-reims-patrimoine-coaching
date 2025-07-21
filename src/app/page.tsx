import BlogSection from "@/app/(public)/_components/blog/BlogSection";
import ProblemSection from "@/app/(public)/_components/problem-section/ProblemSection";
import SolutionSection from "@/app/(public)/_components/solution-section/SolutionSection";
import BenefitsSection from "@/app/(public)/_components/benefits-section/BenefitsSection";
import Nav from "@/app/(public)/_components/nav/Nav";

import React from "react";
import SimplePricing from "@/app/(public)/_components/pricing/SectionPricing";

import Hero from "./(public)/_components/hero/hero";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <SimplePricing />
      <BlogSection />
    </>
  );
}
