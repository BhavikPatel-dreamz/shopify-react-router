import React from "react";

type ImageItem = {
    href: string;
    img: string;
    alt: string;
};

type Props = {
    images: ImageItem[];
};

export default function ThreeImagesBlock({
    images,
}: Props) {
    return (
        <div className="three-images-block">

            {images.map(
                (image, index) => (
                    <a
                        key={index}
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