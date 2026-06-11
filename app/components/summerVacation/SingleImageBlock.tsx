import React from "react";

type ImageItem = {
    href: string;
    img: string;
    alt: string;
};

type Props = {
    image: ImageItem;
};

export default function SingleImageBlock({
    image,
}: Props) {
    return (
        <div className="single-image-block">

            <a
                href={image.href}
                className="image-wrapper"
            >
                <img
                    src={image.img}
                    alt={image.alt}
                />
            </a>

        </div>
    );
}