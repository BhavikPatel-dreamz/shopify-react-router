import CollectionGrid from "~/components/collection/CollectionGrid";
import LandingImageSection from "~/components/LandingImageSection";
import LandingVideo from "~/components/LandingVideo";

import { createStorefrontClient } from "~/server/storefront.server";
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";

import type { Route } from "./+types/rare-rabbit-walk-6-0";

import { useLoaderData } from "react-router";

import {
  rareOnesWalk65Images,
  rareOnesWalk65Video,
} from "~/data/rareOnesWalk60";

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

export default function RareOnesWalk60Page() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <main className="rare-ones-walk-page">

      <LandingVideo
        desktopVideoSrc={rareOnesWalk65Video.desktopVideoSrc}
        desktopPoster={rareOnesWalk65Video.desktopPoster}
        mobileVideoSrc={rareOnesWalk65Video.mobileVideoSrc}
        mobilePoster={rareOnesWalk65Video.mobilePoster}
      />

      <LandingImageSection
        items={rareOnesWalk65Images}
        enablePageWidth={false}
        desktopPaddingTopBottom={10}
        desktopPaddingLeftRight={10}
        mobilePaddingTopBottom={10}
        mobilePaddingLeftRight={10}
        sectionId="final_landing_image_rAym3x"
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