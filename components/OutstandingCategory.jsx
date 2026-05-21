import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OutstandingCategory = ({ category }) => {
  return (
    <Link
      href={`/category/${category.id}`}
      className="group w-full max-xl:mx-auto"
    >
      <div className="w-full bg-gradient-to-br from-emerald-100 to-green-200 rounded-3xl p-6 px-8 group hover:shadow-lg transition flex items-center justify-between h-40 xl:h-56">
        <div className="flex-1 mr-4">
          <p className="text-3xl font-medium bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent max-w-40">
            {category.name}
          </p>
          <p className="flex items-center gap-1 mt-4 text-green-700 hover:text-green-800">
            Xem thêm
            <ArrowRightIcon
              className="group-hover:ml-2 transition-all"
              size={18}
            />
          </p>
        </div>

        <div className="relative h-full w-32 xl:w-40 flex-shrink-0 rounded-2xl overflow-hidden">
          {category?.image && (
            <Image
              src={category.image}
              alt={category.name || ""}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default OutstandingCategory;
