// RareismCroquetClubPage.tsx
import React from "react";
import RareismCroquetClubImages from "~/components/homePages/RareismCroquetClubImages";

interface CroquetClubItem {
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

const RareismCroquetClubPage: React.FC = () => {
  // Data array for the image sections
  const croquetClubItems: CroquetClubItem[] = [
    {
      id: 1,
      href: "/products/zonrad-womens-polo-dark-green",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RSM-_PAGE_-1.webp?v=1777535735&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RSM_PAGE_1.webp?v=1777535805&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Zonrad Women's Polo Dark Green"
    },
    {
      id: 2,
      href: "/products/zavin-womens-polo-black",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RSM-_PAGE_-2.webp?v=1777536031&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RSM_PAGE_2.webp?v=1777536027&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Zavin Women's Polo Black"
    },
    {
      id: 3,
      href: "/products/zavin-womens-polo-dark-blue",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RSM-_PAGE_-3.webp?v=1777536098&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RSM_PAGE_3.webp?v=1777536094&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Zavin Women's Polo Dark Blue"
    },
    {
      id: 4,
      href: "/products/zonrad-womens-polo-dark-green",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RSM-_PAGE_-4.webp?v=1777536187&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RSM_PAGE_4.webp?v=1777536183&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Zonrad Women's Polo Dark Green - View 2"
    }
  ];

  return (
    <main className="rareism-croquet-club-page">
      <RareismCroquetClubImages 
        items={croquetClubItems}
        sectionId="template--18928681910343__final_landing_image_qrhCJ3"
        paddingClass="section-template--18928681910343__final_landing_image_qrhCJ3-padding"
      />
    </main>
  );
};

export default RareismCroquetClubPage;