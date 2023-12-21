import React, { FC, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={twMerge(
        "relative border border-solid border-white text-white w-fit h-fit desktop:py-2 py-[6px] desktop:px-8 px-4 flex justify-center items-center rounded-lg text-[14px] z-[1] ",
        "before:z-[-1] before:left-0 before:top-0 before:transition-all before:absolute before:h-full before:bg-[#3dce95] desktop:hover:before:w-full desktop:before:w-0 before:w-full desktop:hover:border-[#3dce95] border-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
