import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
    const getBlurSvg = staticBlurDataUrl();
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 lg:px-24 py-32"
    >
      <div className="relative rounded-[1.25rem] overflow-hidden">
        <div className="absolute inset-0 bg-black/70 -z-[1]" />

        <div className="absolute left-0 top-0 -z-[2]">
          <PrismicNextImage
            field={slice.primary.image}
            width={slice.primary.image.dimensions?.width}
            // height={slice.primary.image.dimensions?.height}
            className="object-cover h-[28.125rem] lg:h-[37.5rem] xl:h-full"
            placeholder="blur"
            blurDataURL={getBlurSvg}
          />
        </div>

        <div
          className="
            h-full 
            w-full 
            overflow-hidden 
            bg-fixed 
            px-4 
            lg:px-[6.75rem] 
            space-y-2 
            lg:space-y-8"
        >
          <div className=" flex flex-col justify-center items-center text-center rounded-[1.25rem] py-16 space-y-8">
            <span className="text-white font-roboto text-[1rem] font-medium md:text-[1.25rem] uppercase">
              {slice.primary.title}
            </span>
            <span className="text-white text-[1.25rem] md:text-[2rem] xl:text-[2.5rem] xl:max-w-[70vw] font-extrabold">
              {slice.primary.content}
            </span>

            <PrismicNextLink
              field={slice.primary.button_link}
              className=" inline-block text-[1.25rem] bg-[#3138B7] py-[1rem] px-[1.875rem]
                rounded-[10px] text-center text-white transition-all duration-300 hover:text-black hover:bg-white"
            >
              {slice.primary.button_text}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
