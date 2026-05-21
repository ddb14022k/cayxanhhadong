"use client";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

const AvailableProducts = () => {
  const { categoryId } = useParams();

  const displayQuantity = 8;
  const productsAll = useSelector((state) => state.product.list);

  const products = categoryId
    ? productsAll.filter((product) => product.category === categoryId)
    : productsAll;

  return (
    <div className="px-6 my-5 max-w-6xl mx-auto">
      <Title
        title="Các cây có sẵn"
        description={`Hiển thị ${products.length < displayQuantity ? products.length : displayQuantity} trên ${products.length} cây`}
        href="/shop"
      />
      <div className="mt-12  grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12">
        {products.slice(0, displayQuantity).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AvailableProducts;
