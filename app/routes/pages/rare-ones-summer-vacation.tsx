// app/routes/rare-ones-summer-vacation.tsx
import React, { useState } from "react";
import "../../styles/RareOnesSummerVacationPage.css";
import LookbookImageGrid from "~/components/homePages/LookbookImageGrid";

interface LookbookImage {
  id: number;
  href: string;
  img: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const RareOnesSummerVacationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"default" | "collection">("default");

  // Desktop Lookbook Images - Three Images Block 1
  const threeImagesBlock1: LookbookImage[] = [
    {
      id: 1,
      href: "/products/rare-ones-shirt-vacay-white",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_1_78ef7db7-ae19-4ec0-a750-4efbce04afc2.webp?v=1779356171",
      width: 864,
      height: 1080,
      alt: "Vacation Look 1"
    },
    {
      id: 2,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_2_b4626f7d-2246-4fb3-8578-6d63a38e1965.webp?v=1779356175",
      width: 864,
      height: 1078,
      alt: "Vacation Look 2"
    },
    {
      id: 3,
      href: "/products/rare-ones-shirt-toile-s-rust",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_3_3157bcac-9931-405f-bfa4-ab81985bdf9a.webp?v=1779356179",
      width: 864,
      height: 1078,
      alt: "Vacation Look 3"
    }
  ];

  // Desktop Lookbook - Single Image Block 1
  const singleImageBlock1: LookbookImage[] = [
    {
      id: 4,
      href: "/products/rare-ones-shirt-vacay-white",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_4_ba1f12e7-d448-4340-919d-7b57909900fe.webp?v=1779356192",
      width: 2632,
      height: 1600,
      alt: "Vacation Look 4"
    }
  ];

  // Desktop Lookbook Images - Three Images Block 2
  const threeImagesBlock2: LookbookImage[] = [
    {
      id: 5,
      href: "/products/rare-ones-t-shirt-ken-light-yellow",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_5_4bc279ed-c462-460e-a099-d2880f0f52b3.webp?v=1779356215",
      width: 864,
      height: 1080,
      alt: "Vacation Look 5"
    },
    {
      id: 6,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_6_3de4ec6b-7b39-42cb-a90d-caf55e98274b.webp?v=1779356220",
      width: 858,
      height: 1076,
      alt: "Vacation Look 6"
    },
    {
      id: 7,
      href: "/products/rare-ones-shirt-adrin-s-off-white",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_7_f910a64e-5722-4e7c-be61-39f65c0689b4.webp?v=1779356226",
      width: 858,
      height: 1076,
      alt: "Vacation Look 7"
    }
  ];

  // Desktop Lookbook - Single Image Block 2
  const singleImageBlock2: LookbookImage[] = [
    {
      id: 8,
      href: "/products/rare-ones-shirt-afix-k-light-yellow",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_8_86cce0ed-81eb-4387-9bdb-c83d1f248628.webp?v=1779356235",
      width: 2632,
      height: 1600,
      alt: "Vacation Look 8"
    }
  ];

  // Desktop Lookbook - Two Images Block
  const twoImagesBlock: LookbookImage[] = [
    {
      id: 9,
      href: "/products/rare-ones-shirt-afix-k-light-yellow",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_9_0b7092a7-4e76-446f-8c9b-95c9ae8ae006.webp?v=1779356247",
      width: 1232,
      height: 1540,
      alt: "Vacation Look 9",
      className: "large"
    },
    {
      id: 10,
      href: "/products/rare-ones-shirt-zeno-light-purple",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_10_add2fcc7-12b8-4bc4-808d-68f131dd7e98.webp?v=1779356252",
      width: 1232,
      height: 1540,
      alt: "Vacation Look 10",
      className: "small"
    }
  ];

  // Mobile Lookbook Images
  const mobileTwoImagesBlock1: LookbookImage[] = [
    {
      id: 1,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_app-mob-1_caa23770-5e3f-4c3b-89d4-c595d640ea61.webp?v=1779356310",
      width: 749,
      height: 936,
      alt: "Mobile Vacation Look 1"
    },
    {
      id: 2,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_app-mob-2_a0a835a3-d3d8-4cfd-8435-4504869b3971.webp?v=1779356315",
      width: 749,
      height: 936,
      alt: "Mobile Vacation Look 2"
    }
  ];

