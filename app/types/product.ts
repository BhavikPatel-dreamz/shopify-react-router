export interface Product {
  id: string;
  handle: string;
  title: string;
  descriptionHtml: string;

  featuredImage?: {
    url: string;
    altText?: string;
  };

  images: {
    nodes: ProductImage[];
  };

  options: ProductOption[];

  variants: {
    nodes: ProductVariant[];
  };

  metafields: ProductMetafield[];
}

export interface ProductImage {
  id: string;
  url: string;
  altText?: string;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number;

  selectedOptions: {
    name: string;
    value: string;
  }[];

  image?: {
    url: string;
    altText?: string;
  };

  price: {
    amount: string;
    currencyCode: string;
  };

  compareAtPrice?: {
    amount: string;
    currencyCode: string;
  };
}

export interface ProductMetafield {
  key: string;
  value: string;
  type: string;
}