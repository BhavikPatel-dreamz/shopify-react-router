import React from "react";

import LandingVideo from "~/components/LandingVideo";
import LandingImageSection from "~/components/LandingImageSection";

import {
  rarezSauronImages,
  rarezSauronVideos,
} from "~/data/rarezSauron";
import CollectionGrid from "~/components/collection/CollectionGrid";

export default function RarezSauronPage() {
  // Provide a fallback products array to avoid undefined variable error.
  const products: any[] = [];
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