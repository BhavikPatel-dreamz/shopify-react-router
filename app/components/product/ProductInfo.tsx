import { useState } from "react";
import ProductAccordion from "./ProductAccordion";
import ProductActions from "./ProductActions";
import ProductPrice from "./ProductPrice";
import ProductVariants from "./ProductVariants";
import EstimatedDelivery from "./EstimatedDelivery";
import { useCart } from "~/lib/useCart";
import ColorSwatches from "./ColorSwatches";
import { getColorSwatchesFromProducts } from "~/lib/getColorSwatchesFromProducts";
import QuantitySelector from "./QuantitySelector";

export default function ProductInfo({
  product,
  relatedProducts,
  onOpenCart,
}: any) {
  const [selectedSize, setSelectedSize] = useState("");
  const [error, setError] = useState("");
  const addItem = useCart((state) => state.addItem);

  const [quantity, setQuantity] = useState<number>(1);
  const selectedVariant = product.variants?.nodes?.find((variant: any) =>
    variant.title?.toLowerCase().includes(selectedSize.toLowerCase()),
  );

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

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
      cartItemKey: `${product.id}-${selectedVariant?.id || selectedSize}`,
      selectedVariantId: selectedVariant?.id || "",
      id: product.id,
      title: product.title,
      image: product.featuredImage?.url,
      price: Number(selectedVariant?.price?.amount || 0),
      size: selectedSize,
      quantity: quantity,
      product: product,
    });

    onOpenCart?.(); // open drawer AFTER adding
  };

  const swatches = getColorSwatchesFromProducts(
    relatedProducts || [], // you must fetch this
    product.tags,
  );

  console.log("Related Color Swatches:", swatches);
  console.log("Related Products:", relatedProducts);

  return (
    <div className="product-details-inner">
      <div className="product-items product-heading">
        <h1 className="main-title">
          <span className="sub-title">{metafieldsMap.sub_title}</span>
          <span>{metafieldsMap.main_title}</span>
        </h1>
      </div>

      <div className="product-items product-form">
        <div className="product-form-wrapper">
          <div className="product-form">
            <ProductPrice variants={product.variants.nodes} />

            <ProductVariants
              variants={product.variants.nodes}
              options={product.options}
              selectedSize={selectedSize}
              onSelectSize={(size: string) => {
                setSelectedSize(size);
                setError("");
              }}
            />

             {error && (
                <div className="size-select-error">
                  <p >
                    {error}
                  </p>
                </div>
              )}

            <QuantitySelector
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onChange={setQuantity}
            />

            <ColorSwatches swatches={swatches} />

            <EstimatedDelivery />

            <ProductActions
              onAddToCart={() => handleAddToCart()}
            />
          </div>
        </div>
      </div>

      <ProductAccordion product={product} />
    </div>
  );
}
