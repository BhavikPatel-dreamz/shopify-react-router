
import CollectionGrid from "~/components/collection/CollectionGrid";
import "../../styles/LuggagePage.css"; // External CSS for styling
import { COLLECTION_GRID_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";
import type { Route } from "../+types/home";
import { useLoaderData } from "react-router";

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

export default function LuggagePage() {

  const { products } = useLoaderData<typeof loader>();

  // Data array for the image sections
  const luggageItems = [
    {
      id: 1,
      href: "/products/tony-trolley-bag-grey-cabin",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-1_c6f70054-98dd-4ee2-a95a-4210e0f840f7.webp?v=1779347483&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_1_765d0c63-3a80-4c37-a89c-b3f25056e907.webp?v=1779347512&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Tony Trolley Bag Grey Cabin"
    },
    {
      id: 2,
      href: "/products/gallardo-trolley-bag-blue-cabin",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-2_79ede1c5-7b82-4d50-b38d-f367c7f7e32f.webp?v=1778225112&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_2_b51e5957-fde9-4383-8798-baaf6f8cdeb2.webp?v=1778225116&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Gallardo Trolley Bag Blue Cabin"
    },
    {
      id: 3,
      href: "/products/gallardo-trolley-bag-blue-cabin",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-3_eddab512-d9c6-4b19-adaf-284dced95fb6.webp?v=1779347525&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_3_818cbcb9-6780-4450-a5c8-e0d0841ab996.webp?v=1779347531&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Gallardo Trolley Bag Blue Cabin - View 2"
    },
    {
      id: 4,
      href: "/collections/luggage",
      desktopImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/desktop_-RR-_PAGE_-3-1.webp?v=1778225153&width=2732&aio=w-2732",
      mobileImg: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/MOB_RR_RR_PAGE_4_6e186219-b13a-4ff6-b080-c34bb4bfeac0.webp?v=1778225159&width=2732&aio=w-2732",
      desktopWidth: 2732,
      desktopHeight: 1536,
      mobileWidth: 2732,
      mobileHeight: 5805,
      alt: "Shop All Luggage Collection"
    }
  ];

  return (
    <main className="luggage-page">
      <div className="final-landing-image-section">
        <div className="final-landing-image-wrapper">
          {luggageItems.map((item) => (
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