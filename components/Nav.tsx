"use client";

import React, { useCallback, useState } from "react";
import { Link as Links } from "react-scroll";
import Link from "next/link";

import menu from "@/public/icons/menu-outline.svg";
import close from "@/public/icons/close-outline.svg";
import Image from "next/image";

type NavItem = {
  label: string;
  path: string;
};

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Intro", path: "intro" },
    { label: "About", path: "about" },
    { label: "Projects", path: "projects" },
    { label: "Artist", path: "artist" },
    { label: "Contact", path: "contact" },
  ];

  const handleClick = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <nav className="bg-transparent fixed backdrop-blur-xl z-[9999] w-full top-0">
      <div className="w-full flex flex-wrap items-center justify-between px-4 sm:px-8 xl:px-[6.25rem] py-4">
        {/* <!-- Logo  --> */}
        <Link href={"/"}>
          <h1 className="font-lavishly font-extrabold capitalize text-[2.25rem]">
            Folorunso Dideolu
          </h1>
        </Link>
        <button
          type="button"
          onClick={handleClick}
          className="
            inline-flex 
            w-[46px] 
            h-[46px] 
            rounded-full 
            border-white 
            border-[1.84px]  
            items-center 
            p-2  
            justify-center 
            lg:hidden 
            focus:outline-none "
        >
          {isMenuOpen ? (
            <Image src={close} className="w-9 object-contain" alt="icon" />
          ) : (
            <Image src={menu} className="w-9 object-contain" alt="icon" />
          )}
        </button>
        <div className="hidden w-full lg:block md:w-auto justify-end">
          <div
            className="
              font-medium 
              text-[#1B1B1B] 
              flex 
              flex-col 
              p-4 
              md:p-0 
              mt-4 
              border 
              gap-2     
              xl:gap-[3.75rem] 
              md:flex-row 
              md:space-x-8 
              md:mt-0 
              md:border-0"
          >
            {/* Nav Desktop */}
            {React.Children.toArray(
              navItems.map(({ label, path }, index) => (
                <Links
                  key={index}
                  activeClass="active"
                  smooth
                  spy
                  to={path}
                  className="
                      h-[40px]
                      w-[100px]
                      lg:inline-flex 
                      text-white
                      hidden
                      text-[1.25rem]
                      font-semibold
                      cursor-pointer 
                      hover:font-bold 
                      hover:text-black  
                      hover:px-3
                      hover:bg-white
                      hover:items-center
                      hover:rounded-[20px]
                      focus:font-bold 
                      focus:text-black
                      transition-all duration-500
                      ease-in-out
                      "
                >
                  {label}
                </Links>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute left-0 top-0 my-auto h-screen w-[100%] bg-[#011341] -z-[1] overflow-hidden">
          <div className="px-[0.75rem] py-[10rem] text-center space-y-16">
            {React.Children.toArray(
              navItems.map(({ label, path }, index) => (
                <Links
                  key={index}
                  activeClass="active"
                  smooth
                  spy
                  to={path}
                  className="block cursor-pointer"
                  onClick={handleClick}
                >
                  <span
                    className="
                    text-[#C6C6C6] 
                    hover:decoration-white 
                    hover:decoration-2 
                    focus:font-bold 
                    hover:text-[#FCFCFC] 
                    focus:text-[#FCFCFC]  
                    hover:underline-offset-[6px]
                    block 
                    px-3 
                    py-2  
                    font-semibold 
                    text-[20px] 
                    "
                  >
                    {label}
                  </span>
                </Links>
              ))
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
