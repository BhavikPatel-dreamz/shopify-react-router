// app/lib/storefront.server.ts

const STOREFRONT_API_URL = `https://${process.env.PUBLIC_STORE_DOMAIN}/api/2024-10/graphql.json`;
const STOREFRONT_TOKEN   = process.env.PUBLIC_STOREFRONT_API_TOKEN!;

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

      const res = await fetch(STOREFRONT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
        },
        body: JSON.stringify({
          query,
          variables: options.variables ?? {},
        }),
      });

      if (!res.ok) {
        throw new Error(`Storefront API error: ${res.status} ${res.statusText}`);
      }

      const json = (await res.json()) as { data?: T; errors?: unknown[] };

      if (json.errors?.length) {
        console.warn(
            '[Storefront] GraphQL warnings:',
            json.errors
                );
                }

        if (!json.data) {
        throw new Error(
            'Storefront API returned no data'
        );
        }

        return json.data as T;
            },
        };
        }