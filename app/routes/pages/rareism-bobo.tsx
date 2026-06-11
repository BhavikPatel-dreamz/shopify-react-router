// app/routes/rareism-bobo.tsx

import React, { useState } from "react";
import { useLoaderData } from "react-router";

import RareismBoboImages from "~/components/homePages/RareismBoboImages";
import CollectionGrid from "~/components/collection/CollectionGrid";
import CartDrawer from "~/components/Cart/CartDrawer";

import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";

import type { Route } from "../+types/home";

import { boboItems } from "~/data/rareismBobo";

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

export default function RareismBoboPage() {
  const { products } = useLoaderData<typeof loader>();

  const [openCart, setOpenCart] = useState(false);

  return (
    <main className="rareism-bobo-page">
      <RareismBoboImages
        items={boboItems}
        sectionId="template--16962880405575__final_landing_image_Nc9tCp"
        paddingClass="section-template--16962880405575__final_landing_image_Nc9tCp-padding"
      />

      <CollectionGrid
        products={products}
        onOpenCart={() => setOpenCart(true)}
        enableFilterSortItems={false}
        enableProductCounts={false}
        enableGridView={false}
        gridViewNumber="2"
        mobileGridViewNumber="1"
      />

      {openCart && (
        <CartDrawer
          onClose={() => setOpenCart(false)}
        />
      )}
    </main>
  );
}