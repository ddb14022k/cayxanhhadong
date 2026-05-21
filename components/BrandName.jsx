import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

export default function BrandName() {
  return (
    <Link href="/" className="text-4xl font-semibold text-slate-700">
      <div className="flex items-center gap-2">
        <span className="text-green-600">
          Cây Xanh
          <br />
          Chương Mỹ
        </span>
        <div className="relative inline-block">
          <Image src={assets.tree_logo} alt="Tree Logo" className="w-15" />
          <p className="absolute -top-4 left-0 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-2 text-white bg-green-600 whitespace-nowrap leading-none">
            Phục vụ 24/7
          </p>
        </div>
      </div>
    </Link>
  );
}
