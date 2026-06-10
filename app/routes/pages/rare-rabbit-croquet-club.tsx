// RareRabbitCroquetClubPage.tsx
import React from "react";
import RareRabbitCroquetClubImages from "~/components/homePages/RareRabbitCroquetClubImages";
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";
import type { Route } from "./+types/rareism-summer-tale";
import { useLoaderData } from "react-router";
import CollectionGrid from "~/components/collection/CollectionGrid";

interface CroquetClubItem {
  id: number;
  href: string;
  desktopImg: string;
  mobileImg: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
  alt: string;
}

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

const RareRabbitCroquetClubPage: React.FC = () => {
  const { products } = useLoaderData<typeof loader>();
  // Data array for the image sections
  const croquetClubItems: CroquetClubItem[] = [
    {
      id: 1,
      href: "/products/arc-mens-polo-light-pink",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-1.webp?v=1777025401&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_1.webp?v=1777025406&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Arc Men's Polo Light Pink"
    },
    {
      id: 2,
      href: "/products/digi-mens-polo-pastel-peach",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-2.webp?v=1777025419&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_2.webp?v=1777025437&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Digi Men's Polo Pastel Peach"
    },
    {
      id: 3,
      href: "/products/plais-mens-polo-white",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-3.webp?v=1777025445&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_3.webp?v=1777025450&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Plais Men's Polo White"
    },
    {
      id: 4,
      href: "/products/arc-mens-polo-dusky-orange",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-4.webp?v=1777025458&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_4.webp?v=1777025466&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Arc Men's Polo Dusky Orange"
    }
  ];

  return (
    <main className="rare-rabbit-croquet-club-page">
      <RareRabbitCroquetClubImages 
        items={croquetClubItems}
        sectionId="template--18876279488583__final_landing_image_aTT9EK"
        paddingClass="section-template--18876279488583__final_landing_image_aTT9EK-padding"
      />

       <CollectionGrid 
          products={products}
  
          enableFilterSortItems={false}
          enableProductCounts={false}
          enableGridView={false}
  
          gridViewNumber="2"
          mobileGridViewNumber="1" />
    </main>
  );
};

export default RareRabbitCroquetClubPage;