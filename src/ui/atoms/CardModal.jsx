import React from "react";
import { twMerge } from "tailwind-merge";

export default function CardModal({ children, className }) {
  return (
    <div
      className={twMerge(
        "w-fit h-fit p-12 text-white border-[#4ae4a679] border-solid border rounded-[5px] relative",
        className
      )}
    >
      <div className="absolute top-[-1px] left-[-1px] w-[20px] h-[20px] border-t-2 border-l-2 border-solid border-[#3dce95] rounded-[2px]" />
      <div className="absolute top-[-1px] right-[-1px] w-[20px] h-[20px] border-t-2 border-r-2 border-solid border-[#3dce95] rounded-[2px]" />
      <div className="absolute bottom-[-1px] right-[-1px] w-[20px] h-[20px] border-b-2 border-r-2 border-solid border-[#3dce95] rounded-[2px]" />
      <div className="absolute bottom-[-1px] left-[-1px] w-[20px] h-[20px] border-b-2 border-l-2 border-solid border-[#3dce95] rounded-[2px]" />

      {children}
    </div>
  );
}
