import { Suspense, useEffect, useRef, useState } from "react";
import { Await,useFetcher, useLoaderData } from "react-router";
import { COLLECTION_COUNT_QUERY, COLLECTION_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";
import CollectionHero from "~/components/collection/CollectionHero";
import CollectionToolbar from "~/components/collection/CollectionToolbar";
import CollectionGrid from "~/components/collection/CollectionGrid";
import "../../styles/collections.css";

import CartDrawer from "~/components/Cart/CartDrawer";

export async function loader({
  params,
  request,
}: {
  params: { handle?: string };
  request: Request;
}) {
  const storefront = createStorefrontClient();

  const url = new URL(request.url);

  const cursor = url.searchParams.get("cursor");

  const getCollectionProductCount = async () => {
    let total = 0;
    let nextCursor: string | null = null;
    let hasNextPage = true;

    while (hasNextPage) {
      const page: {
        collection?: {
          products?: {
            nodes: any[];
            pageInfo?: {
              hasNextPage?: boolean;
              endCursor?: string | null;
            };
          };
        };
      } = await storefront.query<{
        collection: any;
      }>(COLLECTION_COUNT_QUERY, {
        variables: {
          handle: params.handle,
          pageBy: 250,
          cursor: nextCursor,
          country: "IN",
          language: "EN",
        },
      });

      const connection =
        page.collection?.products;
      if (!connection) break;

      total += connection.nodes.length;
      hasNextPage = Boolean(connection.pageInfo?.hasNextPage);
      nextCursor = connection.pageInfo?.endCursor ?? null;
    }

    return total;
  };

  const fetchCollectionPage = async (pageCursor: string | null) =>
    storefront.query<{
      collection: any;
    }>(COLLECTION_QUERY, {
      variables: {
        handle: params.handle,
        pageBy: 24,
        cursor: pageCursor,
        country: "IN",
        language: "EN",
      },
    });

  const data = await fetchCollectionPage(cursor);

  if (!data.collection) {
    throw new Response("Collection Not Found", {
      status: 404,
    });
  }

 const productCountValue = await getCollectionProductCount();

return {
  collection: data.collection,
  pageInfo: data.collection.products.pageInfo,
  productCount: productCountValue,
};
}

export function headers() {
  return {
    "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=86400",
  };
}

export default function Collection() {
  const { collection, pageInfo, productCount }: any = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof loader>();
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState(collection.products.nodes);
  const [cursor, setCursor] = useState(pageInfo?.endCursor);
  const [openCart, setOpenCart] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(
    Boolean(pageInfo?.hasNextPage),
  );

  useEffect(() => {
    setProducts(collection.products.nodes);
    setCursor(pageInfo?.endCursor);
    setHasNextPage(Boolean(pageInfo?.hasNextPage));
  }, [collection, pageInfo]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (
          entry?.isIntersecting &&
          hasNextPage &&
          fetcher.state === "idle" &&
          cursor
        ) {
          fetcher.load(`/collections/${collection.handle}?cursor=${cursor}`);
        }
      },
      {
        rootMargin: "600px",
      },
    );

    const node = loadMoreRef.current;

    if (node) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [collection.handle, cursor, fetcher, hasNextPage]);

  useEffect(() => {
    const nextCollection = fetcher.data?.collection;

    if (!nextCollection) return;

    setProducts((current: any[]) => {
      const existingIds = new Set(current.map((product: any) => product.id));
      const nextProducts = nextCollection.products.nodes.filter(
        (product: any) => !existingIds.has(product.id),
      );

      return [...current, ...nextProducts];
    });
    setCursor(nextCollection.products.pageInfo?.endCursor);
    setHasNextPage(Boolean(nextCollection.products.pageInfo?.hasNextPage));
  }, [fetcher.data]);

  const [, setGrid] = useState(4);
  // console.log("collection", collection);
  return (
    <div className="shopify-section">
      <div className="main-collection-banner-section">
        <CollectionHero collection={collection} />
      </div>

      <div className="shopify-section collection-section">
        <div className="collection section main-collection-js">
          <div className="collection--inner">
            <div className="collection-breadcrumb-container">
              <nav
                className="breadcrumb"
                role="navigation"
                aria-label="breadcrumbs"
              >
                <a
                  href="/"
                  title="Translation missing: en.general.breadcrumbs.home_link_title"
                  className="text-sm-12 text-xs-12"
                >
                  Home
                </a>

                <span className="breadcrumb-divider" aria-hidden="true">
                  {" "}
                  /
                </span>

                <a href="/pages/rareism">Rareism</a>

                <span className="breadcrumb-divider" aria-hidden="true">
                  {" "}
                  /
                </span>
                <span className="product-title xs-show">{collection.title}</span>
              </nav>
            </div>

            <Suspense
              fallback={
                <CollectionToolbar
                  count={collection.products.nodes.length}
                  onGridChange={setGrid}
                />
              }
            >
              <Await resolve={productCount}>
                {(count) => (
                  <CollectionToolbar count={count} onGridChange={setGrid} />
                )}
              </Await>
            </Suspense>

            <CollectionGrid
              products={products}
              isLoadingMore={fetcher.state !== "idle"}
              onOpenCart={() => setOpenCart(true)}
            />

            <div ref={loadMoreRef} className="py-8 text-center">
              <h1 className="text-3xl font-medium">{collection.title}</h1>

              {collection.description && (
                <p className="mt-2 max-w-3xl mx-auto opacity-80">
                  {collection.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {openCart && <CartDrawer onClose={() => setOpenCart(false)} />}
    </div>
  );
}
