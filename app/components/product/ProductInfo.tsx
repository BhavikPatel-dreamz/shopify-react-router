import ProductAccordion from "./ProductAccordion";
import ProductActions from "./ProductActions";
import ProductPrice from "./ProductPrice";
import ProductVariants from "./ProductVariants";


export default function ProductInfo({
  product,
}: any) {

  console.log(product);


  const metafieldsMap =
    product.metafields?.reduce((acc: any, field: any) => {
      if (field) {
        acc[field.key] = field.value;
      }
      return acc;
    }, {}) || {};

  return (
    <div className="product-details-inner">
      <div className="product-items product-heading">
       
      <h1 className="main-title">
        <span className="sub-title">
                {metafieldsMap.sub_title}
              </span>
        <span>
          {metafieldsMap.main_title}
        </span>
      </h1>
      </div>
      

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