import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Artist`.
 */
export type ArtistProps = SliceComponentProps<Content.ArtistSlice>;

/**
 * Component for "Artist" Slices.
 */
const Artist = ({ slice }: ArtistProps): JSX.Element => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 lg:px-24 py-32"
      id="artist"
    >
      <div className="text-center mx-auto pt-4 items-baseline gap-4 lg:gap-x-[3.2rem] w-[70vw] border-b-2 border-white border-solid mb-16">
        <h1 className="text-[2rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[7rem]  uppercase font-amble">
          {slice.primary.section_title}
        </h1>
      </div>
      <div className="grid xl:grid-cols-2 gap-x-16 gap-y-4">
        <div className="xl:order-last">
          <PrismicNextImage
            field={slice.primary.artistimage}
            width={slice.primary.artistimage.dimensions?.width}
            height={slice.primary.artistimage.dimensions?.height}
            placeholder="blur"
            blurDataURL={getBlurSvg}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 text-[1.2rem] md:text-[1.5rem]">
          <span className="text-center font-extrabold font-amble underline underline-offset-3 decoration-[2px]">
            {slice.primary.title}
          </span>
          <span className="text-justify first-letter:text-5xl">
            {slice.primary.text1}
          </span>
          <span className="text-justify">{slice.primary.text2}</span>
          <span className="text-justify">{slice.primary.text3}</span>
        </div>
      </div>
    </section>
  );
};

export default Artist;
