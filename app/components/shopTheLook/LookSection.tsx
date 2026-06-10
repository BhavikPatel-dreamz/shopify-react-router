import ProductSlider from "./ProductSlider";

interface Props {
  look: any;
  sliderIndex: number;
}

export default function LookSection({
  look,
  sliderIndex,
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
      <div className="top-wrapper" data-index={sliderIndex + 1}>
        <div className="left-text-wrapper">
          <h3 className="text">LOOK {position}</h3>
        </div>

        <div className="middle-image-wrapper">
          <div className="middle-image-inner">
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

            <div className="mobile-image-wrapper xs-show">
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

        <div className="right-text-wrapper">
          <div className="percent-price-wrapper xs-hide">
            <p className="compare-price">
              <span className="money">₹ 7,297</span>
            </p>

            <p className="price">
              <span className="money">₹ 6,022</span>
            </p>

            <span className="perc_price">17%</span>
          </div>
        </div>
      </div>

      <ProductSlider
        products={products}
        sliderIndex={sliderIndex}
      />
    </>
  );
}