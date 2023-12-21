import React from "react";
import { twMerge } from "tailwind-merge";

const FutureButton = ({ children, onClick, className, ...props }) => {
  const borderStyle =
    "w-fit py-[8px] px-[30px] border border-white hover:border-[#3dce95] border-solid text-white text-[16px] relative uppercase group";
  const beforeStyle =
    "before:absolute before:top-[6px] before:left-[-2px] before:w-[calc(100%_+_4px)] before:h-[calc(100%_-_12px)] before:bg-[#212121] before:scale-y-100 before:hover:scale-y-0 before:transition  before:ease-in-out before:duration-500";
  const afterStyle =
    "after:absolute after:left-[6px] after:top-[-2px] after:h-[calc(100%_+_4px)] after:w-[calc(100%_-_12px)] after:bg-[#212121] after:scale-x-100 after:hover:scale-x-0 after:transition  after:ease-in-out after:duration-500 after:delay-300";

  return (
    <button
      className={twMerge(borderStyle, beforeStyle, afterStyle, className)}
      {...props}
      onClick={onClick}
    >
      <p className="relative z-[3] group-hover:text-[#3dce95]">{children}</p>
    </button>
  );
};

export default FutureButton;
