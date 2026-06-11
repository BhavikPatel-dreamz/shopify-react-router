import React from "react";

import type {
  ThorDenimDesktopBlock,
  ThorDenimMobileBlock,
} from "~/data/thorDenimData";

import ThreeImagesBlock from "~/components/summerVacation/ThreeImagesBlock";
import SingleImageBlock from "~/components/summerVacation/SingleImageBlock";

type Props = {
  desktopBlocks: ThorDenimDesktopBlock[];
  mobileBlocks: ThorDenimMobileBlock[];
};

export default function ThorDenimLookbook({
  desktopBlocks,
  mobileBlocks,
}: Props) {
  return (
    <>
      {/* Desktop */}
      <div className="desktop-blocks-section image-block-grid-section hide-mobile">

        {desktopBlocks.map((block, index) => {

          if (block.type === "three_images") {
            return (
              <ThreeImagesBlock
                key={index}
                images={block.images.map(
                  (image) => ({
                    href: image.link,
                    img: image.image,
                    alt: "",
                  })
                )}
              />
            );
          }

          return (
            <SingleImageBlock
              key={index}
              image={{
                href:
                  block.images[0]
                    .link,
                img:
                  block.images[0]
                    .image,
                alt: "",
              }}
            />
          );
        })}

      </div>

      {/* Mobile */}
      <div className="blocks-section image-block-grid-section  hide-desktop">

        {mobileBlocks.map((block, index) => {

          if (
            block.type === "two_images"
          ) {
            return (
              <div
                key={index}
                className="two-images-block"
              >

                {block.images.map(
                  (
                    image,
                    imageIndex
                  ) => (
                    <a
                      key={
                        imageIndex
                      }
                      href={
                        image.link
                      }
                      className="image-wrapper"
                    >
                      <img
                        src={
                          image.image
                        }
                        alt=""
                      />
                    </a>
                  )
                )}

              </div>
            );
          }

          return (
            <div
              key={index}
              className="full-image-block"
            >
              <a
                href={
                  block.images[0]
                    .link
                }
                className="image-wrapper"
              >
                <img
                  src={
                    block.images[0]
                      .image
                  }
                  alt=""
                />
              </a>
            </div>
          );
        })}

      </div>
    </>
  );
}