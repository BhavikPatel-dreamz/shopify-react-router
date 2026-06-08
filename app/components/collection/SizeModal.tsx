import { useState } from "react";
import CartDrawer from "../Cart/CartDrawer";
import { useCart } from "~/lib/useCart";


export default function SizeModal({
  product,
  onClose,
}: any) {
  const [selectedSize, setSelectedSize] = useState("");
  const [openCart, setOpenCart] = useState(false);

  const addItem = useCart((s) => s.addItem);

 const sizeOption = product?.options?.find(
  (option: any) =>
    option.name?.toLowerCase() === "size"
);

const sizes = sizeOption?.values || [];
 
  console.log("product on sizeModal",product);

  console.log("sizes",sizes);

  const handleAdd = () => {
    if (!selectedSize) return;

    console.log("Adding to cart:", {
      id: product.id,
      title: product.title,
      image: product.featuredImage?.url,
      price: product.priceRange?.minVariantPrice?.amount,
      size: selectedSize,
    });

    addItem({
      id: product.id,
      title: product.title,
      image: product.featuredImage?.url,
     price: product.priceRange?.minVariantPrice?.amount,
      size: selectedSize,
    });

    setOpenCart(true);
    onClose();
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className="product-size-swatch-wrapper"
        onClick={onClose}
      >

      {/* MODAL */}
      <div className="wrapper">

        {/* HEADER */}
          <div className="product-card__sizes-title">
            SELECT SIZE
            <button className="product-card__sizes-close" onClick={onClose}>
            <svg  xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" fill="none">
            <path d="M14 14L1 1M14 1L1 14" stroke="currentColor" stroke-linecap="round"></path>
          </svg>
          </button>
          </div>

          
        

        {/* SIZE GRID */}
        <ul className="product-card__sizes">
          {sizes?.map((size: string) => (
            <li className="product-card__size" key={size}>
              <button
                onClick={() => {setSelectedSize(size)
                    handleAdd();}
                }
                className={` size ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                {size}
              </button>
            </li>
          ))}
        </ul>

        {/* ADD BUTTON */}
        {/* <button
          onClick={handleAdd}
          className="w-full bg-black text-white py-3 text-sm"
        >
          ADD TO BAG
        </button> */}
      </div>

      </div>

      {/* CART DRAWER */}
      {openCart && (
        <CartDrawer onClose={() => setOpenCart(false)} />
      )}

    </>
  );
}