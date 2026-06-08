import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {
  images: {
    id: string;
    url: string;
    altText?: string;
  }[];
}

export default function ProductGallery({ images }: Props) {
  return (
    <>
      {/* Mobile Slider */}
      <div className="lg:hidden">
        <Swiper spaceBetween={0} slidesPerView={1}>
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.url}
                alt={image.altText ?? ""}
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-2 gap-2">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.altText ?? ""}
            className="w-full"
          />
        ))}
      </div>
    </>
  );
}