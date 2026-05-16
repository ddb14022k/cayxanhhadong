"use client";
import React from "react";
import toast from "react-hot-toast";

export default function Banner() {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClaim = () => {
    setIsOpen(false);
    toast.success("Coupon copied to clipboard!");
    navigator.clipboard.writeText("NEW20");
  };

  return (
    isOpen && (
      <div className="w-full px-6 py-1 font-medium text-sm text-white text-center bg-gradient-to-r from-green-600 via-green-500 to-lime-500">
        <div className="flex items-center justify-between max-w-7xl  mx-auto">
          <p>Cây Xanh Chương Mỹ - Uy Tín - Chất Lượng - Tận Tâm</p>
        </div>
      </div>
    )
  );
}
