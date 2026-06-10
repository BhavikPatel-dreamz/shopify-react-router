import { useState } from "react";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/products.$handle";
import ProductGallery from "~/components/product/ProductGallery";
import ProductInfo from "~/components/product/ProductInfo";
import CartDrawer from "~/components/Cart/CartDrawer";
import { PRODUCT_QUERY, RELATED_PRODUCTS_QUERY } from "~/graphQL/product";
import { createStorefrontClient } from "~/server/storefront.server";
import CollectionGrid from "~/components/collection/CollectionGrid";
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";

export async function loader({ params }: Route.LoaderArgs) {
  const storefront = createStorefrontClient();

  const data = await storefront.query<{
    product: any;
  }>(PRODUCT_QUERY, {
    variables: {
      handle: params.handle,
      country: "IN",
      language: "EN",
    },
  });
  
  if (!data.product) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  
  const recommendedData = await storefront.query<{
      products: {
        nodes: any[];
      };
    }>(COLLECTION_GRID_QUERY, {
      variables: {
        pageBy: 12,
        country: "IN",
        language: "EN",
      },
    });
    
  const product = data.product;

  const colorTags = product.tags.filter((tag: string) =>
  tag.startsWith("color-")
);

  if (colorTags.length === 0) {
    return { product, relatedProducts: [], recommendedProducts: recommendedData.products?.nodes ?? [] };
  }

  const queryString = colorTags.join(" OR ");

  // 2️⃣ RELATED PRODUCTS QUERY (🔥 ADD THIS)
  const relatedData = await storefront.query<{
    products: any;
  }>(RELATED_PRODUCTS_QUERY, {
    variables: {
      handle: params.handle,
      query: queryString,
      tags: product.tags, // IMPORTANT: pass current product tags
      country: "IN",
      language: "EN",
    },
  });

  const relatedProducts = relatedData.products?.nodes || [];

  return {
    product,
    relatedProducts,
    recommendedProducts: recommendedData.products?.nodes ?? [],
  };
}

export default function ProductPage() {
  const { product, relatedProducts, recommendedProducts } = useLoaderData<typeof loader>();
  const [openCart, setOpenCart] = useState(false);
  

  return (
    <div className="product-wrapper">
      <div className="breadcrumbs-wrapper xs-hide">
        <nav className="breadcrumb" role="navigation" aria-label="breadcrumbs">
          <a
            href="/"
            title="Translation missing: en.general.breadcrumbs.home_link_title"
            className="text-sm-12 text-xs-12"
          >
            Home
          </a>
          <span className="breadcrumb-divider" aria-hidden="true">
            {" "}
            / 
            {" "}
          </span>
          <a href="/pages/rare-rabbit">Rare Rabbit</a>
          <span className="breadcrumb-divider" aria-hidden="true">
            {" "}
             / 
            {" "}
          </span>
          <span className="product-title text-sm-12 text-xs-12 bold">
            Anto Dark Brown
          </span>
        </nav>
      </div>
      <div className="container product-info-wrapper">
      <div className="main-product-wrapper">
          <div className="product-image-section">
            <ProductGallery images={product.images.nodes} />
          </div>

          <div className="product-details-wrapper product-details-wrapper-js">
            <ProductInfo
              product={product}
              relatedProducts={relatedProducts}
              onOpenCart={() => setOpenCart(true)}
            />
           
          </div>
      </div>
      </div>
      
      <div className = "product-recommendation-unbox-wrapper-section">
      <div className="product-recommendation-title-wrapper">
        <h2 className="product-recommendation-title">
          
              Recommended          
          
        </h2>
      </div>
      </div>

      <CollectionGrid products={recommendedProducts} />

          {openCart && (
            <CartDrawer onClose={() => setOpenCart(false)} />
          )}

    </div>
  );
}
