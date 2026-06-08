import { useLoaderData } from "react-router";
import type { Route } from "./+types/products.$handle";
import ProductGallery from "~/components/product/ProductGallery";
import ProductInfo from "~/components/product/ProductInfo";
import { PRODUCT_QUERY } from "~/graphQL/product";
import { createStorefrontClient } from "~/server/storefront.server";

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

  return {
    product: data.product,
  };
}

export default function ProductPage() {
  const { product } = useLoaderData<typeof loader>();

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
          </span>
          <a href="/pages/rare-rabbit">Rare Rabbit</a>
          <span className="breadcrumb-divider" aria-hidden="true">
            {" "}
            /
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
            <ProductInfo product={product} />
          </div>
      </div>
      </div>
    </div>
  );
}
