import React from "react";
import { twMerge } from "tailwind-merge";
import { FaCheck } from "react-icons/fa";

type TechLoadingProps = {
  hash?: string;
  className?: string;
}


export default function TechLoading({ hash, className }: TechLoadingProps) {
  function viewOnScan() {
    window.open("https://sepolia.etherscan.io/tx/" + hash, "_blank")?.focus();
  }
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center p-8 relative ",
        className
      )}
    >
      <div className="relative w-[150px] h-[150px] shadow-neumorphic bg-[#3dce95] bg-opacity-30 border-[#3dce95] border-2 border-solid rounded-full flex justify-center items-center">
        <div className="w-[130px] h-[130px] border-x-[#4ae4a6] border border-solid border-y-black rounded-full animate-spin"></div>
        <p className="absolute text-center text-[35px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-Tektur text-[#3dce95]">
          Loading
        </p>
      </div>
      {hash && (
        <p
          className="text-[25px] mt-6 cursor-pointer font-semibold text-[#3dce95] font-Tektur"
          onClick={viewOnScan}
        >
          ViewScan
        </p>
      )}
      {/* <p className="mt-4 text-[16px] flex items-center">
        <FaCheck className="text-[#00ffdd] mr-2 text-[16px]" />
        載入資料...
      </p>
      <p className="mt-4 text-[12px]">上傳資料...</p> */}
    </div>
  );
}
