"use client";
import Link from "next/link";
import React from "react";
import StandardImage from "./StandardImage";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className=" group max-xl:mx-auto">
      <StandardImage image={product.images[0]} alt={product.name} />
      <div className="flex justify-between gap-3 text-base text-slate-800 pt-2 max-w-60">
        <div>
          <p className="font-bold">{product.name}</p>
          <div className="text-sm text-slate-600 mt-1">
            {product.description.split(",").map((part, index) => (
              <p key={index}>{part.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
