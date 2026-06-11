import CollectionGrid from "~/components/collection/CollectionGrid";
import RareRabbitWalk, { type MediaItem } from "~/components/homePages/rareRabbitWalk";
import { createStorefrontClient } from "~/server/storefront.server";
import type { Route } from "./+types/rare-rabbit-walk-6-0";
import { useLoaderData } from "react-router";
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";

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
          src: "https://thehouseofrare.com/cdn/shop/videos/c/vp/85a2ac6364ef458ea3e8a9e819c7307d/85a2ac6364ef458ea3e8a9e819c7307d.HD-1080p-7.2Mbps-77632446.mp4",
          poster:
            "https://thehouseofrare.com/cdn/shop/files/preview_images/85a2ac6364ef458ea3e8a9e819c7307d.thumbnail.0000000000_1300x.jpg",
        },

        mobile: {
          src: "//thehouseofrare.com/cdn/shop/videos/c/vp/fec8474231b6455ab74695b0f414e127/fec8474231b6455ab74695b0f414e127.HD-720p-4.5Mbps-77632491.mp4",
          poster:
            "https://thehouseofrare.com/cdn/shop/files/preview_images/fec8474231b6455ab74695b0f414e127.thumbnail.0000000000_500x.jpg",
        },
      }, 
      {
        type:"image",
        href: "/products/minzo-womens-dress-light-pink",
        desktopImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-walk_2.webp",
        mobileImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_walk_2.webp",
      },
      {  type:"image",
        href: "/products/mlare-womens-dress-yellow",
        desktopImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-walk_3.webp",
        mobileImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_walk_3.webp",
      },
      { type:"image",
        href: "/products/aglow-womens-dress-off-white",
        desktopImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-walk_4.webp",
        mobileImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_walk4.webp",
      },
      {type:"image",
        href: "https://thehouseofrare.com/products/curie-womens-dress-white",
        desktopImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-walk_5.webp",
        mobileImage:
          "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_-_RR-_WALK_6.0-1.webp",
      },
    ],
  },
];

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

export default function RareismWalk60Page() {

const mediaBlock = homepageBlocks.find(
    (b) => b.type === "mediaGrid"
  );

   const { products } = useLoaderData<typeof loader>();

  function onOpenCart(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
       

      {mediaBlock?.type === "mediaGrid" && (
        <RareRabbitWalk items={mediaBlock.items} /> 
      )}
      <CollectionGrid 
        products={products}
        onOpenCart={onOpenCart}
        enableFilterSortItems={false}
        enableProductCounts={false}
        enableGridView={false}

        gridViewNumber="2"
        mobileGridViewNumber="1" />
    </div>      
  );
    
}