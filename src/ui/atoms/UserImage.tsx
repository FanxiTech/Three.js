import React, { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type UserImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
}

export default function UserImage({ className, ...props }: UserImageProps) {
  return (
    <img
      className={twMerge(
        "w-[40px] h-[40px] object-cover border-[#69fcdc] border-[2px] border-solid rounded-full",
        className
      )}
      alt="userImage"
      {...props}
    />
  );
}
