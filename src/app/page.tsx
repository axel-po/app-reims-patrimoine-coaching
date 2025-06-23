import Hero from "@/app/(public)/_components/hero/hero";
import Nav from "@/app/(public)/_components/nav/nav";
import BlogSection from "@/app/(public)/_components/blog/BlogSection";
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
