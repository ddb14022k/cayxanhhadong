"use client";
import { assets } from "@/assets/assets";
import { ArrowRightIcon, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import CategoriesMarquee from "./CategoriesMarquee";
import OutstandingCategory from "./OutstandingCategory";
import { useSelector } from "react-redux";

const Hero = () => {
  const categories = useSelector((state) => state.categories.list);

  return (
    <div className="mx-6">
      <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-2">
        <div className="relative flex-1 flex flex-col bg-green-200 rounded-3xl overflow-hidden xl:min-h-100 group">
          <div className="p-5 sm:p-16">
            <div className="bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs">
              CHẤT LƯỢNG TỐT NHẤT-GIÁ RẺ NHẤT THỊ TRƯỜNG
            </div>
            <h2 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-slate-600 bg-clip-text text-transparent">
              Chuyên các loại cây xanh, cây cảnh, cây công trình, cây văn phòng,
              cây nội thất.
            </h2>
            <div className="text-slate-800 text-sm font-medium mt-4 sm:mt-8">
              <p>Địa chỉ:</p>
              <p className="text-xl">
                Cầu Mai Lĩnh - Biên Giang - Chương Mỹ - Hà Nội
              </p>
            </div>
            <button className="bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition inline-flex items-center gap-2 whitespace-nowrap">
              Liện hệ ngay <Phone className="ml-2" size={18} />
            </button>
          </div>
          <Image
            className="sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm rounded-3xl object-cover"
            src={assets.tree_garden}
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600">
          <OutstandingCategory category={categories[0]} />
          <OutstandingCategory category={categories[1]} />
        </div>
      </div>
      <CategoriesMarquee />
    </div>
  );
};

export default Hero;
