import Image from "next/image";

export function Projects() {
  return (
    <section className="works px-4 lg:px-24 bg-black text-white">
      <div className="works_wrapper">
        <div className="inline-flex pt-4 items-baseline gap-4 lg:gap-x-[3.2rem] lg:w-[70%] w-full border-b-2 border-white border-solid">
          <h1 className="text-[2rem] lg:text-[7rem]  uppercase mix-blend-difference">
            All Our
          </h1>
          <h1 className="text-[1.9rem] lg:text-[6rem] uppercase font-mono mix-blend-difference">
            Projects
          </h1>
        </div>

        <div className="relative pt-[6rem] lg:pt-[12rem]">
          {/* Grid view */}
          <div className="works_grid">
            {/* 1st */}
            <div className="works_grid_item">
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
            </div>

            {/* 2nd */}
            <div className="works_grid_item --item-left">
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
            </div>

            {/* 3rd */}
            <div className="works_grid_item">
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
            </div>

            {/* 4th */}
            <div className="works_grid_item --item-left">
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
            </div>

            {/* 5th */}
            <div className="works_grid_item">
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
            </div>
          </div>

          {/* Index view */}
          <div className="works_index"></div>
        </div>
      </div>
    </section>
  );
}
