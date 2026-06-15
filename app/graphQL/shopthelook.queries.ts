export const SHOP_THE_LOOK_SUMMER_ESSENTIALS_PAGE_QUERY = `#graphql
query RareRabbitSummerEssentialsPage {
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

export const RARE_RABBIT_DENIM_PAGE_QUERY = `#graphql
query RareRabbitDenimShopTheLook {
  metaobjects(
    type: "denim_shop_the_look"
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

            ... on MediaImage {
              image {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
}
`;