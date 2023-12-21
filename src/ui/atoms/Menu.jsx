import { twMerge } from "tailwind-merge";

const Menu = ({ children, className = "", postion = "right-top" }) => {
  return (
    <div
      className={twMerge(
        "absolute  bg-[#153768] right-[-10px] top-[30px] text-white rounded-lg w-fit p-4 z-[2] ",
        // fadeIn ? "animate-toastFadeIn" : "animate-toastFadeOut",
        className
      )}
    >
      {postion === "right-top" && (
        <div className="absolute top-[-5px] right-4 w-8 h-8 rotate-45 bg-[#153768] z-[-1]" />
      )}
      {postion === "left-top" && (
        <div className="absolute top-[-5px] left-4 w-8 h-8 rotate-45 bg-[#153768] z-[-1]" />
      )}
      {children}
    </div>
  );
};

export default Menu;
