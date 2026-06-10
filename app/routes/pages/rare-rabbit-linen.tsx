import React from "react";
import { useLoaderData } from "react-router";

import LandingVideo from "~/components/LandingVideo";
import LandingImageSection from "~/components/LandingImageSection";
import CollectionGrid from "~/components/collection/CollectionGrid";

import "../../styles/RareRabbitLinenPage.css";

import { createStorefrontClient } from "~/server/storefront.server";
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";

import type { Route } from "../+types/home";

import {
  rareRabbitLinenImages,
  rareRabbitLinenVideo,
} from "~/data/rareRabbitLinen";

interface Props {
  onOpenCart?: () => void;
}

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

export default function RareRabbitLinenPage({
  onOpenCart,
}: Props) {
  const { products } = useLoaderData<typeof loader>();

  return (
    <main className="rare-rabbit-linen-page">
      <LandingImageSection
        items={rareRabbitLinenImages}
        enablePageWidth={false}
        desktopPaddingTopBottom={10}
        desktopPaddingLeftRight={10}
        mobilePaddingTopBottom={10}
        mobilePaddingLeftRight={10}
        sectionId="final_landing_image"
      />

      <LandingVideo
        desktopVideoSrc={rareRabbitLinenVideo.desktopVideoSrc}
        desktopPoster={rareRabbitLinenVideo.desktopPoster}
        mobileVideoSrc={rareRabbitLinenVideo.mobileVideoSrc}
        mobilePoster={rareRabbitLinenVideo.mobilePoster}
      />

      <CollectionGrid
        products={products}
        onOpenCart={onOpenCart}
        enableFilterSortItems={false}
        enableProductCounts={false}
        enableGridView={false}
        gridViewNumber="2"
        mobileGridViewNumber="1"
      />
    </main>
  );
}