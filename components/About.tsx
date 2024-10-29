"use client";

import { useGSAP } from "@gsap/react";
import React, { MutableRefObject, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef<T>(): [MutableRefObject<T[]>, (ref: T | null) => void] {
    const lettersRef = useRef<T[]>([]);
    const setRef = (ref: T | null) => {
      if (ref && !lettersRef.current.includes(ref)) {
        lettersRef.current.push(ref);
      }
    };
    return [lettersRef, setRef];
  }

  const text =
    "My expertise lies in creating hyper-realistic artwork using pastels, where I focus on capturing intricate details, lifelike textures, and vibrant colors to bring my subjects to life.";

  useGSAP(() => {
    gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom top",
      },
      color: "#202020",
      duration: 5,
      stagger: 1,
    });
  }, {});

  return (
    <section className="px-4 lg:px-24 pb-32">
      <div className="flex justify-center items-center text-[1rem] md:text-[1.5rem] font-bold pb-4 font-questa">
        A blend of talented genius in art
      </div>
      <div ref={triggerRef} className="md:text-center pb-8">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            ref={setlettersRef}
            className="about-first-text break-words text-[1.2rem] md:text-[2.5rem] first-letter:text-7xl"
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="-m-1 flex flex-wrap md:-m-2">
        {/* First Image Gallery */}
        <div className="flex w-full md:w-1/3 flex-wrap">
          <div className="w-[50%] p-1 md:p-2">
            <Image
              src="/images/michelle.webp"
              alt="folorunso"
              width={2686}
              height={2149}
            />
          </div>
          <div className="w-[50%] p-1 md:p-2">
            <Image
              src="/images/michelle.webp"
              alt="folorunso"
              width={2686}
              height={2149}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <Image
              src="/images/michelle.webp"
              alt="folorunso"
              width={2686}
              height={2149}
            />
          </div>
        </div>

        {/* Second Image Gallery */}

        <div className="flex w-full md:w-1/3 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <Image
              src="/images/michelle.webp"
              alt="folorunso"
              width={2686}
              height={2149}
            />
          </div>
          <div className="w-[50%] p-1 md:p-2">
            <Image
              src="/images/michelle.webp"
              alt="folorunso"
              width={2686}
              height={2149}
            />
          </div>
          <div className="w-[50%] p-1 md:p-2">
            <Image
              src="/images/michelle.webp"
              alt="folorunso"
              width={2686}
              height={2149}
            />
          </div>
        </div>

        {/* Third */}
        <div className="flex w-full md:w-1/3 flex-wrap">
          <div className="w-[50%] p-1 md:p-2">
            <Image
              src="/images/michelle.webp"
              alt="folorunso"
              width={2686}
              height={2149}
            />
          </div>
          <div className="w-[50%] p-1 md:p-2">
            <Image
              src="/images/michelle.webp"
              alt="folorunso"
              width={2686}
              height={2149}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <Image
              src="/images/michelle.webp"
              alt="folorunso"
              width={2686}
              height={2149}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
