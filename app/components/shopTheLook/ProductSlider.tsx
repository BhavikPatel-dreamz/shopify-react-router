import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../collection/ProductCard";

interface Props {
    products: any[];
    sliderIndex: number;
}

export default function ProductSlider({
    products,
    sliderIndex,
}: Props) {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const swiperInstanceRef = useRef<Swiper | null>(null);

    useEffect(() => {
        if (!sliderRef.current) return;

        // Destroy existing swiper before reinitializing
        if (swiperInstanceRef.current) {
            swiperInstanceRef.current.destroy(true, true);
        }

        const sliderElement = sliderRef.current;
        const wrapper = sliderElement.querySelector(".swiper-wrapper");
        const totalSlides = products?.length ?? 0;

        // Match reference site behavior
        if (wrapper) {
            if (totalSlides <= 4) {
                wrapper.classList.add("product-card-center");
            } else {
                wrapper.classList.remove("product-card-center");
            }
        }

        if (totalSlides < 5) {
            sliderElement.classList.add("hide-arrows");
        } else {
            sliderElement.classList.remove("hide-arrows");
        }

        swiperInstanceRef.current = new Swiper(sliderElement, {
            modules: [Navigation],

            slidesPerView: window.innerWidth < 768 ? 2.5 : 4,
            spaceBetween: window.innerWidth < 768 ? 5 : 20,

            loop: totalSlides > 4,

            navigation: {
                nextEl: `.next-btn${sliderIndex}`,
                prevEl: `.prev-btn${sliderIndex}`,
            },

            breakpoints: {
                0: {
                    slidesPerView: 2.5,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
        });

        return () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.destroy(true, true);
                swiperInstanceRef.current = null;
            }
        };
    }, [products, sliderIndex]);

    return (
        <div className="bottom-wrapper">
            <div
                ref={sliderRef}
                className="look-products products-slider-wrapper swiper products-slider-js"
            >
                <div className="swiper-wrapper product-card-center">
                    {products?.map((product: any, index: number) => (
                        <div
                            key={product.id ?? index}
                            className="swiper-slide"
                            data-target={index + 1}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <div
                    className={`swiper-button-prev prev-btn${sliderIndex}`}
                >
                    <svg>
                        <use href="#icon-menu-close-btn" />
                    </svg>
                </div>

                <div
                    className={`swiper-button-next next-btn${sliderIndex}`}
                >
                    <svg>
                        <use href="#icon-menu-close-btn" />
                    </svg>
                </div>
            </div>
        </div>
    );
}