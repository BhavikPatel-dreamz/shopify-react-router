import ProductCard from "../collection/ProductCard";

interface Props {
  look: any;
}

export default function LookSection({
  look,
}: Props) {
  const fields = look.fields;

  const getField = (key: string) =>
    fields.find((f: any) => f.key === key);

  const position = getField("position")?.value;

  const image =
    getField("main_image")?.reference?.image?.url;

  const products =
    getField("products")?.references?.nodes ?? [];

  return (
    <>
      <div className="top-wrapper">

        <div className="left-text-wrapper">
          <h3 className="text">LOOK {position}</h3>
        </div>

        <div className="middle-image-wrapper">
          <div className="desktop-image-wrapper">
            <div className="focal-images-wrapper">
          <img
            src={image}
            alt={`Look ${position}`}
            height={595}
            width={738}
          />
          </div>
          </div>
        </div>
        
      </div>

      <div className="look-products">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}