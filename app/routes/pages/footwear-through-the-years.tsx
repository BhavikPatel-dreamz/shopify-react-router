// app/routes/footwear-through-the-years.tsx (or wherever your page is located)
import React from "react";
import FootwearThroughTheYearsImages from "~/components/homePages/FootwearThroughTheYearsImages";

interface FootwearItem {
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

const FootwearThroughTheYearsPage: React.FC = () => {
  // Data array for the image sections
  const footwearItems: FootwearItem[] = [
    {
      id: 1,
      href: "/collections/footwear-through-the-years",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RZ_-_through_the_ages_1819a358-68fe-437b-97f6-14268e2a9d76.webp?v=1776431449&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOBILE_-Rz-_through_the_ages_cd3464e9-c550-4705-8ee3-cac1f7ef07b1.webp?v=1776431453&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Footwear Through The Years - Collection"
    },
    {
      id: 2,
      href: "/products/milano-mens-mocassin-black",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RZ_-_through_the_ages_f0c9d4c9-95f7-4d10-8c24-70b8c7fb6733.webp?v=1776940061&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOBILE_-Rz-_through_the_ages_23db9960-47d0-4e75-ab12-109bbff3214b.webp?v=1776940066&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Milano Men's Mocassin Black"
    },
    {
      id: 3,
      href: "/products/garfield-mens-mocassin-tan",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RZ_-_through_the_ages-2.webp?v=1776424189&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOBILE_-Rz-_through_the_ages-2.webp?v=1776424194&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Garfield Men's Mocassin Tan"
    },
    {
      id: 4,
      href: "#",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RZ_-_through_the_ages-3.webp?v=1776424207&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOBILE_-Rz-_through_the_ages-3.webp?v=1776424215&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Footwear Collection - Look 4"
    },
    {
      id: 5,
      href: "/products/embroy-mens-sneaker-white",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RZ_-_through_the_ages-4.webp?v=1776424225&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOBILE_-Rz-_through_the_ages-4.webp?v=1776424231&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Embroy Men's Sneaker White"
    }
  ];

  return (
    <main className="footwear-through-the-years-page">
      <FootwearThroughTheYearsImages 
        items={footwearItems}
        sectionId="template--18821345280071__final_landing_image_9anwkK"
        paddingClass="section-template--18821345280071__final_landing_image_9anwkK-padding"
      />
    </main>
  );
};

export default FootwearThroughTheYearsPage;