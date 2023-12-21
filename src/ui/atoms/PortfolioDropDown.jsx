import { useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { AiOutlineDown } from "react-icons/ai";

export default function PortfolioDropDown({ text, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const OptionRef = useOutsideClick(() => setIsOpen(false));
  return (
    <div className="relative mx-1">
      <div
        className="bg-[#1d1d1d] h-[30px] w-[130px] rounded-[15px] border border-solid border-[#706f6f] flex items-center justify-center text-[14px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        ref={OptionRef}
      >
        <p className="mr-2 text-[14px]">{text}</p>
        <AiOutlineDown fontSize="12px" />
      </div>
      {isOpen && (
        <div className="bg-[#1d1d1d] min-w-[150px] h-fit p-4 rounded-[10px] border border-solid border-[#706f6f] absolute top-[50px] z-[2] animate-toastFadeIn">
          {children}
        </div>
      )}
    </div>
  );
}
