import React, { useState } from "react";

import "../../styles/custom-styles.css";
import "../../styles/rare-ones-summer-vacation-page.css";

import LookbookTabs from "~/components/summerVacation/LookbookTabs";
import SummerVacationLookbook from "~/components/summerVacation/SummerVacationLookbook";

import {
  rareOnesSummerVacationBlocks,
} from "~/data/rareOnesSummerVacation";
import CollectionToolbar from "~/components/collection/CollectionToolbar";
import CollectionGrid from "~/components/collection/CollectionGrid";
import CartDrawer from "~/components/Cart/CartDrawer";
import { useLoaderData } from "react-router";
import { createStorefrontClient } from "~/server/storefront.server";
import { COLLECTION_QUERY } from "~/graphQL/collection";

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
      handle: "rare-ones-velentines-day",
      pageBy: 20,
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

export default function RareOnesSummerVacationPage() {
  const [activeTab, setActiveTab] = useState<
    "default" | "collection"
  >("default");

   const { collectionProducts, pageInfo, productCount } = useLoaderData<typeof loader>();
  const [openCart, setOpenCart] = useState(false);

  const openCartDrawer = () => {
  setOpenCart(true);
  };

  return (
    <main className="rare-ones-summer-vacation-page">

      {/* Tabs */}
      <LookbookTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Collection Tab */}
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
     

      {/* Lookbook Tab */}
      {activeTab === "default" && (
        <SummerVacationLookbook
          blocks={rareOnesSummerVacationBlocks}
        />
      )}

    </main>
  );
}