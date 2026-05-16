"use client";
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import OurSpecs from "@/components/OurSpec";
import LatestCategories from "@/components/LatestCategories";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestCategories />
      <BestSelling />
      <OurSpecs />
      <Newsletter />
    </div>
  );
}
