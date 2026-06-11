import React from "react";
import { useLoaderData } from "react-router";

import type { Route } from "./+types/rarez-sauron";

import RareismSummerTaleImages from "../../components/homePages/RareismSummerTaleImages";
import CollectionGrid from "~/components/collection/CollectionGrid";

import { createStorefrontClient } from "~/server/storefront.server";
import { COLLECTION_QUERY } from "~/graphQL/collection";

import {
  rareismSummerTaleItems,
  rareismSummerTaleSectionData,
} from "~/data/rareismSummerTale";

export async function loader({ }: Route.LoaderArgs) {
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

export default function RareismSummerTalePage() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <main className="rareism-summer-tale-page">
      <RareismSummerTaleImages
        items={rareismSummerTaleItems}
        sectionId={rareismSummerTaleSectionData.sectionId}
        paddingClass={
          rareismSummerTaleSectionData.paddingClass
        }
      />

      <CollectionGrid
        products={products}
        enableFilterSortItems={false}
        enableProductCounts={false}
        enableGridView={false}
        gridViewNumber="2"
        mobileGridViewNumber="1"
      />
    </main>
  );
}