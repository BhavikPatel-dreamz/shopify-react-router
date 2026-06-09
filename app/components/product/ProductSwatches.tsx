import React from "react";

type ProductVariant = {
  id: string | number;
  title: string; // e.g. "Green / M"
  available: boolean;
  inventory_quantity?: number;
};

type ProductOption = {
  name: string;
  values: string[];
  selected_value?: string;
};

type Product = {
  options_with_values: ProductOption[];
  variants: ProductVariant[];
};

type Props = {
  product: Product;
  colorLabels?: string[]; // equivalent to `color_label` in Liquid
  sectionId?: string;
  productFormId?: string;
  showInventoryQuantity?: boolean;
  inventoryQuantityThreshold?: number;
  customFlags?: boolean;
  template?: string;
};

const handleize = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const getAvailableValues = (variants: ProductVariant[]) => {
  const set = new Set<string>();

  variants.forEach((v) => {
    if (v.available) {
      const firstPart = v.title.split(" / ")[0];
      set.add(firstPart);
    }
  });

  return set;
};

export default function ProductSwatches({
  product,
  colorLabels = [],
  sectionId = "section",
  productFormId = "product-form",
  showInventoryQuantity,
  inventoryQuantityThreshold = 5,
  customFlags,
  template,
}: Props) {
  return (
    <div className="desktop-swatch-wrapper">
      {product.options_with_values.map((option, optionIndex) => {
        const optionHandle = handleize(option.name);

        // detect color option (Liquid: color_label match)
        const isColor = colorLabels
          .map(handleize)
          .includes(optionHandle);

        // available variants set (Liquid varinatsarr)
        const availableValues = getAvailableValues(product.variants);

        return (
          <fieldset
            key={option.name}
            className={`product-form-input ${
              isColor ? "color-swatch" : "normal-swatch"
            }`}
            id={`option-${optionIndex}`}
          >
            <legend>
              {option.name}
              {option.selected_value && (
                <span> : {option.selected_value}</span>
              )}
            </legend>

            <div className="options-wrapper">
              {option.values.map((value, valueIndex) => {
                const valueHandle = handleize(value);
                const isAvailable = availableValues.has(value);

                const variant = product.variants.find((v) =>
                  v.title.includes(value)
                );

                const inputId = `${sectionId}-${optionIndex}-${valueIndex}`;

                // COLOR SWATCH UI
                if (isColor) {
                  return (
                    <h3 key={value} className="option-value">
                      <input
                        type="radio"
                        name={option.name}
                        value={value}
                        id={inputId}
                        form={productFormId}
                        defaultChecked={option.selected_value === value}
                        className="input-radio"
                      />

                      <label
                        htmlFor={inputId}
                        data-value={value}
                        style={{
                          backgroundColor: valueHandle,
                          backgroundImage: `url(/swatches/swt-${valueHandle}.png)`,
                        }}
                      />

                      <div className="tooltip">{value}</div>
                    </h3>
                  );
                }

                // NORMAL SWATCH UI
                return (
                  <h3
                    key={value}
                    className={`option-value ${
                      !isAvailable ? "inactive-option" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={option.name}
                      value={value}
                      id={inputId}
                      form={productFormId}
                    />

                    <label htmlFor={inputId}>
                      {showInventoryQuantity &&
                        variant &&
                        (variant.inventory_quantity ?? 0) <
                          inventoryQuantityThreshold && (
                          <span className="green-dot" />
                        )}

                      <span className="size-title">{value}</span>

                      {!isAvailable && (
                        <span className="notify-text">NOTIFY ME</span>
                      )}

                      {template !== "product.pre-order-sale" &&
                        customFlags && (
                          <>
                            {!isAvailable ? (
                              <span>soon</span>
                            ) : (
                              variant && (
                                <div className="inventory-quantity-label">
                                  <span>
                                    {variant.inventory_quantity ?? 0}
                                  </span>{" "}
                                  Left
                                </div>
                              )
                            )}
                          </>
                        )}
                    </label>
                  </h3>
                );
              })}
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}