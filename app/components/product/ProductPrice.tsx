export default function ProductPrice({
  variants,
}: any) {
  const variant = variants[0];

  const price = Number(
    variant.price.amount
  );

  const compareAtPrice = Number(
    variant.compareAtPrice?.amount || 0
  );

  const discount =
    compareAtPrice > 0
      ? Math.round(
          ((compareAtPrice - price) /
            compareAtPrice) *
            100
        )
      : 0;

  return (
    <div className="mt-4">

      <div className="flex gap-3 items-center">
        <span className="text-2xl font-semibold">
          ₹{price}
        </span>

        {compareAtPrice > 0 && (
          <>
            <span className="line-through">
              ₹{compareAtPrice}
            </span>

            <span className="text-red-500">
              {discount}% OFF
            </span>
          </>
        )}
      </div>
    </div>
  );
}