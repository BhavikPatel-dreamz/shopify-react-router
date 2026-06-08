import { useState } from "react";
import SizeGuideDrawer from "./SizeChartModal";

export default function ProductVariants({
  options,
  selectedSize,
  onSelectSize,
}: any) {
  const sizeOption = options.find(
    (option: any) =>
      option.name.toLowerCase() === "size"
  );
  const [isSizeGuideOpen, setIsSizeGuideOpen] =
    useState(false);

  return (
    <>
      <div className="product-items product-low-inventory xs-hide">
        <div className="low-inventory-wrapper">
          <div className="size-guide-button"
          onClick={() => setIsSizeGuideOpen(true)}>
            SIZE GUIDE
          </div>
        </div>
      </div>

      <SizeGuideDrawer
      isOpen={isSizeGuideOpen}
      onClose={() => setIsSizeGuideOpen(false)}
    />

      <div className="xs-show">
        <div className="product-items product-banner-wrapper">
        </div>
      </div>

      <div className="product-items product-variant-wrapper">
        <div className="variant-selector">
          {sizeOption?.values?.map(
            (size: string) => (
              <button
                key={size}
                type="button"
                onClick={() => onSelectSize(size)}
                className={`variant-option ${
                  selectedSize === size
                    ? "active"
                    : ""
                }`}
              >
                {size}
              </button>
            )
          )}
        </div>
      </div>
      
    </>
  );
}
