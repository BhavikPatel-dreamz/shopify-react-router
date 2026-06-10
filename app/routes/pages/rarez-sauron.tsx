// app/routes/rarez-sauron.tsx
import React, { useRef, useEffect } from "react";
import RarezSauronImages from "~/components/homePages/RarezSauronImages";

interface SauronItem {
  id: number;
  href: string;
  desktopImg: string;
  mobileImg: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
  alt: string;
}

const RarezSauronPage: React.FC = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const mobileVideo1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const mobileVideo2Ref = useRef<HTMLVideoElement>(null);

  // Data array for the image sections
  const sauronItems: SauronItem[] = [
    {
      id: 1,
      href: "#",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RAREZ_NEW_LAUNCH-1.webp?v=1772706959&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_-_RAREZ_NEW_LAUNCH.webp?v=1772706964&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Rarez Sauron - New Launch 1"
    },
    {
      id: 2,
      href: "/collections/rarez-sauron",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RAREZ_NEW_LAUNCH.webp?v=1772707146&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_-_RAREZ_NEW_LAUNCH-1.webp?v=1772707152&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Rarez Sauron Collection"
    },
    {
      id: 3,
      href: "/collections/rarez-sauron",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RAREZ_NEW_LAUNCH-2.webp?v=1772707168&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_-_RAREZ_NEW_LAUNCH-2.webp?v=1772707173&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Rarez Sauron Collection - View 2"
    }
  ];

  // Video sources
  const video1Src = "https://thehouseofrare.com/cdn/shop/videos/c/vp/9d9880b18a4a4f0c8f013ba6026fadbd/9d9880b18a4a4f0c8f013ba6026fadbd.HD-1080p-2.5Mbps-77204273.mp4?v=0";
  const video1Poster = "https://thehouseofrare.com/cdn/shop/files/preview_images/9d9880b18a4a4f0c8f013ba6026fadbd.thumbnail.0000000000_1300x.jpg?v=1772706933";
  const mobileVideo1Src = "https://thehouseofrare.com/cdn/shop/videos/c/vp/52308db99a974add9f6fdbd141e6a059/52308db99a974add9f6fdbd141e6a059.HD-720p-1.6Mbps-77204367.mp4?v=0";
  const mobileVideo1Poster = "https://thehouseofrare.com/cdn/shop/files/preview_images/52308db99a974add9f6fdbd141e6a059.thumbnail.0000000000_500x.jpg?v=1772706996";

  const video2Src = "https://thehouseofrare.com/cdn/shop/videos/c/vp/7f6c90ba0c534f8d9b819f923e8c2e7b/7f6c90ba0c534f8d9b819f923e8c2e7b.HD-1080p-7.2Mbps-77204439.mp4?v=0";
  const video2Poster = "https://thehouseofrare.com/cdn/shop/files/preview_images/7f6c90ba0c534f8d9b819f923e8c2e7b.thumbnail.0000000000_1300x.jpg?v=1772707061";
  const mobileVideo2Src = "https://thehouseofrare.com/cdn/shop/videos/c/vp/10f10def72f146f9b843f970eebf5222/10f10def72f146f9b843f970eebf5222.HD-720p-3.0Mbps-77204476.mp4?v=0";
  const mobileVideo2Poster = "https://thehouseofrare.com/cdn/shop/files/preview_images/10f10def72f146f9b843f970eebf5222.thumbnail.0000000000_500x.jpg?v=1772707109";

  // Autoplay videos on mount
  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.play().catch((error: Error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
    if (mobileVideo1Ref.current) {
      mobileVideo1Ref.current.play().catch((error: Error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
    if (video2Ref.current) {
      video2Ref.current.play().catch((error: Error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
    if (mobileVideo2Ref.current) {
      mobileVideo2Ref.current.play().catch((error: Error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <main className="rarez-sauron-page">
      {/* Video Section 1 */}
      <div className="video-section">
        <div className="desktop-video">
          <video
            ref={video1Ref}
            src={video1Src}
            poster={video1Poster}
            autoPlay
            loop
            muted
            playsInline
            className="video-element"
          />
        </div>
        <div className="mobile-video">
          <video
            ref={mobileVideo1Ref}
            src={mobileVideo1Src}
            poster={mobileVideo1Poster}
            autoPlay
            loop
            muted
            playsInline
            className="video-element"
          />
        </div>
      </div>

      {/* Video Section 2 */}
      <div className="video-section">
        <div className="desktop-video">
          <video
            ref={video2Ref}
            src={video2Src}
            poster={video2Poster}
            autoPlay
            loop
            muted
            playsInline
            className="video-element"
          />
        </div>
        <div className="mobile-video">
          <video
            ref={mobileVideo2Ref}
            src={mobileVideo2Src}
            poster={mobileVideo2Poster}
            autoPlay
            loop
            muted
            playsInline
            className="video-element"
          />
        </div>
      </div>

      {/* Images Section */}
      <RarezSauronImages 
        items={sauronItems}
        sectionId="template--18337744846919__final_landing_image_G6VHDJ"
        paddingClass="section-template--18337744846919__final_landing_image_G6VHDJ-padding"
      />
    </main>
  );
};

export default RarezSauronPage;