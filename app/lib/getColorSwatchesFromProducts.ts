export type ColorSwatch = {
  color: string;
  image: string;
  productHandle?: string;
  url?: string;
};

export function getColorSwatchesFromProducts(
  products: any[],
  currentTags: string[]
) {
  const swatches: Record<string, ColorSwatch> = {};

  products.forEach((product) => {
    const tags = product.tags || [];

    const hasMatch = tags.some((tag: string) =>
      currentTags.includes(tag)
    );

    if (!hasMatch) return;

    const color =
      product.options?.find((o: any) =>
        o.name.toLowerCase().includes("color")
      )?.values?.[0] ||
      product.title;

    const image =
  product.metafield?.reference?.image?.url;

  const url = `/products/${product.handle}`;


    if (!color || !image) return;

    swatches[color] = {
      color,
      image,
      productHandle: product.handle,
      url,

    };
  });

  return Object.values(swatches);
}