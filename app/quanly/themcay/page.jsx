"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function StoreAddProduct() {
  const categories = [
    "Cây vú sữa",
    "Cây tùng",
    "Cây chay",
    "Cây khế",
    "Cây hồng",
  ];

  const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null });
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    mrp: 0,
    price: 0,
    category: "",
  });
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Logic to add a product
  };

  return (
    <form
      onSubmit={(e) =>
        toast.promise(onSubmitHandler(e), { loading: "Adding Product..." })
      }
      className="text-slate-500 mb-28"
    >
      <h1 className="text-2xl">
        <span className="text-slate-800 font-medium">Tạo cây mới</span>
      </h1>
      <p className="mt-7">Ảnh của cây</p>

      <div htmlFor="" className="flex gap-3 mt-4">
        {Object.keys(images).map((key) => (
          <label key={key} htmlFor={`images${key}`}>
            <Image
              width={300}
              height={300}
              className="h-15 w-auto border border-slate-200 rounded cursor-pointer"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.upload_area
              }
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id={`images${key}`}
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
              hidden
            />
          </label>
        ))}
      </div>

      <label htmlFor="" className="flex flex-col gap-2 my-6 ">
        Tên cây
        <input
          type="text"
          name="name"
          onChange={onChangeHandler}
          value={productInfo.name}
          placeholder="Ví dụ: Cây vú sữa 1"
          className="w-full max-w-sm p-2 px-4 outline-none border border-slate-200 rounded"
          required
        />
      </label>

      <label htmlFor="" className="flex flex-col gap-2 my-6 ">
        Mô tả cây
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={productInfo.description}
          placeholder="Ví dụ: Cây tùng cao khoảng 4 mét rưỡi, tán rộng 3 mét rưỡi, thoát thân tầm 2 mét, thân thẳng, gốc cỡ 80 phân"
          rows={5}
          className="w-full max-w-sm p-2 px-4 outline-none border border-slate-200 rounded resize-none"
          required
        />
      </label>
      <select
        onChange={(e) =>
          setProductInfo({ ...productInfo, category: e.target.value })
        }
        value={productInfo.category}
        className="w-full max-w-sm p-2 px-4 my-6 outline-none border border-slate-200 rounded"
        required
      >
        <option value="">Chọn loại cây</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <br />

      <button
        disabled={loading}
        className="bg-slate-800 text-white px-6 mt-7 py-2 hover:bg-slate-900 rounded transition"
      >
        Tạo cây mới
      </button>
    </form>
  );
}
