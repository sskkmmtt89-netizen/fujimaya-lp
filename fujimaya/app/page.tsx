"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ReviewSection from "@/components/ReviewSection";
import InfoSection from "@/components/InfoSection";
import MapCTA from "@/components/MapCTA";
import InstagramSection from "@/components/InstagramSection";
import FinalCTA from "@/components/FinalCTA";
import StickyCallButton from "@/components/StickyCallButton";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <MenuSection />
      <ReviewSection />
      <InfoSection />
      <MapCTA />
      <InstagramSection />
      <FinalCTA />
      <StickyCallButton />
    </main>
  );
}
