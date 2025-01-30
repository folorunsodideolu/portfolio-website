"use client";

import { PrismicNextLink } from "@prismicio/next";
import { Icons } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative px-3 py-4  text-white bg-[#0e0e0e] overflow-x-hidden"
      id="contact"
    >
      <div className="mb-[10vh]">
        <div className="mx-1 uppercase font-semibold py-10 text-4xl md:text-[11.5vmax] my-1 leading-none">
          <span>
            Folorunso <br /> Dideolu
          </span>
        </div>
      </div>
      <div className="flex flex-row items-start lg:items-center justify-between uppercase">
        <div className="hidden lg:block capitalize">follow us</div>
        <div className="text-4xl underline">
          <PrismicNextLink href="mailto:folorunsodideolu@gmail.com">
            <Icons.Mail className="w-12" />
          </PrismicNextLink>
        </div>
        <PrismicNextLink
          href="https://www.instagram.com/folorunsodideolu/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icons.Instagram className="w-12" />
        </PrismicNextLink>

        <PrismicNextLink
          href="https://web.facebook.com/benjamin.joseph.313/"
          target="_blank"
          rel="noreferrer noopener"
          className=""
        >
          <Icons.Facebook className="w-12" />
        </PrismicNextLink>

        <PrismicNextLink
          href="https://www.tiktok.com/@folorunsodideolu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icons.Tiktok className="w-12" />
        </PrismicNextLink>
        <PrismicNextLink
          href="https://www.x.com/@folorunsodideolu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icons.X className="w-12" />
        </PrismicNextLink>
      </div>

      <div className="flex flex-col lg:flex-row lg:mt-20 items-start lg:items-end justify-between">
        <div className="my-5 lg:my-0">copyright {year} - fd</div>
        <div>
          a pastel <br /> artist in Nigeria
        </div>
      </div>
    </footer>
  );
}
