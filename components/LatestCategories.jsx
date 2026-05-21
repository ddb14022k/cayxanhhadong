"use client";
import React from "react";
import Title from "./Title";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";

const LatestCategories = () => {
  const displayQuantity = 4;
  const categories = useSelector((state) => state.categories.list);

  return (
    <div className="px-6 my-10 max-w-6xl mx-auto">
      <Title
        title="Cây công trình bán chạy"
        description={`Hiển thị ${categories.length < displayQuantity ? categories.length : displayQuantity} trên ${categories.length} cây`}
        href="/shop"
      />
      <div className="mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 justify-between">
        {categories
          .slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, displayQuantity)
          .map((product, index) => (
            <CategoryCard key={index} category={product} />
          ))}
      </div>
    </div>
  );
};

export default LatestCategories;
