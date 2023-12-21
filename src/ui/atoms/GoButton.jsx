import React from "react";
import { twMerge } from "tailwind-merge";
export default function GoButton({
  children,
  text,
  onClick,
  className,
  Icon = "",
}) {
  return (
    <div
      className={twMerge(
        "group relative m-auto h-[35px] w-full transition-all duration-200 ease  cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children ? (
        children
      ) : (
        <div className="z-[2] relative flex items-center justify-center h-full">
          <span className="text-white text-[14px] font-bold tracking-wide uppercase align-middle">
            {text}
          </span>
          {Icon ? (
            Icon
          ) : (
            <svg
              className="w-6 h-5 fill-none stroke-[white] relative ml-4"
              viewBox="0 0 13 10"
            >
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          )}
        </div>
      )}
      <div className="block absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-full rounded-full bg-[#3dce95] transition-all duration-300 ease group-hover:w-full bg-opacity-100"></div>
    </div>
  );
}
