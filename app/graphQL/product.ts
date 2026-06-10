export const PRODUCT_QUERY = `#graphql
query ProductDetails(
  $handle: String!
  $country: CountryCode
  $language: LanguageCode
) @inContext(country: $country, language: $language) {

  product(handle: $handle) {
    id
    handle
    title
    descriptionHtml
    vendor
    productType
    tags

    featuredImage {
      url
      altText
      width
      height
    }

    images(first: 20) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }

    options {
      id
      name
      values
    }

    variants(first: 100) {
      nodes {
        id
        title
        availableForSale
        sku

        selectedOptions {
          name
          value
        }

        image {
          url
          altText
        }

        price {
          amount
          currencyCode
        }

        compareAtPrice {
          amount
          currencyCode
        }
      }
    }

    seo {
      title
      description
    }

    metafields(
  identifiers: [
    { namespace: "my_fields", key: "crumb_title" }
    { namespace: "my_fields", key: "fit" }
    { namespace: "my_fields", key: "fabric" }
    { namespace: "my_fields", key: "pattern" }
    { namespace: "my_fields", key: "occasion" }
    { namespace: "my_fields", key: "collar" }
    { namespace: "my_fields", key: "sleeve_length" }
    { namespace: "my_fields", key: "closure" }
    { namespace: "my_fields", key: "product_tag" }
    { namespace: "my_fields", key: "sub_title" }
    { namespace: "my_fields", key: "main_title" }
    { namespace: "custom", key: "manufacturer_details" }
    { namespace: "custom", key: "shipping_returns" }
  ]
) {
  namespace
  key
  value
  type
}
  }
}
`;


 export const RELATED_PRODUCTS_QUERY = `
  query RelatedProducts($handle: String!, $query: String!) {

    product(handle: $handle) {
      id
      title
      handle
      tags
    }

    products(first: 10, query: $query) {
      nodes {
        id
        title
        handle
        tags


        options {
            id
            name
            values
          }

        metafield(namespace: "custom", key: "variant_color_image") {
        reference {
          ... on MediaImage {
            image {
              url
            }
          }
        }
      }
      }
    }
  }
`;

