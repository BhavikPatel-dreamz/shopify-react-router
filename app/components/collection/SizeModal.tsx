import { useState } from "react";
import { useCart } from "~/lib/useCart";

export default function SizeModal({ product, onClose, openCart }: any) {
  const [selectedSize, setSelectedSize] = useState("");
  const addItem = useCart((s) => s.addItem);
  const selectedVariant = product?.variants?.nodes?.find((variant: any) =>
    variant.title?.toLowerCase().includes(selectedSize.toLowerCase()),
  );

  const sizeOption = product?.options?.find(
    (option: any) => option.name?.toLowerCase() === "size",
  );

  const sizes = sizeOption?.values || [];

  console.log("product on sizeModal", product);

  console.log("sizes", sizes);

  const handleAdd = (size: string) => {
    setSelectedSize(size);
    const variant = product?.variants?.nodes?.find((v: any) =>
      v.title?.toLowerCase().includes(size.toLowerCase()),
    );

    console.log("Adding to cart:", {
      id: product.id,
      title: product.title,
      image: product.featuredImage?.url,
      price: product.priceRange?.minVariantPrice?.amount,
      size: size,
    });

    addItem({
      cartItemKey: `${product.id}-${variant?.id || size}`,
      selectedVariantId: variant?.id || "",
      id: product.id,
      title: product.title,
      image: product.featuredImage?.url,
      price: Number(variant?.price?.amount || 0),
      size: size,
      quantity: 1,
      product: product,
    });
    onClose();
    openCart?.();
  };

  return (
    <>
      {/* BACKDROP */}
      <div className="product-size-swatch-wrapper" onClick={onClose}>
        {/* MODAL */}
        <div className="wrapper">
          {/* HEADER */}
          <div className="product-card__sizes-title">
            SELECT SIZE
            <button className="product-card__sizes-close" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M14 14L1 1M14 1L1 14"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
          </div>

          {/* SIZE GRID */}
          <ul className="product-card__sizes">
            {sizes?.map((size: string) => (
              <li className="product-card__size" key={size}>
                <button
                  onClick={() => handleAdd(size)}
                  className={` size ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
