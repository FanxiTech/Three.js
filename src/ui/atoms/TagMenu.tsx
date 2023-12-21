import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { twMerge } from "tailwind-merge";
import { IoClose } from "react-icons/io5";
import useIsMobile from "@/hooks/useIsMobile";
import { useLocation } from "react-router-dom";

type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  modalClassName?: string;
  close?: () => void;
  onClick?: () => void;
  iconColor?: string;
  showCloseBtn?: boolean;
};

export default function TagMenu({
  children,
  className,
  close,
  iconColor = "white",
  showCloseBtn = false,
}: ModalProps) {
  const { isMobile } = useIsMobile();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "unset";
    };
  }, []);

  const positionLeft = pathname.includes("pf")
    ? "left-[calc(50%+150px)]"
    : "left-1/2";

  return ReactDOM.createPortal(
    <div
      className={twMerge(
        "fixed  bottom-0 -translate-x-1/2  w-fit h-fit z-10 bg-[#212121d3] text-white border-[#4ae4a679] border-solid border rounded-[5px]",
        positionLeft,
        className
      )}
    >
      {showCloseBtn && (
        <div
          className="absolute top-[15px] right-[18px] cursor-pointer"
          onClick={close}
        >
          <IoClose fontSize="20px" color={iconColor} />
        </div>
      )}
      {children}
    </div>,
    document.body
  );
}
