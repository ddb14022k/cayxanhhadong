"use client";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StandardImage from "./StandardImage";

const CategoryCard = ({ category }) => {
  return (
    <Link href={`/category/${category.id}`} className="group max-xl:mx-auto">
      <StandardImage image={category.image} alt={category.name} />
      <div className="flex justify-between gap-3 text-base text-slate-800 pt-2 max-w-60">
        <div>
          <p className="font-bold">{category.name}</p>
        </div>
      </div>
      <p className="flex items-center gap-1 mt-4 text-green-700 hover:text-green-800">
        Xem thêm{" "}
        <ArrowRightIcon
          className="group-hover:ml-2 transition-all"
          size={18}
        />{" "}
      </p>
    </Link>
  );
};

export default CategoryCard;
