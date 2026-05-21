import Image from "next/image";

export default function MainImage({ image, alt }) {
  return (
    <div className="relative w-full h-100 sm:size-113 rounded-lg overflow-hidden">
      {image && (
        <Image src={image} alt={alt || ""} fill className="object-contain" />
      )}
    </div>
  );
}
