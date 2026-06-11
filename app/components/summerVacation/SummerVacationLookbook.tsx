import React from "react";

import type {
    SummerVacationDesktopBlock,
    SummerVacationMobileBlock,
} from "~/data/rareOnesSummerVacation";

import ThreeImagesBlock from "./ThreeImagesBlock";
import SingleImageBlock from "./SingleImageBlock";
import TwoImagesBlock from "./TwoImagesBlock";

type Props = {
    desktopBlocks: SummerVacationDesktopBlock[];
    mobileBlocks: SummerVacationMobileBlock[];
};

export default function SummerVacationLookbook({
    desktopBlocks,
    mobileBlocks,
}: Props) {
    return (
        <>
            {/* Desktop */}
            <div className="blocks-section image-block-grid-section  hide-mobile">

                {desktopBlocks.map((block, index) => {

                    if (block.type === "three_images") {
                        return (
                            <ThreeImagesBlock
                                key={index}
                                images={block.images ?? []}
                            />
                        );
                    }

                    if (block.type === "single_image") {
                        return block.image ? (
                            <SingleImageBlock
                                key={index}
                                image={block.image}
                            />
                        ) : null;
                    }

                    return (
                        <TwoImagesBlock
                            key={index}
                            large={block.large!}
                            small={block.small!}
                            reverse={block.reverse}
                        />
                    );
                })}

            </div>

            {/* Mobile */}
            <div className="desktop-blocks-section image-block-grid-section hide-desktop">

                {mobileBlocks.map((block, index) => {

                    if (block.type === "two_images") {
                        return (
                            <div
                                key={index}
                                className="two-images-block"
                            >

                                {block.images.map(
                                    (image, imageIndex) => (
                                        <a
                                            key={imageIndex}
                                            href={image.href}
                                            className="image-wrapper"
                                        >
                                            <img
                                                src={image.img}
                                                alt={image.alt}
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
                                        ?.href || "#"
                                }
                                className="image-wrapper"
                            >
                                <img
                                    src={
                                        block.images[0]
                                            ?.img
                                    }
                                    alt={
                                        block.images[0]
                                            ?.alt || ""
                                    }
                                />
                            </a>
                        </div>
                    );
                })}

            </div>
        </>
    );
}