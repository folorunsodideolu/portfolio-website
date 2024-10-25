import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <div className="pt-32 lg:pt-40  mb-[6.1875rem]">
      <div className="px-4 lg:px-24">
        {/* <div className="w-full h-[1px] bg-black"></div>
        <div className="flex justify-between w-full text-xs py-2">
          <div>Who We Are</div>
          <div>Who We Are</div>
          <div>Who We Are</div>
        </div> */}
        <div className="mx-auto w-full text-center py-4">
          <span className="uppercase text-[1.8rem] font-extrabold md:text-[3rem] lg:text-[7rem] lg:leading-[7.25rem] pt-2">
            Welcome to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#060c1c] via-[#c7472f] to-[#e99f36]">
              {` Folorunso Dideolu’s `}
            </span>
            vibrant Nigerian pastel artistry.
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="grid grid-cols-4 curved lg:gap-x-8">
        <Image
          src="/images/row-1-column-1.webp"
          alt="folo"
          width={1000}
          height={50}
          className=""
        />
        <Image
          src="/images/row-1-column-2.webp"
          alt="folo"
          width={500}
          height={50}
          className=""
        />
        <Image
          src="/images/row-1-column-3.webp"
          alt="folo"
          width={500}
          height={50}
          className=""
        />
        <Image
          src="/images/row-1-column-4.webp"
          alt="folo"
          width={500}
          height={50}
          className=""
        />
      </div>
    </div>
  );
}
