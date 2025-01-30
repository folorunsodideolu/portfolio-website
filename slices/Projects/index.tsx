import { staticBlurDataUrl } from "@/utils/staticBlurUrl";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="works px-4 lg:px-24 bg-black text-white"
      id="projects"
    >
      <div className="works_wrapper">
        <div className="inline-flex pt-4 items-baseline gap-4 lg:gap-x-[3.2rem] lg:w-[35%] w-full border-b-2 border-white border-solid">
          <h1 className="text-[2rem] lg:text-[7rem]  uppercase font-amble">
            {slice.primary.heading}
          </h1>
        </div>

        <div className="relative pt-[6rem] lg:pt-[12rem]">
          {/* Grid view */}
          <div className="works_grid">
            {React.Children.toArray(
              slice.primary.project.map((item, index) => (
                <div
                  className={
                    index % 2 === 1
                      ? "--item-left works_grid_item"
                      : "works_grid_item"
                  }
                >
                  <PrismicNextImage
                    field={item.image}
                    width={item.image.dimensions?.width}
                    height={item.image.dimensions?.height}
                    className="works_grid_item_image"
                    placeholder="blur"
                    blurDataURL={getBlurSvg}
                  />

                  <div className="works_grid_item_info">
                    <h2 className="text-[2rem] md:text-[3.5rem] xl:text-[4.8rem] uppercase">
                      {item.title}
                    </h2>

                    <span className="text-[1.5rem] xl:text-[2.4rem] capitalize text-justify">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
