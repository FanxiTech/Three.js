import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { twMerge } from "tailwind-merge";
import { IoClose } from "react-icons/io5";
import useIsMobile from "@/hooks/useIsMobile";

type ModalProps = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  close?: () => void;
  onClick?: () => void;
  iconColor?: string;
  showCloseBtn?: boolean;
  load?: boolean;
  bar?: React.ReactNode;
};

export default function AnimationModal({
  title,
  children,
  bar,
  className,
  close,
  onClick,
  iconColor = "white",
  showCloseBtn = true,
  load = true,
}: ModalProps) {
  const { isMobile } = useIsMobile();
  const [isAnimating, setIsAnimating] = useState(true); // 新增此行
  useEffect(() => {
    if (!load) return setIsAnimating(false);
    // 這將在組件掛載後立即觸發動畫
    const animation = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => {
      clearTimeout(animation);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "unset";
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className="w-screen h-screen fixed z-10 left-0 top-0 flex items-center justify-center"
      onClick={onClick}
    >
      <div
        className=" absolute w-full h-full bg-black bg-opacity-40 flex justify-center items-center"
        onClick={close}
      />
      <div
        className={twMerge(
          "relative h-fit", // 添加了動畫相關的class
          className
        )}
      >
        <img src="/scrollTop.svg" className=" h-fit w-[900px] " />
        <div
          className={twMerge(
            "bg-[#f7b238] w-[700px] animate-scaleOpen h-[500px] z-10 overflow-y-auto p-4 mx-auto mt-[-5px] "
          )}
        >
          {children}
        </div>
        <div className="w-[900px] h-[67px] relative">
          <img
            src="/scroll.svg"
            className="z-20 h-fit w-[900px] absolute top-0"
          />
        </div>
        {/* {bar}
        <div className={"relative top-0 z-30"}>{children}</div> */}
      </div>
    </div>,
    document.body
  );
}
