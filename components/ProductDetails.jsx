"use client";

import { addToCart } from "@/lib/features/cart/cartSlice";
import { TagIcon, EarthIcon, CreditCardIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="flex max-lg:flex-col gap-4">
      <div className="flex max-sm:flex-col-reverse gap-3">
        <div className="flex sm:flex-col gap-3">
          {product.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setMainImage(product.images[index])}
              className="bg-slate-100 flex items-center justify-center size-26 rounded-lg group cursor-pointer"
            >
              <Image
                src={image}
                className="group-hover:scale-103 group-active:scale-95 transition"
                alt=""
                width={45}
                height={45}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center h-100 sm:size-113 bg-slate-100 rounded-lg ">
          <Image src={mainImage} alt="" width={250} height={250} />
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold text-slate-800">
          {product.name}
        </h1>
        <div className="text-sm text-slate-600">
          {/* Tabs */}
          <div className="flex border-b border-slate-200 mb-6 max-w-2xl">
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
          <p className="max-w-xl">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
