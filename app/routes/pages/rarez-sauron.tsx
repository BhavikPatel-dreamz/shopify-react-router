import { useLoaderData } from "react-router";

import LandingVideo from "~/components/LandingVideo";
import LandingImageSection from "~/components/LandingImageSection";
import {
  rarezSauronImages,
  rarezSauronVideos,
} from "~/data/rarezSauron";
import CollectionGrid from "~/components/collection/CollectionGrid";
import { COLLECTION_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";
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

export default function RarezSauronPage() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <main className="rarez-sauron-page">
      {rarezSauronVideos.map((video, index) => (
        <LandingVideo
          key={`video-${index}`}
          desktopVideoSrc={video.desktopVideoSrc}
          desktopPoster={video.desktopPoster}
          mobileVideoSrc={video.mobileVideoSrc}
          mobilePoster={video.mobilePoster}
        />
      ))}

      <LandingImageSection
        items={rarezSauronImages}
        enablePageWidth={false}
        desktopPaddingTopBottom={10}
        desktopPaddingLeftRight={10}
        mobilePaddingTopBottom={10}
        mobilePaddingLeftRight={10}
        sectionId="final_landing_image_G6VHDJ"
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
}
