import CollectionGrid from "~/components/collection/CollectionGrid";
import RareRabbitWalk, { type MediaItem } from "~/components/homePages/rareRabbitWalk";

export const homepageBlocks: { type: "mediaGrid"; items: MediaItem[] }[] = [
  {
    type: "mediaGrid",
    items: [
       {
        href: "/collections/walk-6",
        type: "video",
        mediaId: "_9VUPq3SxOc",
        autoplay: true,

        desktop: {
          src: "https://thehouseofrare.com/cdn/shop/videos/c/vp/0da72bc...1080p.mp4",
          poster:
            "https://thehouseofrare.com/cdn/shop/files/preview_images/desktop_poster.jpg",
        },

        mobile: {
          src: "https://thehouseofrare.com/cdn/shop/videos/c/vp/bca6415...720p.mp4",
          poster:
            "https://thehouseofrare.com/cdn/shop/files/preview_images/mobile_poster.jpg",
        },
      }, 
      {
        type:"image",
        href: "/products/phex-mens-shirt-black",
        desktopImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR_main.webp?v=1773050893",
        mobileImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_RR-_WALK_6.0.webp?v=1772789453",
      },
      {  type:"image",
        href: "/products/bran-mens-jacket-brown",
        desktopImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-1_031a17ba.webp?v=1773050901",
        mobileImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_RR-_WALK_6.0-1.webp?v=1772789560",
      },
      { type:"image",
        href: "/products/linol-mens-blazer-beige",
        desktopImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-3_07d48d6c.webp?v=1773050915",
        mobileImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_RR-_WALK_6.0-2.webp?v=1772789695",
      },
      {type:"image",
        href: "/products/jena-mens-shirt-dusky-brown",
        desktopImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR_-4.webp?v=1773050926",
        mobileImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_RR-_WALK_6.0-3.webp?v=1772789782",
      },
      {
        type: "image",
        href: "/products/linol-mens-blazer-beige",

        desktopImage:
            "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-3.webp?v=1773050915",

        mobileImage:
            "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_RR-_WALK_6.0-2.webp?v=1772789695",
        },
        {
        type: "image",
        href: "/products/jena-mens-shirt-dusky-brown",

        desktopImage:
            "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR_-4.webp?v=1773050926",

        mobileImage:
            "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_RR-_WALK_6.0-3.webp?v=1772789782",
        }
    ],
  },
];

export default function RareRabbitWalk60() {

const mediaBlock = homepageBlocks.find(
    (b) => b.type === "mediaGrid"
  );

  return (
    <div>
      {mediaBlock?.type === "mediaGrid" && (
        <RareRabbitWalk items={mediaBlock.items} />
        
      )}
    </div>
  );
    
}