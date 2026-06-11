import React, { useState } from "react";
import { useLoaderData } from "react-router";

import RareRabbitCroquetClubImages from "~/components/homePages/RareRabbitCroquetClubImages";
import CollectionGrid from "~/components/collection/CollectionGrid";
import CartDrawer from "~/components/Cart/CartDrawer";

import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";

import type { Route } from "./+types/rareism-summer-tale";

import { croquetClubItems } from "~/data/rareRabbitCroquetClub";

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

export default function RareRabbitCroquetClubPage() {
  const { products } = useLoaderData<typeof loader>();

  const [openCart, setOpenCart] = useState(false);

  return (
    <main className="rare-rabbit-croquet-club-page">
      <RareRabbitCroquetClubImages
        items={croquetClubItems}
        sectionId="template--18876279488583__final_landing_image_aTT9EK"
        paddingClass="section-template--18876279488583__final_landing_image_aTT9EK-padding"
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
        <CartDrawer onClose={() => setOpenCart(false)} />
      )}
    </main>
  );
}