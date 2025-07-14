import Hero from "@/app/(public)/_components/hero/Hero";
import Nav from "@/app/(public)/_components/nav/Nav";
import BlogSection from "@/app/(public)/_components/blog/BlogSection";
import CoachingSection from "@/app/(public)/_components/coaching/CoachingSection";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <CoachingSection />
      <BlogSection />
    </>
  );
}
