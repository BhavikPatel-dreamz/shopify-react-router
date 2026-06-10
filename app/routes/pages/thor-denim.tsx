// ThorDenimPage.jsx
import React, { useState } from "react";
import "../../styles/ThorDenimPage.css";
import CollectionGrid from "~/components/collection/CollectionGrid";
import { useLoaderData } from "react-router";
import CartDrawer from "~/components/Cart/CartDrawer";
import { COLLECTION_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";
import CollectionToolbar from "~/components/collection/CollectionToolbar";


export async function loader() {
  const storefront = createStorefrontClient();

  const data = await storefront.query<{
    collection?: {
      products?: {
        nodes: any[];
        pageInfo?: {
          hasNextPage?: boolean;
          endCursor?: string | null;
        };
        total?: number;
      };
    };
  }>(COLLECTION_QUERY, {
    variables: {
      handle: "rare-thor-all",
      pageBy: 12,
      country: "IN",
      language: "EN",
    },
  });

  return {
    collectionProducts: data.collection?.products?.nodes ?? [],
    pageInfo: data.collection?.products?.pageInfo ?? null,
    productCount: data.collection?.products?.nodes?.length ?? 12,
  };
}

export default function ThorDenimPage() {
  const [activeTab, setActiveTab] = useState("default");
  const { collectionProducts, pageInfo, productCount } = useLoaderData<typeof loader>();

  const [openCart, setOpenCart] = useState(false);

const openCartDrawer = () => {
  setOpenCart(true);
};

  return (
    <main className="thor-denim-page">
      {/* Tabs Section */}
      <div className="lookbook-collection-tabs">
        <span 
          className={`lookbook-tab ${activeTab === "default" ? "active" : ""}`} 
          onClick={() => setActiveTab("default")}
        >
          LOOKBOOK
        </span>
        <span 
          className={`lookbook-tab ${activeTab === "collection" ? "active" : ""}`} 
          onClick={() => setActiveTab("collection")}
        >
          COLLECTION
        </span>
      </div>

      {/* COLLECTION Section - Completely Empty */}
      {/* {activeTab === "collection" && (
        <section className="collection-section-empty">
          <div className="collection-empty-wrapper">
          </div>
        </section>
      )} */}

      {activeTab === "collection" && (
        <>
       <CollectionToolbar count={productCount} 
          /> 

      <CollectionGrid
        products={collectionProducts}
        onOpenCart={openCartDrawer}
      />
      </>
    )}

    {openCart && (
      <CartDrawer onClose={() => setOpenCart(false)} />
    )}



      {/* LOOKBOOK Content - Image Grid Sections */}
      {activeTab === "default" && (
        <>
          {/* Desktop Image Grid */}
          <div className="desktop-blocks-section hide-mobile">
            <div className="three-images-block">
              <a href="/pages/rare-rabbit-denim" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/RR_-_WEB.webp?v=1778750130" alt="Rare Rabbit Denim" />
              </a>
              <a href="/pages/rare-ones-denim" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/RO_-_WEB.webp?v=1778750139" alt="Rare Ones Denim" />
              </a>
              <a href="/pages/rareism-denim" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/RSM_-_WEB.webp?v=1778750134" alt="Rareism Denim" />
              </a>
            </div>

            <div className="single-image-block">
              <a href="/products/rilo-m-mens-jeans-dark-blue" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226762.webp?v=1778672786" alt="Featured Product" />
              </a>
            </div>

            <div className="three-images-block">
              <a href="/products/rilo-m-mens-jeans-dark-blue" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226766.webp?v=1778739550" alt="Product 1" />
              </a>
              <a href="#" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226763_802dbc2e-5ccb-4bc9-a627-96e09ef1bc1b.webp?v=1778739555" alt="Product 2" />
              </a>
              <a href="/products/rare-ones-shorts-sifo-black" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226767.webp?v=1778739562" alt="Product 3" />
              </a>
            </div>

            <div className="single-image-block">
              <a href="/products/strefin-womens-jeans-light-blue" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226765_08cf687a-06dd-4574-9285-8abcd294d7f2.webp?v=1778739582" alt="Women's Collection" />
              </a>
            </div>
          </div>

          {/* Mobile Image Grid */}
          <div className="blocks-section hide-desktop">
            <div className="two-images-block">
              <a href="/pages/rareism-denim" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/RSM-_MOBILE.webp?v=1778750164" alt="Rareism Denim" />
              </a>
              <a href="/pages/rare-rabbit-denim" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/RR-_MOBILE.webp?v=1778750168" alt="Rare Rabbit Denim" />
              </a>
            </div>

            <div className="two-images-block">
              <a href="/pages/rare-ones-denim" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/RO_MOBILE.webp?v=1778750177" alt="Rare Ones Denim" />
              </a>
              <a href="#" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226769_dde6ff55-d55b-40de-92a2-ab18338a3b45.webp?v=1778740691" alt="Mobile Product" />
              </a>
            </div>

            <div className="full-image-block">
              <a href="#" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226771_7db06dc9-aece-46b7-a957-b3790d0eefb8.webp?v=1778740710" alt="Full Width Banner" />
              </a>
            </div>

            <div className="full-image-block">
              <a href="#" className="image-wrapper">
                <img src="https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226774_605c0eb6-201a-4456-a8dd-328ce6ac3772.webp?v=1778740720" alt="Bottom Banner" />
              </a>
            </div>
          </div>
        </>
      )}


    </main>
  );
}
