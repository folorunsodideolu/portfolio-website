"use client";
import {
  CarouselSliceDefaultPrimaryImagesItem,
  Simplify,
} from "@/prismicio-types";
import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { GroupField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type SlideImageProps = {
  data: GroupField<Simplify<CarouselSliceDefaultPrimaryImagesItem>>;
};

export function ImageSwiper({ data }: SlideImageProps) {
  const getBlurSvg = staticBlurDataUrl();

  const swiperWrappedRef = useRef<HTMLElement | null>(null);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
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
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      className="mySwiper"
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

      {/* arrow navigation */}
      <div className="relative bottom-16 flex items-center justify-center gap-x-[10px] mt-8">
        <div className="swiper-button-prev after:content-none relative h-10 w-10 mr-8">
          <button
            type="button"
            className="z-40 h-10 w-10 rounded-full bg-white flex items-center justify-center disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left-icon lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </button>
        </div>
        <div className="swiper-button-next after:content-none relative h-10 w-10">
          <button
            type="button"
            className="z-40 h-10 w-10 rounded-full bg-white flex items-center justify-center disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Swiper>
  );
}
