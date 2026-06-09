import type { Route } from "./+types/home";
import LandingImageGrid from "~/components/LandingImageGrid";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The House Of Rare | Premium Clothing Brand in India" },
    {
      name: "description",
      content: "Premium Fashion Collection - Rare Rabbit, Rareism, Kids Collection",
    },
  ];
}

const heroBlocks = [
  // Desktop Grid Text
  {
    type: "desktop_grid_text" as const,
    settings: {
      banner_bg_image: {
        url: "https://cdn.shopify.com/s/files/1/0752/6435/files/first_part_bd89b112-c9fb-46ad-82b1-d98f003ed43b.jpg?v=1753174894",
        alt: "The House Of Rare",
      },
      text_link: "https://thehouseofrare.com",
    },
  },

  // Desktop Large Image
  {
    type: "desktop_large_image" as const,
    settings: {
      large_banner_image: {
        url: "https://cdn.shopify.com/s/files/1/0752/6435/files/RR-Home_page-desktop_85bdb133-d253-4486-a142-ae630bead256.webp?v=1778750757",
        alt: "Rare Rabbit",
      },
      banner_link: "/pages/rare-rabbit",
    },
  },

  // Desktop Split Images
  {
    type: "desktop-split-images" as const,
    settings: {
      split_banner_one: {
        url: "https://cdn.shopify.com/s/files/1/0752/6435/files/KIDS-Home_page-desktop_108ea8fc-54ee-47d4-9c44-c7c2f5614d57.webp?v=1778750770",
        alt: "Kids Collection",
      },
      banner_one_link: "/pages/kids",

      split_banner_second: {
        url: "https://cdn.shopify.com/s/files/1/0752/6435/files/Rsm-Home_page-desktop_ee278396-8e44-4e4e-8a04-c450d89e7d2f.webp?v=1778750774",
        alt: "Rareism Collection",
      },
      banner_two_link: "/pages/rareism",
    },
  },

  // Mobile Split Images
  {
    type: "mobile-split-images" as const,
    settings: {
      mobile_split_banner_one: {
        url: "https://cdn.shopify.com/s/files/1/0752/6435/files/WOMEN_-_RSM_-_DENIM.webp?v=1779344846",
        alt: "Women Collection",
      },
      mobile_banner_one_link: "/pages/rareism",

      mobile_split_banner_second: {
        url: "https://cdn.shopify.com/s/files/1/0752/6435/files/KIDS-Home_page-MOBILE.webp?v=1778750797",
        alt: "Kids Collection",
      },
      mobile_banner_two_link: "/pages/kids",
    },
  },

  // Mobile Large Image
  {
    type: "mobile-large-image" as const,
    settings: {
      mobile_large_banner_image: {
        url: "https://cdn.shopify.com/s/files/1/0752/6435/files/RR_Home_page-mob_d07e012a-5b1f-4565-bf13-8d4de56c31db.webp?v=1778750810",
        alt: "Rare Rabbit",
      },
      mobile_banner_link: "/pages/rare-rabbit",
    },
  },

  // Mobile Grid Text
  {
    type: "mobile-grid-text" as const,
    settings: {
      mobile_banner_bg_image: {
        url: "https://cdn.shopify.com/s/files/1/0752/6435/files/3_4805f32d-fc17-4702-933f-3d4a5b41b028.jpg?v=1726473286",
        alt: "The House Of Rare",
      },
      mobile_text_link: "https://thehouseofrare.com/",
    },
  },
];
export default function Home() {
  return (    
      <LandingImageGrid headerType="light" blocks={heroBlocks} />
  );
}