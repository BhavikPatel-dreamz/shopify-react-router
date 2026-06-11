import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

// Empty cart slides data
const emptyCartSlides = [
  {
    url: "/pages/rare-rabbit",
    image: "//86e75ac3.nitro.getn7.io/cdn/shop/files/1_1_5x_5f0e7fc9-b8f3-4a2d-a844-238210cb466a.webp?v=1755078836&width=2732&aio=w-2732"
  },
  {
    url: "/pages/rareism",
    image: "//86e75ac3.nitro.getn7.io/cdn/shop/files/2_1_5x_4fad163e-1028-4118-bd81-453cb63b0fd2.webp?v=1755079045&width=2732&aio=w-2732"
  },
  {
    url: "/pages/kids",
    image: "//86e75ac3.nitro.getn7.io/cdn/shop/files/3_1_5x_8ed086ff-8ca8-43f0-b366-57862f821502.webp?v=1755079562&width=2732&aio=w-2732"
  }
];

export default function EmptyCart() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Ensure Swiper starts at the first slide after mount
    if (swiperRef.current) {
      // Small delay to ensure Swiper is fully initialized
      setTimeout(() => {
        if (swiperRef.current && !swiperRef.current.destroyed) {
          swiperRef.current.slideTo(0, 0);
        }
      }, 0);
    }
  }, []);

  return (
    <>
      {/* Slider Section with Swiper */}
      <div className="cart-slider-wrapper">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop={true}
          initialSlide={0}
          className="empty-cart-swiper rare-rabbit-js"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Immediately slide to first slide
            swiper.slideTo(0, 0);
          }}
        >
          {emptyCartSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <a href={slide.url}>
                <div className="image-wrapper">
                  <img 
                    src={slide.image}
                    width="2732" 
                    height="1639" 
                    loading="eager" 
                    className="image-res" 
                    sizes="100vw" 
                    alt="empty-cart-banner-img"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Start Shopping Button */}
      <div className="start-shopping-wrapper">
        <a href="/pages/rare-rabbit" className="start-shopping-btn">
          START SHOPPING
        </a>
      </div>

      {/* Gradient Text Title */}
      <div className="gradient-text-title">
        <div className="image-wrapper">
          <img 
            alt="light_bottom_image.png" 
            src="//86e75ac3.nitro.getn7.io/cdn/shop/files/light_bottom_image.png?v=1717998205" 
            width="428" 
            height="133" 
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}