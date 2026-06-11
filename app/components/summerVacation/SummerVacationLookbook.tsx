import React from "react";

import type {
    SummerVacationBlock,
} from "~/data/rareOnesSummerVacation";

import ThreeImagesBlock from "./ThreeImagesBlock";
import SingleImageBlock from "./SingleImageBlock";
import TwoImagesBlock from "./TwoImagesBlock";

type Props = {
    blocks: SummerVacationBlock[];
};

export default function SummerVacationLookbook({
    blocks,
}: Props) {
    return (
        <div className="desktop-blocks-section">

            {blocks.map((block, index) => {

                if (
                    block.type ===
                    "three_images"
                ) {
                    return (
                        <ThreeImagesBlock
                            key={index}
                            images={
                                block.images
                            }
                        />
                    );
                }

                if (
                    block.type ===
                    "single_image"
                ) {
                    return (
                        <SingleImageBlock
                            key={index}
                            image={block.image}
                        />
                    );
                }

                return (
                    <TwoImagesBlock
                        key={index}
                        large={block.large}
                        small={block.small}
                        reverse={
                            block.reverse
                        }
                    />
                );
            })}

        </div>
    );
}