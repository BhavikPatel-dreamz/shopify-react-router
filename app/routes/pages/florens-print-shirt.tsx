// FlorensPrintShirtPage.jsx

import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";
import "../../styles/FlorensPrintShirtPage.css";
import type { Route } from "./+types/rare-rabbit-t-shirt";
import { createStorefrontClient } from "~/server/storefront.server";
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

export default function FlorensPrintShirtPage() {
  const { products } = useLoaderData<typeof loader>();
  // Data array for the image sections
  const florensItems = [
    {
      id: 1,
      href: "/products/xava-mens-shirt-black",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_FLORENS-4.webp?v=1774598701&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-RR-_FLORENS_b73d2182-d387-44fe-9897-503f3905f6d4.webp?v=1774614207&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Xava Men's Shirt Black"
    },
    {
      id: 2,
      href: "/products/flog-mens-shirt-dusky-blue",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_FLORENS-3.webp?v=1774598740&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-_RR-_FLORENS_abcac98a-d244-4be5-95fd-46de1ebcf4ea.webp?v=1774614243&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Flog Men's Shirt Dusky Blue"
    },
    {
      id: 3,
      href: "/products/xava-mens-shirt-black",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_FLORENS-2.webp?v=1774598763&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-_RR-_FLORENS-1_5559a6e4-d360-44cf-a165-566ca365fc3d.webp?v=1774614257&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Xava Men's Shirt Black - View 2"
    },
    {
      id: 4,
      href: "/products/tyro-mens-shirt-blue",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_FLORENS-1.webp?v=1774598784&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-_RR-_FLORENS-2_7f5aa704-e3b5-4335-99b8-dfeae7b7db6c.webp?v=1774614269&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Tyro Men's Shirt Blue"
    },
    {
      id: 5,
      href: "/products/jemp-2-mens-shirt-purple",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_FLORENS.webp?v=1774598800&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB-_RR-_FLORENS-3_c263238d-7127-469c-9ba3-571a0a46204d.webp?v=1774614283&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Jemp 2 Men's Shirt Purple"
    }
  ];

  return (
    <main className="florens-print-shirt-page">
      <div className="final-landing-image-section">
        <div className="final-landing-image-wrapper">
          {florensItems.map((item) => (
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
       <CollectionGrid products={products} />;
    </main>
  );
}