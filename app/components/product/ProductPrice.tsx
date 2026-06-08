export default function ProductPrice({
  variants,
}: any) {
  const variant = variants?.[0];

  const price = Number(
    variant?.price?.amount || 0
  );

  const compareAtPrice = Number(
    variant?.compareAtPrice?.amount || 0
  );

  const discount =
    compareAtPrice > 0
      ? Math.round(
          ((compareAtPrice - price) /
            compareAtPrice) *
            100
        )
      : 0;

  const appPrice = Math.round(price * 0.9);

  return (
    <div className="product-items price-wrapper">
      <div className="product-price">
        {compareAtPrice > 0 && (
          <div className="compare-price-wrapper">
            <span className="mrp-text">
              MRP
            </span>

            <span
              className="compare-price"
              data-price-update="compare"
            >
              <span className="money">
                ₹
                {compareAtPrice.toLocaleString(
                  "en-IN"
                )}
              </span>
            </span>

            <span
              className="regular-price"
              data-price-update="price"
            >
              <span className="money">
                ₹
                {price.toLocaleString(
                  "en-IN"
                )}
              </span>
            </span>

            <span
              className="perc_price"
              data-price-update="discount"
            >
              {discount}%
            </span>
          </div>
        )}

        <div className="MRP-inclusive visible-desktop">
          <p>(Incl. of all taxes)</p>
        </div>

        <div className="black-friday-price-wrapper">
          <div className="best-price">
            <p className="best-price-text">
              <span>
                App Price ₹
                {appPrice.toLocaleString(
                  "en-IN"
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}