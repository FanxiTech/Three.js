import React from "react";
import { twMerge } from "tailwind-merge";

const TextArea = ({ label = "", className = "", ...props }) => {
  return (
    <div>
      {label && (
        <p className="my-2 text-start text-[14px] font-semibold">{label}</p>
      )}
      <textarea
        className={twMerge(
          "p-3 w-full h-[100px] resize-none text-2xl bg-transparent text-white border border-solid border-[#ccc] focus:border-[#3dce95] rounded-lg",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default TextArea;
