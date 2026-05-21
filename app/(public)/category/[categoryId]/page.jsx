"use client";
import AvailableProducts from "@/components/AvailableProducts";
import MainImage from "@/components/MainImage";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Category() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState();
  const categories = useSelector((state) => state.categories.list);

  const fetchCategory = async () => {
    const category = categories.find((category) => category.id === categoryId);
    setCategory(category);
  };

  useEffect(() => {
    if (categories.length > 0) {
      fetchCategory();
    }
    scrollTo(0, 0);
  }, [categoryId, categories]);

  return (
    <div className="mx-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrums */}
        <div className="  text-gray-600 text-sm mt-4 mb-4">
          Home / Products / {category?.name}
        </div>

        <div className="flex max-lg:flex-col gap-4">
          <div className="flex max-sm:flex-col-reverse gap-3">
            <MainImage image={category?.image} alt={category?.name} />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-slate-800">
              {category?.name}
            </h1>
            <div className="text-sm text-slate-600">
              {/* Tabs */}
              <div className="flex border-b border-slate-200 mb-2 max-w-2xl">
                {["Chi tiết"].map((tab, index) => (
                  <button
                    className="border-b-[1.5px] font-semibold px-3 py-2 font-medium"
                    key={index}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {/* Description */}
              <p className="max-w-xl">{category?.description}</p>
            </div>
          </div>
        </div>
      </div>

      <AvailableProducts />
    </div>
  );
}
