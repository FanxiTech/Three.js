import React from "react";

const Switch = ({ checked, onChange, ...props }) => {
  return (
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <input
        id="toggle"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
        {...props}
      />
      <span
        className={`relative w-14 h-8 border border-solid border-gray-400 p-1 ${
          checked
            ? "bg-gradient-to-r from-[#3e8a54] to-[#9ef330] border-gray-200"
            : "bg-[#212121] border-gray-400"
        } rounded-full transition-all duration-200 ease-linear`}
      >
        <span
          className={`absolute left-0 top-1/2 w-6 h-6 ${
            checked ? "bg-[#ffffff]" : "bg-gray-400"
          } rounded-full transform ${
            checked ? "translate-x-[17px]" : "translate-x-[1px]"
          } -translate-y-1/2 transition-all duration-200 ease-linear `}
        />
      </span>
    </label>
  );
};

export default Switch;
