import React from "react";

import LandingVideo from "~/components/LandingVideo";
import LandingImageSection from "~/components/LandingImageSection";

import {
  rarezSauronImages,
  rarezSauronVideos,
} from "~/data/rarezSauron";

export default function RarezSauronPage() {
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
    </main>
  );
}