
import React, { useState } from "react";
import RareismSummerTaleImages from "../../components/homePages/RareismSummerTaleImages";
import CollectionToolbar from "~/components/collection/CollectionToolbar";
import CollectionGrid from "~/components/collection/CollectionGrid";
import CartDrawer from "~/components/Cart/CartDrawer";
import { useLoaderData } from "react-router";
import { createStorefrontClient } from "~/server/storefront.server";
import { COLLECTION_QUERY } from "~/graphQL/collection";
import type { Route } from "./+types/rarez-sauron";


export async function loader({}: Route.LoaderArgs) {
  const storefront = createStorefrontClient();

  const data = await storefront.query<{
    collection?: {
      products?: {
        nodes: any[];
      };
    };
  }>(COLLECTION_QUERY, {
    variables: {
      handle: "rarez-sauron",
      pageBy: 12,
      country: "IN",
      language: "EN",
    },
  });

  return {
    products: data.collection?.products?.nodes ?? [],
  };
}

interface SummerTaleItem {
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

const RareismSummerTalePage: React.FC = () => {
  // Data array for the image sections
  const summerTaleItems: SummerTaleItem[] = [
    {
      id: 1,
      href: "/products/hrix-womens-dress-light-green",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RSM-SUMMER_TALE-1.webp?v=1776320727&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RSM-SUMMER_TALE-1.webp?v=1776320752&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Hrix Women's Dress Light Green"
    },
    {
      id: 2,
      href: "/products/horo-womens-dress-light-green",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RSM-SUMMER_TALE-2.webp?v=1776320785&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RSM-SUMMER_TALE-2.webp?v=1776320791&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Horo Women's Dress Light Green"
    },
    {
      id: 3,
      href: "/products/mavi-womens-dress-multi",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RSM-SUMMER_TALE-3.webp?v=1776320815&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RSM-SUMMER_TALE-3.webp?v=1776320817&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Mavi Women's Dress Multi"
    },
    {
      id: 4,
      href: "/products/mopa-womens-dress-pink",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RSM-SUMMER_TALE-4_df9207fd-c613-4af5-ad29-daad94ca82ef.webp?v=1776320834&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RSM-SUMMER_TALE-4.webp?v=1776320829&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Mopa Women's Dress Pink"
    },
    {
      id: 5,
      href: "/products/hirof-womens-dress-multi",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RSM-SUMMER_TALE-5.webp?v=1776320843&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RSM-SUMMER_TALE-5.webp?v=1776320849&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Hirof Women's Dress Multi"
    }
  ];

  const { collectionProducts, pageInfo, productCount } = useLoaderData<typeof loader>();
    const [openCart, setOpenCart] = useState(false);
  
    const openCartDrawer = () => {
      setOpenCart(true);
    };
  
    const { products } = useLoaderData<typeof loader>();

  return (
    <main className="rareism-summer-tale-page">
      <RareismSummerTaleImages 
        items={summerTaleItems}
        sectionId="template--18810881441863__final_landing_image_K3aNPL"
        paddingClass="section-template--18810881441863__final_landing_image_K3aNPL-padding"
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

export default RareismSummerTalePage;