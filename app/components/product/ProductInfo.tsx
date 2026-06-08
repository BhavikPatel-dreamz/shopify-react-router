import { useState } from "react";
import ProductAccordion from "./ProductAccordion";
import ProductActions from "./ProductActions";
import ProductPrice from "./ProductPrice";
import ProductVariants from "./ProductVariants";
import EstimatedDelivery from "./EstimatedDelivery";
import { useCart } from "~/lib/useCart";


export default function ProductInfo({
  product,
  onOpenCart,
}: any) {
  const sizeOption = product.options?.find(
    (option: any) => option.name?.toLowerCase() === "size",
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [error, setError] = useState("");
  const addItem = useCart((state) => state.addItem);

  console.log(product);


  const metafieldsMap =
    product.metafields?.reduce((acc: any, field: any) => {
      if (field) {
        acc[field.key] = field.value;
      }
      return acc;
    }, {}) || {};

    const handleAddToCart = () => {
  if (!selectedSize) {
    setError("Please select size.");
    return;
  }

  addItem({
    id: product.id,
    title: product.title,
    image: product.featuredImage?.url,
    price: product.priceRange?.minVariantPrice?.amount,
    size: selectedSize,
  });

  onOpenCart?.(); // open drawer AFTER adding
};

  return (
    <div className="product-details-inner">
      <div className="product-items product-heading">

        <h1 className="main-title">
          <span className="sub-title">
            {metafieldsMap.sub_title}
          </span>
          <span>
            {metafieldsMap.main_title}
          </span>
        </h1>
      </div>

      <div className="product-items product-form">
        <div className="product-form-wrapper">
          <div className="product-form">
            <ProductPrice
              variants={product.variants.nodes}
            />

            <ProductVariants
              variants={product.variants.nodes}
              options={product.options}
              selectedSize={selectedSize}
              onSelectSize={(size: string) => {
                setSelectedSize(size);
                setError("");
              }}
            />

             <EstimatedDelivery />

            <ProductActions
              error={error}
             onAddToCart={() => handleAddToCart()}
            />
          </div>
        </div>
       
      </div>

     

      <ProductAccordion
        product={product}
      />


    </div>
  );
}
