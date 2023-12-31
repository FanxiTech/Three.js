import React from "react";
import { twMerge } from "tailwind-merge";

export default function Drawer({ children, isOpen, setIsOpen, className }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "w-[250px] right-0 absolute bg-[#212121] h-full delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article
          className={twMerge(
            "relative w-full overflow-hidden h-full",
            className
          )}
        >
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      />
    </main>
  );
}
