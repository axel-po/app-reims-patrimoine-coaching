import Hero from "@/components/@shared/hero/hero";
import Nav from "@/components/@shared/nav/nav";
import BlogSection from "@/components/landing/blog/BlogSection";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />

      <BlogSection />
    </>
  );
}
