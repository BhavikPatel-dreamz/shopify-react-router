// RareRabbitLinenPage.jsx
import React, { useRef, useEffect } from "react";
import "../../styles/RareRabbitLinenPage.css";
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";
import type { Route } from "./+types/thor-denim";
import CollectionGrid from "~/components/collection/CollectionGrid";
import { useLoaderData } from "react-router";

export async function loader({}: Route.LoaderArgs) {
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


export default function RareRabbitLinenPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Data array for the image sections
  const linenItems = [
    {
      id: 1,
      href: "/products/borium-26-mens-shirt-beige",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/DESKTOP_BANNER_-1.webp?v=1775207817&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOBILE_BANNER_-1.webp?v=1775207820&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Borium 26 Men's Shirt Beige"
    },
    {
      id: 2,
      href: "/products/borium-26-mens-shirt-beige",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/DESKTOP_BANNER_-3.webp?v=1775207827&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOBILE_BANNER_-3.webp?v=1775207833&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Borium 26 Men's Shirt Beige - View 2"
    },
    {
      id: 3,
      href: "/products/mekko-s26-mens-polo-dusky-mustard",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/DESKTOP_BANNER_-4.webp?v=1775207848&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOBILE_BANNER_-4.webp?v=1775207852&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Mekko S26 Men's Polo Dusky Mustard"
    },
    {
      id: 4,
      href: "/products/borium-26-mens-shirt-blue",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/BANNER_5_DESKTOP.webp?v=1775217994&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOBILE_BANNER_5.webp?v=1775217997&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Borium 26 Men's Shirt Blue"
    }
  ];

  // Video sources
  const desktopVideoSrc = "https://thehouseofrare.com/cdn/shop/videos/c/vp/bd1e67392daf448fb0dcd455015317eb/bd1e67392daf448fb0dcd455015317eb.HD-1080p-4.8Mbps-80192866.mp4?v=0";
  const desktopPoster = "https://thehouseofrare.com/cdn/shop/files/preview_images/bd1e67392daf448fb0dcd455015317eb.thumbnail.0000000000_1300x.jpg?v=1775207949";
  
  const mobileVideoSrc = "https://thehouseofrare.com/cdn/shop/videos/c/vp/2e9d4a053a4647ce9273db4641a7182f/2e9d4a053a4647ce9273db4641a7182f.HD-720p-4.5Mbps-80204134.mp4?v=0";
  const mobilePoster = "https://thehouseofrare.com/cdn/shop/files/preview_images/2e9d4a053a4647ce9273db4641a7182f.thumbnail.0000000000_500x.jpg?v=1775218050";

  // Autoplay video on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: Error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch((error: Error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  const { products } = useLoaderData<typeof loader>();

  return (
    <main className="rare-rabbit-linen-page">
      {/* Image Sections */}
      <div className="final-landing-image-section">
        <div className="final-landing-image-wrapper">
          {linenItems.map((item) => (
            <div key={item.id} className="single-image-wrapper">
              <a href={item.href}>
                {/* Desktop Image */}
                <div className="desktop-img">
                  <div className="image-wrapper">
                    <img
                      src={item.desktopImg}
                      width={item.desktopWidth}
                      height={item.desktopHeight}
                      loading="eager"
                      className="image-res"
                      sizes="100vw"
                      alt={item.alt}
                    />
                  </div>
                </div>
                {/* Mobile Image */}
                <div className="mobile-img">
                  <div className="image-wrapper">
                    <img
                      src={item.mobileImg}
                      width={item.mobileWidth}
                      height={item.mobileHeight}
                      loading="eager"
                      className="image-res"
                      sizes="100vw"
                      alt={item.alt}
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section - Normal HTML5 Player with Autoplay */}
      <div className="video-section">
        {/* Desktop Video */}
        <div className="desktop-video">
          <video
            ref={videoRef}
            src={desktopVideoSrc}
            poster={desktopPoster}
            autoPlay
            loop
            muted
            playsInline
            className="video-element"
          />
        </div>

        {/* Mobile Video */}
        <div className="mobile-video">
          <video
            ref={mobileVideoRef}
            src={mobileVideoSrc}
            poster={mobilePoster}
            autoPlay
            loop
            muted
            playsInline
            className="video-element"
          />
        </div>
      </div>

      <CollectionGrid products={products} />;

    </main>
  );
}