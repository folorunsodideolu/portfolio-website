"use client";

import { useRef, useEffect } from "react";

export default function Gradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!gradientRef.current) {
        return;
      }
      const { clientWidth, clientHeight } = gradientRef.current;
      const mouseX = (event.clientX / clientWidth) * 100;
      const mouseY = (event.clientY / clientHeight) * 100;

      gradientRef.current.style.setProperty("--mouseX", `${mouseX}%`);
      gradientRef.current.style.setProperty("--mouseY", `${mouseY}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="gradient" ref={gradientRef}></div>;
}

export function Footer() {
  const year = new Date().getFullYear();

  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!footerRef.current) {
        return;
      }
      const { clientWidth, clientHeight } = footerRef.current;
      const mouseX = (event.clientX / clientWidth) * 100;
      const mouseY = (event.clientY / clientHeight) * 100;

      footerRef.current.style.setProperty("--mouseX", `${mouseX}%`);
      footerRef.current.style.setProperty("--mouseY", `${mouseY}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [footerRef]);

  return (
    <footer
      className="relative px-3 py-4 gradient text-white"
      ref={footerRef}
      id="contact"
    >
      <div className="hidden lg:block mb-[10vh]">
        <div className="mx-1 uppercase font-semibold py-10 text-[11.5vmax] my-1 leading-none">
          Folorunso <br /> Dideolu
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between uppercase">
        <div className="capitalize">follow us</div>
        <div className="text-4xl underline">
          <a href="mailto:folorunsodideolu@gmail.com">email</a>
        </div>
        <div className="text-4xl underline">
          <a
            href="https://www.instagram.com/folorunsodideolu/"
            target="_blank"
            rel="noreferrer noopener"
          >
            instagram
          </a>
        </div>
        <div className="text-4xl underline">
          <a
            href="https://web.facebook.com/benjamin.joseph.313/"
            target="_blank"
            rel="noreferrer noopener"
          >
            facebook
          </a>
        </div>
        <div className="text-4xl underline">
          <a
            href="https://www.tiktok.com/@folorunsodideolu"
            target="_blank"
            rel="noreferrer noopener"
          >
            tiktok
          </a>
        </div>
        <div className="text-4xl underline">
          <a
            href="https://www.x.com/@folorunsodideolu"
            target="_blank"
            rel="noreferrer noopener"
          >
            x
          </a>
        </div>
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
