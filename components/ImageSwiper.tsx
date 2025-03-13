"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    CarouselSliceDefaultPrimaryImagesItem,
    Simplify,
} from "@/prismicio-types";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { GroupField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useRef } from "react";

type SlideImageProps = {
  data: GroupField<Simplify<CarouselSliceDefaultPrimaryImagesItem>>;
};

export function ImageSwiper({ data }: SlideImageProps) {
  const getBlurSvg = staticBlurDataUrl();

  const swiperWrappedRef = useRef<HTMLElement | null>(null);

  return (
    <Swiper
      modules={[Pagination]}
      grabCursor={true}
      initialSlide={3}
      centeredSlides={true}
      spaceBetween={50}
      slidesPerView={3}
      speed={800}
      slideToClickedSlide
      pagination={{ clickable: true }}
      breakpoints={{
        375: { spaceBetween: 0, slidesPerView: 1 },
        425: { spaceBetween: 0, slidesPerView: 1 },
        768: { spaceBetween: 15, slidesPerView: 2 },
        1440: { spaceBetween: 20, slidesPerView: 3 },
      }}
      onSwiper={(swiper) => {
        swiperWrappedRef.current = swiper.wrapperEl;
      }}
    >
      {data.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            position: "relative",
            width: "500px",
            height: "600px",
            borderRadius: "10px",
            overflow: "hidden",
            transition: "1s",
            userSelect: "none",
          }}
        >
          <PrismicNextImage
            field={slide.image}
            width={slide.image?.dimensions?.width}
            height={slide.image?.dimensions?.height}
            placeholder="blur"
            blurDataURL={getBlurSvg}
            className="cursor-pointer"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
