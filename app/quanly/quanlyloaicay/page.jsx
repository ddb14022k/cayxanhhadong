"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SquarePenIcon, TrashIcon } from "lucide-react";
import Loading from "@/components/Loading";
import { productDummyData } from "@/assets/assets";

export default function StoreManageProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setProducts(productDummyData);
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <h1 className="text-2xl text-slate-500 mb-5">
        <span className="text-slate-800 font-medium">Quản lý cây</span>
      </h1>
      <table className="w-full max-w-4xl text-left  ring ring-slate-200  rounded overflow-hidden text-sm">
        <thead className="bg-slate-50 text-gray-700 uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3 text-center">Tên cây</th>
            <th className="px-4 py-3 text-center">Sửa/Xoá</th>
          </tr>
        </thead>
        <tbody className="text-slate-700">
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="px-4 py-3">
                <div className="flex gap-2 items-center">
                  <Image
                    width={40}
                    height={40}
                    className="p-1 shadow rounded cursor-pointer"
                    src={product.images[0]}
                    alt=""
                  />
                  {product.name}
                </div>
              </td>

              <td className="py-3 text-center">
                <SquarePenIcon className="inline-block cursor-pointer text-blue-500 hover:text-blue-700" />
                <TrashIcon className="inline-block cursor-pointer text-red-500 hover:text-red-700 ml-2" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
