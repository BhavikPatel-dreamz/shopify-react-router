// app/routes/rare-ones-motorsport.tsx
import React from "react";
import RareOnesMotorsportImages from "~/components/homePages/RareOnesMotorsportImages";

interface MotorsportItem {
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

const RareOnesMotorsportPage: React.FC = () => {
  // Data array for the image sections
  const motorsportItems: MotorsportItem[] = [
    {
      id: 1,
      href: "https://thehouseofrare.com/products/rare-ones-t-shirt-cubi-red",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RO-_motorsport-1.webp?v=1775800870&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RO-_tennis-1_b44bd487-353b-47d4-8af6-a0c892b32d66.webp?v=1775800871&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Rare Ones T-Shirt Cubi Red"
    },
    {
      id: 2,
      href: "https://thehouseofrare.com/products/rare-ones-t-shirt-dream-teal",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RO-_motorsport_2.webp?v=1775800880&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RO-_tennis-2_71cd310d-11cd-42e4-8fc0-cdb0c302dc52.webp?v=1775801068&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Rare Ones T-Shirt Dream Teal"
    },
    {
      id: 3,
      href: "https://thehouseofrare.com/products/rare-ones-polo-kiann-green",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RO-_motorsport-6.webp?v=1775801018&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RO-_tennis-4_e9197fd1-b0c7-4774-974b-feef11034d21.webp?v=1775801022&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Rare Ones Polo Kiann Green"
    },
    {
      id: 4,
      href: "https://thehouseofrare.com/products/rare-ones-shorts-cubi-b-red",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RO-_motorsport-4.webp?v=1775800923&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RO-_tennis-3_69c1de2c-03bf-4187-9279-8275735be5cc.webp?v=1775801042&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Rare Ones Shorts Cubi B Red"
    },
    {
      id: 5,
      href: "#",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RO-_motorsport-5_6b5c6f26-54db-4e21-a2f9-4ca5d8c8bf29.webp?v=1775822737&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RO-_tennis-6-2.webp?v=1775822766&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Rare Ones Motorsport - Look 5"
    },
    {
      id: 6,
      href: "https://thehouseofrare.com/products/rare-ones-t-shirt-skil-blue",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RO-_motorsport-3.webp?v=1775800914&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RO-_tennis-5_b757bcfc-7913-4b21-94a5-4b2295b31366.webp?v=1775800991&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Rare Ones T-Shirt Skil Blue"
    }
  ];

  return (
    <main className="rare-ones-motorsport-page">
      <RareOnesMotorsportImages 
        items={motorsportItems}
        sectionId="template--18762112335943__final_landing_image_pcbJnV"
        paddingClass="section-template--18762112335943__final_landing_image_pcbJnV-padding"
      />
    </main>
  );
};

export default RareOnesMotorsportPage;