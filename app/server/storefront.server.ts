// app/server/storefront.server.ts

const STOREFRONT_DOMAIN = process.env.PUBLIC_STORE_DOMAIN;
const STOREFRONT_TOKEN = process.env.PUBLIC_STOREFRONT_API_TOKEN;

export interface StorefrontClient {
  query<T = Record<string, unknown>>(
    query: string,
    options?: { variables?: Record<string, unknown> }
  ): Promise<T>;
}

export function createStorefrontClient(): StorefrontClient {
  return {
    async query<T>(
      query: string,
      options: { variables?: Record<string, unknown> } = {}
    ): Promise<T> {
      if (!STOREFRONT_DOMAIN || !STOREFRONT_TOKEN) {
        throw new Error(
          "Missing Shopify Storefront env vars. Set PUBLIC_STORE_DOMAIN and PUBLIC_STOREFRONT_API_TOKEN on Vercel.",
        );
      }

      const res = await fetch(
        `https://${STOREFRONT_DOMAIN}/api/2024-10/graphql.json`,
        {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
        },
        body: JSON.stringify({
          query,
          variables: options.variables ?? {},
        }),
      },
      );

      if (!res.ok) {
        throw new Error(`Storefront API error: ${res.status} ${res.statusText}`);
      }

      const json = (await res.json()) as { data?: T; errors?: unknown[] };

      if (json.errors?.length) {
        console.warn("[Storefront] GraphQL warnings:", json.errors);
      }

      if (!json.data) {
        throw new Error(
          "Storefront API returned no data",
        );
      }

      return json.data as T;
    },
  };
}
