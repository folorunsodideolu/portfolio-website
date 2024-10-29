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
        <div className="inline-flex pt-4 items-baseline gap-4 lg:gap-x-[3.2rem] lg:w-[70%] w-full border-b-2 border-white border-solid">
          <h1 className="text-[2rem] lg:text-[7rem]  uppercase font-questa">
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
                    blurDataURL={getBlurSvg}
                  />
                  <div className="works_grid_item_title">
                    <h3 className="text-[2rem] lg:text-[4.8rem] uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <div className="works_grid_item_info">
                    <h2 className="text-[2rem] lg:text-[9rem] uppercase font-questa">
                      {`( ${index + 1} )`}
                    </h2>
                    <span className="text-[1.5rem] lg:text-[2.4rem] capitalize">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))
            )}
            {/* 1st */}
            {/* <div className="works_grid_item">
              <Image
                src="/images/art.webp"
                alt="folorunso"
                width={2686}
                height={2149}
                className="works_grid_item_image"
              />
              <div className="works_grid_item_title">
                <h3 className="text-[2rem] lg:text-[4.8rem] uppercase">
                  Family Matters
                </h3>
              </div>
              <div className="works_grid_item_info">
                <h2 className="text-[2rem] lg:text-[9rem] uppercase font-mono">
                  ( 01 )
                </h2>
                <ul>
                  <li className="text-[1.5rem] lg:text-[2.4rem] capitalize">
                    Surface Preparation
                  </li>
                  <li className="text-[1.5rem] lg:text-[2.4rem] capitalize">
                    Layering and Blending
                  </li>
                  <li className="text-[1.5rem] lg:text-[2.4rem] capitalize">
                    Fixing and Framing
                  </li>
                </ul>
              </div>
            </div> */}

            {/* 2nd */}
            {/* <div className="works_grid_item --item-left">
              <Image
                src="/images/art.webp"
                alt="folorunso"
                width={2686}
                height={2149}
                className="works_grid_item_image"
              />
              <div className="works_grid_item_title">
                <h3 className="text-[4.8rem] uppercase">Family Matters</h3>
              </div>
              <div className="works_grid_item_info">
                <h2 className="text-[9rem] uppercase">( 01 )</h2>
                <ul>
                  <li className="text-[2.4rem] uppercase">
                    Surface Preparation
                  </li>
                  <li className="text-[2.4rem] uppercase">
                    Layering and Blending
                  </li>
                  <li className="text-[2.4rem] uppercase">
                    Fixing and Framing
                  </li>
                </ul>
              </div>
            </div> */}

            {/* 3rd */}
            {/* <div className="works_grid_item">
              <Image
                src="/images/art.webp"
                alt="folorunso"
                width={2686}
                height={2149}
                className="works_grid_item_image"
              />
              <div className="works_grid_item_title">
                <h3 className="text-[4.8rem] uppercase">Family Matters</h3>
              </div>
              <div className="works_grid_item_info">
                <h2 className="text-[9rem] uppercase">( 01 )</h2>
                <ul>
                  <li className="text-[2.4rem] uppercase">
                    Surface Preparation
                  </li>
                  <li className="text-[2.4rem] uppercase">
                    Layering and Blending
                  </li>
                  <li className="text-[2.4rem] uppercase">
                    Fixing and Framing
                  </li>
                </ul>
              </div>
            </div> */}

            {/* 4th */}
            {/* <div className="works_grid_item --item-left">
              <Image
                src="/images/art.webp"
                alt="folorunso"
                width={2686}
                height={2149}
                className="works_grid_item_image"
              />
              <div className="works_grid_item_title">
                <h3 className="text-[4.8rem] uppercase">Family Matters</h3>
              </div>
              <div className="works_grid_item_info">
                <h2 className="text-[9rem] uppercase">( 01 )</h2>
                <ul>
                  <li className="text-[2.4rem] uppercase">
                    Surface Preparation
                  </li>
                  <li className="text-[2.4rem] uppercase">
                    Layering and Blending
                  </li>
                  <li className="text-[2.4rem] uppercase">
                    Fixing and Framing
                  </li>
                </ul>
              </div>
            </div> */}

            {/* 5th */}
            {/* <div className="works_grid_item">
              <Image
                src="/images/art.webp"
                alt="folorunso"
                width={2686}
                height={2149}
                className="works_grid_item_image"
              />
              <div className="works_grid_item_title">
                <h3 className="text-[4.8rem] uppercase">Family Matters</h3>
              </div>
              <div className="works_grid_item_info">
                <h2 className="text-[9rem] uppercase">( 01 )</h2>
                <ul>
                  <li className="text-[2.4rem] uppercase">
                    Surface Preparation
                  </li>
                  <li className="text-[2.4rem] uppercase">
                    Layering and Blending
                  </li>
                  <li className="text-[2.4rem] uppercase">
                    Fixing and Framing
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
