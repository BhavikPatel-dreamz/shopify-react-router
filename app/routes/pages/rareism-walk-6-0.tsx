import React from "react";
import { useLoaderData } from "react-router";

import CollectionGrid from "~/components/collection/CollectionGrid";
import RareRabbitWalk from "~/components/homePages/rareRabbitWalk";

import { createStorefrontClient } from "~/server/storefront.server";
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";

import type { Route } from "./+types/rare-rabbit-walk-6-0";

import { rareismWalk60Items } from "~/data/rareismWalk60";

export async function loader({ }: Route.LoaderArgs) {
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

export default function RareismWalk60Page() {
  const { products } = useLoaderData<typeof loader>();

  const handleOpenCart = () => {
    // Add cart drawer logic here later
  };

  return (
    <main className="rareism-walk-60-page">
      <RareRabbitWalk items={rareismWalk60Items} />

      <CollectionGrid
        products={products}
        onOpenCart={handleOpenCart}
        enableFilterSortItems={false}
        enableProductCounts={false}
        enableGridView={false}
        gridViewNumber="2"
        mobileGridViewNumber="1"
      />
    </main>
  );
}