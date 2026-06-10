// app/components/LandingImageSection.tsx

import React from "react";

export type SingleImageItem = {
    type: "single-image";
    href?: string;
    desktopImg: string;
    mobileImg?: string;
    alt?: string;
    showCenterImage?: boolean;
};

export type SplitImageChild = {
    href?: string;
    desktopImg: string;
    mobileImg?: string;
    alt?: string;
};

export type SplitImageItem = {
    type: "split-image";

    image1: SplitImageChild;

    image2: SplitImageChild;
};

export type LandingImageItem =
    | SingleImageItem
    | SplitImageItem;

type Props = {
    items: LandingImageItem[];

    enablePageWidth?: boolean;

    desktopPaddingTopBottom?: number;
    desktopPaddingLeftRight?: number;

    mobilePaddingTopBottom?: number;
    mobilePaddingLeftRight?: number;

    sectionId?: string;
};

const LandingImageSection: React.FC<Props> = ({
    items,

    enablePageWidth = false,

    desktopPaddingTopBottom = 10,
    desktopPaddingLeftRight = 10,

    mobilePaddingTopBottom = 10,
    mobilePaddingLeftRight = 10,

    sectionId = "landing-image",
}) => {
    return (
        <>
            <style>
                {`
          .section-${sectionId}-padding {
            padding: ${desktopPaddingTopBottom}px ${desktopPaddingLeftRight}px;
          }

          @media screen and (max-width: 767px) {
            .section-${sectionId}-padding {
              padding: ${mobilePaddingTopBottom}px ${mobilePaddingLeftRight}px;
            }
          }
        `}
            </style>

            <div
                className={`final-landing-image-section section-${sectionId}-padding ${enablePageWidth ? "page-width" : ""
                    }`}
                id={sectionId}
            >
                <div className="final-landing-image-wrapper">
                    {items.map((item, index) => {
                        /*
                         * ==========================
                         * SINGLE IMAGE
                         * ==========================
                         */
                        if (item.type === "single-image") {
                            return (
                                <div
                                    key={`single-${index}`}
                                    className={`single-image-wrapper ${item.showCenterImage ? "show-center-image" : ""
                                        }`}
                                >
                                    <a href={item.href || "#"}>
                                        {/* Desktop */}
                                        <div className="desktop-img xs-hide">
                                            <div className="image-wrapper">
                                                <img
                                                    src={item.desktopImg}
                                                    alt={item.alt || ""}
                                                    loading="lazy"
                                                    sizes="100vw"
                                                />
                                            </div>
                                        </div>

                                        {/* Mobile */}
                                        <div className="mobile-img xs-show">
                                            <div className="image-wrapper">
                                                <img
                                                    src={item.mobileImg || item.desktopImg}
                                                    alt={item.alt || ""}
                                                    loading="lazy"
                                                    sizes="100vw"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        }

                        /*
                         * ==========================
                         * SPLIT IMAGE
                         * ==========================
                         */
                        return (
                            <div
                                key={`split-${index}`}
                                className="split-image-wrapper"
                            >
                                {/* Image One */}
                                <div className="image-one">
                                    <a href={item.image1.href || "#"}>
                                        {/* Desktop */}
                                        <div className="desktop-img xs-hide">
                                            <div className="image-wrapper">
                                                <img
                                                    src={item.image1.desktopImg}
                                                    alt={item.image1.alt || ""}
                                                    loading="lazy"
                                                    sizes="100vw"
                                                />
                                            </div>
                                        </div>

                                        {/* Mobile */}
                                        <div className="mobile-img xs-show">
                                            <div className="image-wrapper">
                                                <img
                                                    src={
                                                        item.image1.mobileImg ||
                                                        item.image1.desktopImg
                                                    }
                                                    alt={item.image1.alt || ""}
                                                    loading="lazy"
                                                    sizes="100vw"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* Image Two */}
                                <div className="image-two">
                                    <a href={item.image2.href || "#"}>
                                        {/* Desktop */}
                                        <div className="desktop-img xs-hide">
                                            <div className="image-wrapper">
                                                <img
                                                    src={item.image2.desktopImg}
                                                    alt={item.image2.alt || ""}
                                                    loading="lazy"
                                                    sizes="100vw"
                                                />
                                            </div>
                                        </div>

                                        {/* Mobile */}
                                        <div className="mobile-img xs-show">
                                            <div className="image-wrapper">
                                                <img
                                                    src={
                                                        item.image2.mobileImg ||
                                                        item.image2.desktopImg
                                                    }
                                                    alt={item.image2.alt || ""}
                                                    loading="lazy"
                                                    sizes="100vw"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default LandingImageSection;