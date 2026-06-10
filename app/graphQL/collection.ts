export const COLLECTION_QUERY = `#graphql
query Collection(
  $handle: String!
  $pageBy: Int!
  $cursor: String
  $country: CountryCode
  $language: LanguageCode
)
@inContext(
  country: $country
  language: $language
) {
  collection(handle: $handle) {
    id
    title
    handle
    description

    image {
      url
      altText
    }

    products(first: $pageBy, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }

      nodes {
        id
        title
        handle

        featuredImage {
          url
          altText
        }

        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }

        compareAtPriceRange {
          minVariantPrice {
            amount
          }
        }

        metafields(
          identifiers: [
            { namespace: "my_fields", key: "sub_title" }
            { namespace: "my_fields", key: "main_title" }
          ]
        ) {
          namespace
          key
          value
          type
        }

        variants(first: 20) {
          nodes {
            id
            title
            availableForSale
            price {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
}
`;

export const COLLECTION_GRID_QUERY = `#graphql
query CollectionGridProducts(
  $pageBy: Int!
  $country: CountryCode
  $language: LanguageCode
)
@inContext(
  country: $country
  language: $language
) {
  products(first: $pageBy) {
    nodes {
      id
      title
      handle

      options {
        id
        name
        values
      }

      featuredImage {
        url
        altText
      }

      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }

      compareAtPriceRange {
        minVariantPrice {
          amount
        }
      }

      metafields(
        identifiers: [
          { namespace: "my_fields", key: "sub_title" }
          { namespace: "my_fields", key: "main_title" }
        ]
      ) {
        namespace
        key
        value
        type
      }
    }
  }
}
`;

export const COLLECTION_COUNT_QUERY = `#graphql
query CollectionCount(
  $handle: String!
  $pageBy: Int!
  $cursor: String
  $country: CountryCode
  $language: LanguageCode
)
@inContext(
  country: $country
  language: $language
) {
  collection(handle: $handle) {
    products(first: $pageBy, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
      }
    }
  }
}
`;
