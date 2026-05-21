import Image from "next/image";

export default function StandardImage({ image, alt }) {
  return (
    <div className="bg-[#F5F5F5] w-40 sm:w-60 rounded-lg overflow-hidden">
      <div className="relative w-full aspect-square">
        {image && (
          <Image
            src={image}
            alt={alt || ""}
            fill
            className="object-cover group-hover:scale-110 transition duration-300"
          />
        )}
      </div>
    </div>
  );
}
