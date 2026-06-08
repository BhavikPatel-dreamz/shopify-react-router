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

   products(
  first: $pageBy
    after: $cursor
    ) {
    pageInfo {
        hasNextPage
        endCursor
    }

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
}
`;
