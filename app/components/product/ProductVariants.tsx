export default function ProductVariants({
  options,
  selectedSize,
  onSelectSize,
}: any) {
  const sizeOption = options.find(
    (option: any) =>
      option.name.toLowerCase() === "size"
  );

  return (
    <>
      <div className="product-items product-low-inventory xs-hide">
        <div className="low-inventory-wrapper">
          <div className="size-guide-button">
            SIZE GUIDE
          </div>
        </div>
      </div>

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
