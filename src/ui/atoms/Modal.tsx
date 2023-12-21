import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { twMerge } from "tailwind-merge";
import { IoClose } from "react-icons/io5";
import useIsMobile from "@/hooks/useIsMobile";

type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  modalClassName?: string;
  close?: () => void;
  onClick?: () => void;
  iconColor?: string;
  showCloseBtn?: boolean;
};

export default function Modal({
  children,
  className,
  modalClassName,
  close,
  onClick,
  iconColor = "white",
  showCloseBtn = true,
}: ModalProps) {
  const { isMobile } = useIsMobile();
  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "unset";
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className={twMerge(
        "w-screen h-screen fixed z-10 left-0 top-0 flex items-center justify-center",
        modalClassName
      )}
      onClick={onClick}
    >
      <div
        className=" absolute w-full h-full bg-black bg-opacity-40 flex justify-center items-center"
        onClick={close}
      />
      <div
        className={twMerge(
          "max-h-[90vh] w-fit h-fit z-20 p-12 bg-[#212121d3] text-white border-[#4ae4a679] border-solid border rounded-[5px] relative",
          className
        )}
      >
        {/* <div class="absolute top-[-1px] left-[-1px] w-[20px] h-[20px] border-t-2 border-l-2 border-solid border-[#3dce95] rounded-[2px]" />
        <div class="absolute top-[-1px] right-[-1px] w-[20px] h-[20px] border-t-2 border-r-2 border-solid border-[#3dce95] rounded-[2px]" />
        <div class="absolute bottom-[-1px] right-[-1px] w-[20px] h-[20px] border-b-2 border-r-2 border-solid border-[#3dce95] rounded-[2px]" />
        <div class="absolute bottom-[-1px] left-[-1px] w-[20px] h-[20px] border-b-2 border-l-2 border-solid border-[#3dce95] rounded-[2px]" /> */}

        {showCloseBtn && (
          <div
            className="absolute top-[15px] right-[18px] cursor-pointer"
            onClick={close}
          >
            <IoClose fontSize="20px" color={iconColor} />
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
}
