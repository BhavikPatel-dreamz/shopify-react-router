import { useEffect, useRef, useState } from "react";
import { useFetcher, useLoaderData } from "react-router";
import { COLLECTION_QUERY } from "~/graphQL/collection";
import { createStorefrontClient } from "~/server/storefront.server";
import CollectionHero from "~/components/collection/CollectionHero";
import CollectionToolbar from "~/components/collection/CollectionToolbar";
import CollectionGrid from "~/components/collection/CollectionGrid";
import "./styles/collection.css";


export async function loader({
  params,
  request,
}: {
  params: { handle?: string };
  request: Request;
}) {
  const storefront =
    createStorefrontClient();

  const url = new URL(
    request.url
  );

  const cursor =
    url.searchParams.get(
      "cursor"
    );

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
      }>(COLLECTION_QUERY, {
        variables: {
          handle: params.handle,
          pageBy: 250,
          cursor: nextCursor,
          country: "IN",
          language: "EN",
        },
      });

      const connection: {
        nodes: any[];
        pageInfo?: {
          hasNextPage?: boolean;
          endCursor?: string | null;
        };
      } | undefined = page.collection?.products;
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

  const [data, productCount] = await Promise.all([
    fetchCollectionPage(cursor),
    getCollectionProductCount(),
  ]);

  if (!data.collection) {
    throw new Response(
      "Collection Not Found",
      {
        status: 404,
      }
    );
  }

  return {
    collection:
      data.collection,
    pageInfo:
      data.collection.products.pageInfo,
    productCount,
  };
}

export default function Collection() {
  const { collection, pageInfo, productCount }: any =
    useLoaderData();
  const fetcher = useFetcher<typeof loader>();
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState(
    collection.products.nodes
  );
  const [cursor, setCursor] = useState(
    pageInfo?.endCursor
  );
  const [hasNextPage, setHasNextPage] = useState(
    Boolean(pageInfo?.hasNextPage)
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
          fetcher.load(
            `/collections/${collection.handle}?cursor=${cursor}`
          );
        }
      },
      {
        rootMargin: "600px",
      }
    );

    const node = loadMoreRef.current;

    if (node) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [
    collection.handle,
    cursor,
    fetcher,
    hasNextPage,
  ]);

  useEffect(() => {
    const nextCollection = fetcher.data?.collection;

    if (!nextCollection) return;

    setProducts((current: any[]) => {
      const existingIds = new Set(
        current.map((product: any) => product.id)
      );
      const nextProducts =
        nextCollection.products.nodes.filter(
          (product: any) => !existingIds.has(product.id)
        );

      return [...current, ...nextProducts];
    });
    setCursor(nextCollection.products.pageInfo?.endCursor);
    setHasNextPage(
      Boolean(nextCollection.products.pageInfo?.hasNextPage)
    );
  }, [fetcher.data]);

  return (
    <div>
      <CollectionHero
        collection={collection}
      />

      <CollectionToolbar
        count={productCount}
      />

      <CollectionGrid
        products={products}
        isLoadingMore={fetcher.state !== "idle"}
      />

      <div ref={loadMoreRef} className="py-8 text-center">
        <h1 className="text-3xl font-medium">
          {collection.title}
        </h1>

        {collection.description && (
          <p className="mt-2 max-w-3xl mx-auto opacity-80">
            {collection.description}
          </p>
        )}
      </div>

    </div>
  );
}
