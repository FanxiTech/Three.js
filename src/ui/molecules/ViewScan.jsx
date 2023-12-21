import React from "react";
import { twMerge } from "tailwind-merge";
import { TechLoading } from "../atoms";

const ViewScan = ({
  hash,
  className,
}) => {
  function viewOnScan() {
    window.open("https://sepolia.etherscan.io/tx/" + hash, "_blank").focus();
  }
  return (
    <div className={twMerge("w-full pt-20", className)}>
      <TechLoading/>
      {hash && (
        <div
          className="bg-[#837fe7] w-[150px] h-12 flex justify-center items-center cursor-pointer mt-10 mx-auto rounded-lg text-[14px]"
          onClick={viewOnScan}
        >
          View On Scan
        </div>
      )}
    </div>
  );
};

export default ViewScan;
