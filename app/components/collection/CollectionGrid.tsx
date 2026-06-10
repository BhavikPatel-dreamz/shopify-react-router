import { useState } from "react";
import ProductCard from "./ProductCard";
import CartDrawer from "../Cart/CartDrawer";

interface Props {
  products: any[];
  isLoadingMore?: boolean;
  onOpenCart?: () => void;
  enableCollectionCollapse?: boolean;
  enableFilterSortItems?: boolean;
  enableProductCounts?: boolean;
  enableGridView?: boolean;

  gridViewNumber?: "2" | "4";
  mobileGridViewNumber?: "1" | "2";
}

export default function CollectionGrid({
  products,
  isLoadingMore = false,
  onOpenCart,
  enableCollectionCollapse = false,
  enableFilterSortItems = true,
  enableProductCounts = true,
  enableGridView = true,

  gridViewNumber = "4",
  mobileGridViewNumber = "2",
  
}: Props) {
  const [openCart, setOpenCart] = useState(false);
  const openCartDrawer = () => {
    setOpenCart(true);
  };

  const wrapperClasses = [
    "section-custom-collection",

    enableCollectionCollapse &&
    "collection-collapse-active",

    !enableFilterSortItems &&
    "hide-filter-sort-items",

    !enableProductCounts &&
    "hide-product-counts",

    !enableGridView &&
    "hide-grid-view",

    !enableGridView &&
    (gridViewNumber === "2"
      ? "grid-view-2"
      : "grid-view-4"),

    !enableGridView &&
    (mobileGridViewNumber === "1"
      ? "mobile-grid-view-1"
      : "mobile-grid-view-2"),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      <section
        className="collection section main-collection-js"
        data-section-type="collection"
        data-item-layout="grid"
        data-enable-sticky-container="true"
      >
        <div className="collection--inner">

          {/* Top loader */}
          <div className="filter-loader-wrap load-more-loader">
            {isLoadingMore && (
              <div className="filter-loader-inner">
                <div className="filter-loader">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div className="collection-wrapper">

            {/* Filters component goes here */}
            {/* <CollectionFilters /> */}

            <div className="collection--content">

              <div
                className="collection--products collection--infinite-container standard-grid-spacing product-item-holder"
                data-collection-grid="4"
              >

                {/* Initial Loader */}
                {products.length === 0 && (
                  <div className="loader-icon active">
                    <div className="filter-loader-inner">
                      <div className="filter-loader">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Products */}
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenCart={() => setOpenCart(true)}
                  />
                ))}

              </div>

              {/* Load More Area */}
              <div className="load-more-btn">
                {isLoadingMore && (
                  <div className="filter-loader-inner">
                    <div className="filter-loader">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>
       {openCart && (
              <CartDrawer onClose={() => setOpenCart(false)} />
            )}
    </div>
  );
}