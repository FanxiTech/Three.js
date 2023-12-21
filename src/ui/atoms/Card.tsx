import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
};

export default function Card({ children, className, borderClassName }: Props) {
  return (
    <div className={twMerge("w-fit h-fit relative", className)}>
      {/* <div className="w-full h-full bg-gradient-to-t from-indigo-600 to-pink-500 box-decoration-clone absolute top-0 left-0 z-[-1]" /> */}
      {/* <div className="w-full h-full bg-gradient-to-t from-[#0066ff] to-[#00ffdd] box-decoration-clone absolute top-0 left-0 z-[-1]" /> */}
      <div
        className={twMerge(
          "w-full h-full bg-gradient-to-t from-[#5ddcff] to-[#4e00c2] box-decoration-clone absolute top-0 left-0 z-[-1] rounded-[10px]",
          borderClassName
        )}
      />
      {children}
    </div>
  );
}
