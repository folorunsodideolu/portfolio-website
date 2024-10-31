"use client";

import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  // const [lettersRef, setlettersRef] = useArrayRef();
  // const triggerRef = useRef(null);
  const getBlurSvg = staticBlurDataUrl();

  // function useArrayRef<T>(): [MutableRefObject<T[]>, (ref: T | null) => void] {
  //   const lettersRef = useRef<T[]>([]);
  //   const setRef = (ref: T | null) => {
  //     if (ref && !lettersRef.current.includes(ref)) {
  //       lettersRef.current.push(ref);
  //     }
  //   };
  //   return [lettersRef, setRef];
  // }

  // useGSAP(() => {
  //   gsap.to(lettersRef.current, {
  //     scrollTrigger: {
  //       trigger: triggerRef.current,
  //       scrub: true,
  //       start: "top center",
  //       end: "bottom top",
  //     },
  //     color: "#202020",
  //     duration: 5,
  //     stagger: 1,
  //   });
  // }, {});

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 lg:px-24 pb-32"
      id="about"
    >
      <div className="flex justify-center items-center text-[1rem] md:text-[1.5rem] font-bold pb-4 font-amble">
        {slice.primary.heading}
      </div>
      <div className="md:text-center pb-8">
        <span className="text-black break-words text-[1.2rem] md:text-[2.5rem] first-letter:text-7xl">
          {slice.primary.subtitle}
        </span>
      </div>

      <div className="-m-1 flex flex-wrap md:-m-2">
        {/* First Image Gallery */}
        <div className="flex w-full md:w-1/3 flex-wrap">
          <div className="w-[50%] p-1 md:p-2">
            <PrismicNextImage
              field={slice.primary.image3}
              width={slice.primary.image3.dimensions?.width}
              height={slice.primary.image3.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
          <div className="w-[50%] p-1 md:p-2">
            <PrismicNextImage
              field={slice.primary.image1}
              width={slice.primary.image1.dimensions?.width}
              height={slice.primary.image1.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <PrismicNextImage
              field={slice.primary.image8}
              width={slice.primary.image8.dimensions?.width}
              height={slice.primary.image8.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
        </div>

        {/* Second Image Gallery */}

        <div className="flex w-full md:w-1/3 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <PrismicNextImage
              field={slice.primary.image7}
              width={slice.primary.image7.dimensions?.width}
              height={slice.primary.image7.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
          <div className="w-[50%] p-1 md:p-2">
            <PrismicNextImage
              field={slice.primary.image9}
              width={slice.primary.image9.dimensions?.width}
              height={slice.primary.image9.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
          <div className="w-[50%] p-1 md:p-2">
            <PrismicNextImage
              field={slice.primary.image2}
              width={slice.primary.image2.dimensions?.width}
              height={slice.primary.image2.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
        </div>

        {/* Third */}
        <div className="flex w-full md:w-1/3 flex-wrap">
          <div className="w-[50%] p-1 md:p-2">
            <PrismicNextImage
              field={slice.primary.image4}
              width={slice.primary.image4.dimensions?.width}
              height={slice.primary.image4.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
          <div className="w-[50%] p-1 md:p-2">
            <PrismicNextImage
              field={slice.primary.image5}
              width={slice.primary.image5.dimensions?.width}
              height={slice.primary.image5.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>

          <div className="w-full p-1 md:p-2">
            <PrismicNextImage
              field={slice.primary.image6}
              width={slice.primary.image6.dimensions?.width}
              height={slice.primary.image6.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
