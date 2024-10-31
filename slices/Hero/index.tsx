"use client";

import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const getBlurSvg = staticBlurDataUrl();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-32 lg:pt-40"
      id="home"
    >
      <div className="px-4 lg:px-24">
        <div className="mx-auto w-full text-center py-4 line">
          <span className="font-amble uppercase text-[1.5rem] font-extrabold md:text-[3rem] lg:text-[5rem] lg:leading-[7.25rem] pt-2">
            {slice.primary.text_one}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#060c1c] via-[#c7472f] to-[#e99f36]">
              {` ${slice.primary.text_two} `}
            </span>
            {slice.primary.text_three}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 curved lg:gap-x-8">
        {React.Children.toArray(
          slice.primary.images.map((image, index) => (
            <PrismicNextImage
              key={index}
              field={image.image}
              width={image.image.dimensions?.width}
              height={image.image.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Hero;
