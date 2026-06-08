import { Link } from "react-router";

interface Props {
  product: any;
}

export default function ProductCard({
  product,
}: Props) {
  const price = Number(
    product.priceRange
      .minVariantPrice.amount
  );

  const compareAtPrice =
    Number(
      product.compareAtPriceRange
        ?.minVariantPrice?.amount
    ) || 0;

  const discount =
    compareAtPrice > 0
      ? Math.round(
          ((compareAtPrice -
            price) /
            compareAtPrice) *
            100
        )
      : 0;

       const metafieldsMap =
    product.metafields?.reduce((acc: any, field: any) => {
      if (field) {
        acc[field.key] = field.value;
      }
      return acc;
    }, {}) || {};

  return (
    <Link
      to={`/products/${product.handle}`}
    >
      <img
        src={
          product.featuredImage?.url
        }
        alt={
          product.featuredImage
            ?.altText || ""
        }
      />

      <a className="product-link " href={(`/products/${product.handle}`)}>
      <h3 className="main-title">{metafieldsMap.main_title}</h3>
      <h4 className="sub-title">{metafieldsMap.sub_title}</h4>
    </a>

      <div className="flex gap-2">
        <span>₹{price}</span>

        {compareAtPrice > 0 && (
          <>
            <span className="line-through">
              ₹{compareAtPrice}
            </span>

            <span>
              {discount}% OFF
            </span>
          </>
        )}
      </div>
    </Link>
  );
}