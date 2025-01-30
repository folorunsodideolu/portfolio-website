import { ImageCarousel } from "@/components/ImageCarousel";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 lg:px-24 py-32"
      id="about"
    >
      <div className="flex justify-center items-center text-[1rem] md:text-[1.5rem] font-bold pb-4 font-amble">
        {slice.primary.title}
      </div>
      <div className="text-justify md:text-center pb-8">
        <span className="break-words text-[1.2rem] md:text-[2.5rem] first-letter:text-7xl">
          {slice.primary.content}
        </span>
      </div>

      <div className="relative overflow-hidden w-full h-full py-20">
        <ImageCarousel slides={slice.primary.images} />
      </div>
    </section>
  );
};

export default Carousel;
