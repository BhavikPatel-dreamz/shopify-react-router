import React from "react";

type ImageItem = {
    href: string;
    img: string;
    alt: string;
};

type Props = {
    large: ImageItem;
    small: ImageItem;
    reverse?: boolean;
};

export default function TwoImagesBlock({
    large,
    small,
    reverse,
}: Props) {
    return (
        <div
            className={`two-images-block ${reverse ? "reverse" : ""
                }`}
        >
            <a
                href={large.href}
                className="image-wrapper large"
            >
                <img
                    src={large.img}
                    alt={large.alt}
                />
            </a>

            <a
                href={small.href}
                className="image-wrapper small"
            >
                <img
                    src={small.img}
                    alt={small.alt}
                />
            </a>
        </div>
    );
}