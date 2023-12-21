import React, { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const DropDownInput = ({
  label,
  placeholder,
  input,
  setInput,
  inputClass = "",
  selectClass = "",
  children,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusStyle = isFocused ? "opacity-100 translate-y-0 h-fit" : "";

  const handleOptionSelect = (option) => {
    setInput(option);
    setIsFocused(false);
  };

  const DropDownRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {

      if (DropDownRef.current && !DropDownRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative text-black w-full my-4" ref={DropDownRef}>
      {label && (
        <p className="mb-2 text-start text-[14px] font-semibold text-white">
          {label}
        </p>
      )}
      <input
        className={twMerge(
          "box-border border border-solid border-[#ccc] p-3 rounded-lg w-full h-[34px] text-2xl",
          inputClass
        )}
        onFocus={() => setIsFocused(true)}
        value={input}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul
        className={twMerge(
          "absolute bottom-[35px] w-full h-0 bg-white border rounded mt-1 opacity-0 transition-all duration-300 ease-in-out",
          focusStyle,
          selectClass
        )}
        style={{ opacity: isFocused ? 1 : 0 }}
      >
        {children(handleOptionSelect)}
      </ul>
    </div>
  );
};

export default DropDownInput;