  const mobileFullImageBlock1: LookbookImage[] = [
    {
      id: 3,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_app-mob-3_d9130385-537d-445c-9c77-fd5707de4da9.webp?v=1779356326",
      width: 1508,
      height: 917,
      alt: "Mobile Vacation Look 3"
    }
  ];

  const mobileTwoImagesBlock2: LookbookImage[] = [
    {
      id: 4,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_app-mob-4_4bec94d3-6450-43c0-ab76-123192129ab2.webp?v=1779356334",
      width: 749,
      height: 936,
      alt: "Mobile Vacation Look 4"
    },
    {
      id: 5,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_app-mob-5_7e4432c8-21a0-4f9b-87aa-9f6a11fccb5d.webp?v=1779356339",
      width: 749,
      height: 936,
      alt: "Mobile Vacation Look 5"
    }
  ];

  const mobileTwoImagesBlock3: LookbookImage[] = [
    {
      id: 6,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_app-mob-6_bde9c4d3-2370-41ce-9121-4b74a1dfbd12.webp?v=1779356354",
      width: 749,
      height: 936,
      alt: "Mobile Vacation Look 6"
    },
    {
      id: 7,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_app-mob-7_74b7e4b9-52ea-4b6f-85b4-4cb34d432743.webp?v=1779356357",
      width: 749,
      height: 936,
      alt: "Mobile Vacation Look 7"
    }
  ];

  const mobileFullImageBlock2: LookbookImage[] = [
    {
      id: 8,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_app-mob-8_8312471a-a541-4467-9b44-9018a23be0f0.webp?v=1779356364",
      width: 1508,
      height: 917,
      alt: "Mobile Vacation Look 8"
    }
  ];

  const mobileTwoImagesBlock4: LookbookImage[] = [
    {
      id: 9,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_app-mob-9_45cbfbd8-b43a-490b-a3dc-58ed7c4fbdd0.webp?v=1779356370",
      width: 749,
      height: 936,
      alt: "Mobile Vacation Look 9"
    },
    {
      id: 10,
      href: "#",
      img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_app-mob-10_85a95b77-004b-4c96-9163-532941091b06.webp?v=1779356374",
      width: 749,
      height: 936,
      alt: "Mobile Vacation Look 10"
    }
  ];

  return (
    <main className="rare-ones-summer-vacation-page">
      {/* Tabs Section */}
      <div className="lookbook-collection-tabs">
        <span 
          className={`lookbook-tab ${activeTab === "default" ? "active" : ""}`} 
          onClick={() => setActiveTab("default")}
        >
          LOOKBOOK
        </span>
        <span 
          className={`lookbook-tab ${activeTab === "collection" ? "active" : ""}`} 
          onClick={() => setActiveTab("collection")}
        >
          COLLECTION
        </span>
      </div>

      {/* COLLECTION Section - Empty */}
      {activeTab === "collection" && (
        <section className="collection-section-empty">
          <div className="collection-empty-wrapper" />
        </section>
      )}

      {/* LOOKBOOK Content - Image Grid Component */}
      {activeTab === "default" && (
        <LookbookImageGrid
          threeImagesBlock1={threeImagesBlock1}
          singleImageBlock1={singleImageBlock1}
          threeImagesBlock2={threeImagesBlock2}
          singleImageBlock2={singleImageBlock2}
          twoImagesBlock={twoImagesBlock}
          mobileTwoImagesBlock1={mobileTwoImagesBlock1}
          mobileFullImageBlock1={mobileFullImageBlock1}
          mobileTwoImagesBlock2={mobileTwoImagesBlock2}
          mobileTwoImagesBlock3={mobileTwoImagesBlock3}
          mobileFullImageBlock2={mobileFullImageBlock2}
          mobileTwoImagesBlock4={mobileTwoImagesBlock4}
        />
      )}
    </main>
  );
};

export default RareOnesSummerVacationPage;