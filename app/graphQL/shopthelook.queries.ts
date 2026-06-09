export const SHOP_THE_LOOK_PAGE_QUERY = `#graphql
query ShopTheLookPage {
  metaobjects(
    type: "rare_rabbit_summer_essentials_shop_the_look"
    first: 50
  ) {
    nodes {
      id
      handle

      fields {
        key
        value

        reference {
          ... on MediaImage {
            image {
              url
              altText
            }
          }
        }

        references(first: 20) {
          nodes {
            ... on Product {
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
                maxVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
}
`;