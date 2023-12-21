import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ImageEnlarge({ className, src, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <img
        className={className}
        style={{ cursor: "pointer" }}
        src={src}
        {...props}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="h-screen w-screen bg-black bg-opacity-70 fixed top-0 left-0 z-[999] flex items-center justify-center px-4">
          <AiOutlineClose
            className="absolute desktop:top-6 top-[80px] right-6 cursor-pointer text-[20px]"
            onClick={() => setIsOpen(false)}
          />
          <img
            className="w-auto h-auto max-w-full max-h-full object-cover"
            src={src}
          />
        </div>
      )}
    </>
  );
}
