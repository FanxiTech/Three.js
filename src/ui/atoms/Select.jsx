import React from "react";
import { twMerge } from "tailwind-merge";

const Select = ({ children, label, className, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <p className="my-2 text-start text-[14px] font-semibold">{label}</p>
      )}
      <select
        className={twMerge(
          "px-3 w-full h-[32px] text-2xl text-black bg-white border border-solid border-[#ccc] rounded-lg",
          className
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
