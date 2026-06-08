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
        { namespace: "custom", key: "subtitle" }
        { namespace: "custom", key: "fit" }
        { namespace: "custom", key: "fabric" }
        { namespace: "custom", key: "manufacturer_details" }
        { namespace: "custom", key: "shipping_returns" }
      ]
    ) {
      key
      value
      type
    }
  }
}
`;