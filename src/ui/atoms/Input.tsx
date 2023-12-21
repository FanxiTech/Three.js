import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
  bottomLine?: boolean
}


const Input = ({ label, className, bottomLine = true, ...props }: InputProps) => {
  return (
    <div className="w-full relative">
      {label && <p className="text-start text-[14px] font-semibold">{label}</p>}
      <input
        className={twMerge(
          "px-3 w-full h-[32px] leading-4 text-[14px] text-white bg-transparent border-b border-solid border-[#ccc] focus:pb-1 transition-all peer",
          className
        )}
        {...props}
      />
      {bottomLine ? (
        <div className="absolute bottom-0 peer-focus:w-full h-[1px] w-[1px] left-0 bg-[#3dce95] transition-all duration-[0.5s]" />
      ) : null}
    </div>
  );
};

export default Input;
