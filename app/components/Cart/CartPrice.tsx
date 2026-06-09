import React from "react";

type Price = {
  amount: string;
  currencyCode: string;
};

type Variant = {
  id: string;
  price?: Price;
};

type Props = {
  variants: Variant[];
  selectedVariantId: string;
};

export default function CartPrice({
  variants,
  selectedVariantId,
}: Props) {
  const variant =
    variants.find((v) => v.id === selectedVariantId) ||
    variants[0];

  const price = variant?.price;

  console.log("Selected Variant Price:", price);

  if (!price) return null;

  return (
    <span className="money">
      {new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: price.currencyCode,
      }).format(Number(price.amount))}
    </span>
  );
}
