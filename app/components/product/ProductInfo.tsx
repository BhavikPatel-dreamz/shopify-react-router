import ProductAccordion from "./ProductAccordion";
import ProductActions from "./ProductActions";
import ProductPrice from "./ProductPrice";
import ProductVariants from "./ProductVariants";


export default function ProductInfo({
  product,
}: any) {
  return (
    <div className="sticky top-4">

      <h1 className="text-3xl font-medium">
        {product.title}
      </h1>

      <ProductPrice
        variants={product.variants.nodes}
      />

      <ProductVariants
        variants={product.variants.nodes}
        options={product.options}
      />

      <ProductActions />

      <ProductAccordion
        product={product}
      />
    </div>
  );
}