// RareismBoboPage.tsx
import React from "react";
import RareismBoboImages from "~/components/homePages/RareismBoboImages";
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";
import type { Route } from "../+types/home";
import CollectionGrid from "~/components/collection/CollectionGrid";
import { useLoaderData } from "react-router";


interface BoboItem {
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

const RareismBoboPage: React.FC = () => {
  const { products } = useLoaderData<typeof loader>();
  // Data array for the image sections
  const boboItems: BoboItem[] = [
    {
      id: 1,
      href: "#",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-BOBO1_a08c4b60-ca6f-4f87-9051-c0a09d5c2735.webp?v=1761929575&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_-_bobo1_1df55b74-dd0d-43ca-be73-600cec0a9ed4.webp?v=1761929606&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Bobo Collection - Look 1"
    },
    {
      id: 2,
      href: "/products/bemti-womens-dress-black",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-BOBO2_f883b553-8e00-4f7c-9ba4-1c044dbb4cfb.webp?v=1760081908&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_-_bobo2_af2cf680-0cf3-4012-b2d9-f77c8770a905.webp?v=1760081912&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Bemti Women's Dress Black"
    },
    {
      id: 3,
      href: "/products/biva-womens-waistcoat-black",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-BOBO3_6f324827-ba72-4ae6-ba81-4756263aa1a1.webp?v=1760081928&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_-_bobo3_7f37b04e-713f-4bf4-bad4-cd498b233d9e.webp?v=1760081924&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Biva Women's Waistcoat Black"
    },
    {
      id: 4,
      href: "/products/bozo-womens-dress-black",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-BOBO4_1dc3f03c-b7a0-4d7a-ae45-a8887b0f3d84.webp?v=1760081942&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_-_bobo4_66dba47a-103b-4443-984b-da4a06c74219.webp?v=1760081946&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Bozo Women's Dress Black"
    },
    {
      id: 5,
      href: "#",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-BOBO5_6c43611b-d5cf-4e1b-ba49-6a281058d651.webp?v=1760081970&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_-_bobo5_cf650b6c-c657-4893-b70e-ecd7bdc8506f.webp?v=1760081982&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Bobo Collection - Look 5"
    },
    {
      id: 6,
      href: "/products/bezlin-womens-dress-dark-purple",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-BOBO6_cf561de5-8e00-4eb6-a9ab-1d8ab53cd363.webp?v=1760082000&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_-_bobo6_c7f9967c-af97-4565-81af-24bfdb0ebff3.webp?v=1760082003&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Bezlin Women's Dress Dark Purple"
    },
    {
      id: 7,
      href: "#",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-BOBO7_129e3766-7ff7-4eed-a27e-c2affbb3dd86.webp?v=1760082029&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_-_bobo7_698a2745-099b-49cc-aeb9-daa63206b25a.webp?v=1760082023&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Bobo Collection - Look 7"
    }
  ];

  return (
    <main className="rareism-bobo-page">
      <RareismBoboImages 
        items={boboItems}
        sectionId="template--16962880405575__final_landing_image_Nc9tCp"
        paddingClass="section-template--16962880405575__final_landing_image_Nc9tCp-padding"
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

export default RareismBoboPage;