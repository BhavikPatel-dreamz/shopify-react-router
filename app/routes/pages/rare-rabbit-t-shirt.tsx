import { useRef, useEffect } from "react";
import "../../styles/RareRabbitTShirtPage.css";
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";
import type { Route } from "./+types/rare-rabbit-innerv";
import { useLoaderData } from "react-router";
import CollectionGrid from "~/components/collection/CollectionGrid";

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

export default function RareRabbitTShirtPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const { products } = useLoaderData<typeof loader>();

  // Data array for the image sections
  const tshirtItems = [
    {
      id: 1,
      href: "/products/apli-mens-t-shirt-flouroscent-navy",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-1_c9e3afcc-c4d8-4c4c-b8d2-2cc1cb9b1c02.webp?v=1777890649&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_5.webp?v=1777890658&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Apli Men's T-Shirt Flouroscent Navy"
    },
    {
      id: 2,
      href: "/products/rabbit-25-mens-t-shirt-teal",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-2_3c294f4b-a17e-475b-baaa-bbf78896084c.webp?v=1777890672&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_8.webp?v=1777890677&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Rabbit 25 Men's T-Shirt Teal"
    },
    {
      id: 3,
      href: "/products/spear-mens-t-shirt-dusky-beige",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-3_cc3d624c-4e5a-4634-9dc8-2b45d36ff6e6.webp?v=1777890690&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_7.webp?v=1777890697&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Spear Men's T-Shirt Dusky Beige"
    }
  ];

  // Video source
  const videoSrc = "https://thehouseofrare.com/cdn/shop/videos/c/vp/399bd8d36767413fbf903281ab9bae1c/399bd8d36767413fbf903281ab9bae1c.HD-1080p-7.2Mbps-83321973.mp4?v=0";
  const videoPoster = "https://thehouseofrare.com/cdn/shop/files/preview_images/399bd8d36767413fbf903281ab9bae1c.thumbnail.0000000000_1300x.jpg?v=1777892226";

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

  return (
    <main className="rare-rabbit-page">
      {/* Image Sections */}
      <div className="final-landing-image-section">
        <div className="final-landing-image-wrapper">
          {tshirtItems.map((item) => (
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

      {/* Video Section - No Controls, Hidden Player */}
      <div className="video-section">
        {/* Desktop Video */}
        <div className="desktop-video">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={videoPoster}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="video-element"
          />
        </div>

        {/* Mobile Video */}
        <div className="mobile-video">
          <video
            ref={mobileVideoRef}
            src={videoSrc}
            poster={videoPoster}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="video-element"
          />
        </div>
      </div>

       <CollectionGrid 
              products={products}
      
              enableFilterSortItems={false}
              enableProductCounts={false}
              enableGridView={false}
      
              gridViewNumber="2"
              mobileGridViewNumber="1" />;
    </main>
  );
}