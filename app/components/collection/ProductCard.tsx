import { useEffect, useState } from "react";
import { Link } from "react-router";
import SizeModal from "./SizeModal";

interface Props {
  product: any;
  onOpenCart?: () => void;
}

export default function ProductCard({ product, onOpenCart }: Props) {
  const price = Number(product.priceRange?.minVariantPrice?.amount);

  const compareAtPrice =
    Number(product.compareAtPriceRange?.minVariantPrice?.amount) || 0;

  const discount =
    compareAtPrice > 0
      ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
      : 0;

  const metafieldsMap =
    product.metafields?.reduce((acc: any, field: any) => {
      if (field?.key) {
        acc[field.key] = field.value;
      }
      return acc;
    }, {}) || {};

  const [openSize, setOpenSize] = useState(false);
  
  useEffect(() => {
    const mobileBottomBar = document.querySelector(".mobile-bottom-bar");

    if (!mobileBottomBar) return;

    if (openSize) {
      mobileBottomBar.classList.add("hide");
    } else {
      mobileBottomBar.classList.remove("hide");
    }

    return () => {
      mobileBottomBar.classList.remove("hide");
    };
  }, [openSize]);

  return (
    <div className="collection-product-main">
      <div className="product-main-inner">
        {/* Wishlist placeholder (like Shopify UI) */}
        <div className="wishlist-inner">
          <div
            className="wishlist-button smartwishlist-desktop-icon smartwishlist unbookmarked"
            data-product="7343948595271"
            data-variant="42200858722375"
            title="Add to &lt;a href='/a/wishlist'&gt;Wishlist&lt;/a&gt;"
            aria-label="Add to Wishlist"
            role="button"
            tabIndex={0}
          >
            <span className="fa fa-heart-o"></span>
          </div>
        </div>

        {/* IMAGE WRAPPER (Swiper ready) */}
        <div className="product-image-wrap relative group">
          <Link to={`/products/${product.handle}`}>
            <img
              src={product.featuredImage?.url}
              alt={product.featuredImage?.altText || ""}
              className="w-full object-cover"
            />
          </Link>

          {/* SIZE MODAL */}
          {openSize && (
            <div className="product-size-swatch-wrapper">
              <SizeModal
                product={product}
                onClose={() => setOpenSize(false)}
                openCart={onOpenCart}
              />
            </div>
          )}
        </div>



        {/* PRODUCT INFO */}
        <div className="product-detail">
          <div className="product-title-price">
            {/* TITLE */}
            <div className="product-title-wishlist">
              <Link
                to={`/products/${product.handle}`}
                className="product-link "
              >
                <h3 className="main-title">
                  {metafieldsMap.main_title || product.title}
                </h3>

                <h4 className="sub-title">{metafieldsMap.sub_title}</h4>
              </Link>

              <div className="wishlist-wrapper">
                <div className="quick-add">
                  <button
                    className="quick-add-button quick-add-button-js"
                    onClick={() => setOpenSize(true)}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.08691 0.375V5.91309H11.625V6.08691H6.08691V11.625H5.91309V6.08691H0.375V5.91309H5.91309V0.375H6.08691Z"
                        fill="#000000"
                        stroke="#000000"
                        strokeWidth="0.75"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* PRICE WRAPPER */}
            {/* <div className="main-price-wrapper">
          <div className = "price-wrapper"></div>

          <span className="regular-price font-semibold">
            ₹{price}
          </span>

          {compareAtPrice > 0 && (
            <>
              <span className="line-through opacity-60">
                ₹{compareAtPrice}
              </span>

              <span className="text-red-500 text-sm">
                {discount}% OFF
              </span>
            </>
          )}
        </div> */}

            <div className="main-price-wrapper">
              <div className="price-wrapper" data-id="product-price">
                <div className="product-price">
                  {compareAtPrice > 0 ? (
                    <div className="compare-price-wrapper">
                      <span className="compare-price">
                        <span className="money">
                          ₹{compareAtPrice.toLocaleString("en-IN")}
                        </span>
                      </span>

                      <span className="regular-price">
                        <span className="money">
                          ₹{price.toLocaleString("en-IN")}
                        </span>
                      </span>

                      <span className="perc_price">{discount}%</span>
                    </div>
                  ) : (
                    /* fallback when no discount */
                    <span className="regular-price">
                      <span className="money">
                        ₹{price.toLocaleString("en-IN")}
                      </span>
                    </span>
                  )}
                </div>
              </div>

              {/* <div className="best-price hide" />

              <div className="black-friday-price-wrapper hide">
                <div className="best-price">
                  <p className="best-price-text">
                    <span>
                      App Price ₹
                      {Math.round(price * 0.9).toLocaleString("en-IN")}
                    </span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

      </div>



    </div>
  );
}
