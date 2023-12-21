import React from "react";
import { twMerge } from "tailwind-merge";

export default function Skeleton({ className }) {
    return (
      <div
        className={twMerge(
          "relative overflow-hidden bg-[#6f6f6f] before:translate-x-[-150%] before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-[#6f6f6f] before:to-[#54505099] before:animate-skeleton",
          className
        )}
      ></div>
    );
}
