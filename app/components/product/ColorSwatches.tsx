import React from "react";
import type { ColorSwatch } from "~/lib/getColorSwatchesFromProducts";


type Props = {
  swatches: ColorSwatch[];
  onSelect?: (swatch: ColorSwatch) => void;
};

export default function ColorSwatches({ swatches, onSelect }: Props) {
  return (
    // <div className="color-swatches flex gap-2">
    //   {swatches.map((swatch) => (
    //     <button
    //       key={swatch.color}
    //       onClick={() => onSelect?.(swatch)}
    //       className="w-12 h-12 border rounded overflow-hidden"
    //       title={swatch.color}
    //     >
    //       <img
    //         src={swatch.image}
    //         alt={swatch.color}
    //         className="w-full h-full object-cover"
    //       />
    //       <div className="color-title">{swatch.color}</div>
    //     </button>
    //   ))}
    // </div>
    <div className="product-items color-swatch-list">
  <div className="color-lists-sec" data-count={swatches.length}>
    <div className="color-lists">
      <div
        className={`product-item-color-swatch-list ${
          swatches.length <= 3 ? "no-swiper" : ""
        }`}
        data-swatch-size={swatches.length}
      >
        <div className="swiper-button-next">
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999023 1L8.9059 9.0094L0.999023 17.0202"
              stroke="#000000"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          className={`swiper product-swatch-swiper ${
            swatches.length <= 3 ? "no-swiper" : ""
          }`}
        >
          <div className="swiper-wrapper">
            {swatches.map((swatch, index) => (
              <div
                key={swatch.color}
                className={`swiper-slide swatch-slide ${
                  index === 0 ? "original-swatch" : ""
                }`}
              >
                <div className="color-image">
                  {swatch.url ? (
                    <a
                      href={swatch.url}
                      className="link-redirect-js"
                      title={swatch.color}
                    >
                      <span
                        className="swatch-image"
                        style={{
                          backgroundImage: `url(${swatch.image})`,
                        }}
                      />
                    </a>
                  ) : (
                    <span
                      className="swatch-image"
                      style={{
                        backgroundImage: `url(${swatch.image})`,
                      }}
                    />
                  )}
                </div>

                <div className="color-title">{swatch.color}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="swiper-button-prev">
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999023 1L8.9059 9.0094L0.999023 17.0202"
              stroke="#000000"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}