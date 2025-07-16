import Hero from "@/app/(public)/_components/hero/Hero";
import Nav from "@/app/(public)/_components/nav/Nav";
import BlogSection from "@/app/(public)/_components/blog/BlogSection";
import CoachingSection from "@/app/(public)/_components/coaching/CoachingSection";
import React from "react";
import SimplePricing from "@/app/(public)/_components/pricing/SectionPricing";
import Testimonials from "./(public)/_components/testimonials/testimonials-marquee";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <CoachingSection />
      <SimplePricing />
      <Testimonials />
      <BlogSection />
    </>
  );
}
