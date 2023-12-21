import React, { useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function SideTab({ children, open, className }) {


  return (
    <div
      className={twMerge(
        "absolute w-fit h-fit bg-[#153768] px-4 py-4 text-[16px] top-[-40px] -translate-x-1/4 left-0 z-[2] text-white rounded-[20px] transition-all",
        open ? "scale-100 translate-y-0" : "scale-0 translate-y-[40px]",
        className
      )}
    >
      {/* top-[15px] -translate-y-1/2 right-[-40px] translate-x-1/2 */}
      {/* open ? "scale-100 translate-x-1/2" : "scale-0 -translate-x-[40px]", */}
      {children}
    </div>
  );
}
