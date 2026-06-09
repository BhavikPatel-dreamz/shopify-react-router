
type Variant = {
  id: string;
  title: string;
  availableForSale?: boolean;
  sku?: string;
  quantityAvailable?: number;
};

type Option = {
  name: string;
  values: string[];
};

type Props = {
  variants: Variant[];
  options: Option[];
  selectedVariantId?: string;
  onSelectVariant?: (variantId: string) => void;
  isEditingSize: boolean;
};

export default function SizeSelectorCart({
  variants,
  options,
  selectedVariantId,
  onSelectVariant,
  isEditingSize
}: Props) {
  // get size option (Shopify usually: Size / Color)
  const sizeOption = options.find((opt) =>
    opt.name.toLowerCase().includes("size")
  );

  if (!sizeOption) return null;

  return (
     <div className={`size-change-selection ${isEditingSize ? "active" : ""}`}>
      {sizeOption.values.map((sizeValue) => {
        // find matching variant
        const variant = variants.find((v) =>
          v.title.includes(sizeValue)
        );

        const isActive = variant?.id === selectedVariantId;
        const isInactive = variant?.availableForSale === false;

        return (
          <span
            key={sizeValue}
            onClick={() => {
              if (!variant || isInactive) return;
              onSelectVariant?.(variant.id);
            }}
            data-variant_id={variant?.id}
            data-sku={variant?.sku}
            data-quantity={variant?.quantityAvailable}
            className={[
              "size",
              isActive ? "active" : "",
              isInactive ? "inactive-size" : "",
            ].join(" ")}
          >
            {sizeValue}
          </span>
        );
      })}
    </div>
  );
}