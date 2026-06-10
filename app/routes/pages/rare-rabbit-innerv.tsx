// RareRabbitInnervPage.jsx
import React from "react";
import "../../styles/RareRabbitInnervPage.css";
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";
import type { Route } from "./+types/rare-rabbit-linen";
import { useLoaderData } from "react-router";
import CollectionGrid from "~/components/collection/CollectionGrid";

export async function loader({}: Route.LoaderArgs) {
  const storefront = createStorefrontClient();

  const data = await storefront.query<{
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

  return {
    products: data.products?.nodes ?? [],
  };
}

export default function RareRabbitInnervPage() {
  // Data array for the image sections
  const innervItems = [
    {
      id: 1,
      href: "/products/lovi-mens-innerwear-off-white",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_INNERV-2.webp?v=1775811937&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RR-_INNERV.webp?v=1775811940&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Lovi Men's Innerwear Off White"
    },
    {
      id: 2,
      href: "/products/lovi-mens-innerwear-petrol",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_INNERV.webp?v=1775812075&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RR-_INNERV-1.webp?v=1775812099&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Lovi Men's Innerwear Petrol"
    },
    {
      id: 3,
      href: "/products/close-mens-innerwear-navy",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_INNERV-3.webp?v=1775812062&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RR-_INNERV-2.webp?v=1775812066&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Close Men's Innerwear Navy"
    },
    {
      id: 4,
      href: "/products/lovi-mens-innerwear-petrol",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_INNERV-4.webp?v=1775812112&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RR-_INNERV-3.webp?v=1775812115&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Lovi Men's Innerwear Petrol - View 2"
    },
    {
      id: 5,
      href: "/products/lovi-mens-innerwear-off-white",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_INNERV-1.webp?v=1775812131&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RR-_INNERV-4.webp?v=1775812134&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Lovi Men's Innerwear Off White - View 2"
    }
  ];

  const { products } = useLoaderData<typeof loader>();

  function onOpenCart(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="rare-rabbit-innerv-page">
      <div className="final-landing-image-section">
        <div className="final-landing-image-wrapper">
          {innervItems.map((item) => (
            <div key={item.id} className="single-image-wrapper">
              <a href={item.href}>
                {/* Desktop Image */}
                <div className="desktop-img">
                  <div className="image-wrapper">
                    <img
                      src={item.desktopImg}
                      width={item.desktopWidth}
                      height={item.desktopHeight}
                      loading="eager"
                      className="image-res"
                      sizes="100vw"
                      alt={item.alt}
                    />
                  </div>
                </div>
                {/* Mobile Image */}
                <div className="mobile-img">
                  <div className="image-wrapper">
                    <img
                      src={item.mobileImg}
                      width={item.mobileWidth}
                      height={item.mobileHeight}
                      loading="eager"
                      className="image-res"
                      sizes="100vw"
                      alt={item.alt}
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <CollectionGrid products={products} onOpenCart={onOpenCart} />;
    </main>
  );
}