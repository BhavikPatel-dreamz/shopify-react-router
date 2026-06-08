import { useState } from "react";

export default function ProductVariants({
  options,
}: any) {
  const sizeOption = options.find(
    (option: any) =>
      option.name.toLowerCase() === "size"
  );

  const [selectedSize, setSelectedSize] =
    useState(sizeOption?.values[0]);

  return (
    <div className="mt-6">

      <h3 className="mb-2 font-medium">
        Size
      </h3>

      <div className="flex gap-2 flex-wrap">

        {sizeOption?.values.map(
          (size: string) => (
            <button
              key={size}
              onClick={() =>
                setSelectedSize(size)
              }
              className={`
                border px-4 py-2
                ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : ""
                }
              `}
            >
              {size}
            </button>
          )
        )}
      </div>
    </div>
  );
}