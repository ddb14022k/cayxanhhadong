"use client";
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import LatestCategories from "@/components/LatestCategories";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestCategories />
      <BestSelling />
    </div>
  );
}
