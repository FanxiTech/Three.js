import React from "react";
import "./index.css";

export default function LoginBtn({ onClick }) {
  return (
    <>
      <div className="w-fit flex justify-center items-center py-10 rounded-e-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-center group transition-all">
        <div className="outer_circle w-[190px] h-[190px] relative cursor-pointer group-hover:scale-[1.2] transition-all">
          <div className="border-white border-solid border rounded-full w-[168px] h-[168px] login_btn_round group-hover:scale-[0.5] transition-all"></div>
          <p
            className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-[600px] text-[#3dce95] font-semibold desktop:text-[40px] text-[30px] font-Tektur"
            onClick={onClick}
          >
            Login With Wallet
          </p>
        </div>
      </div>
    </>
  );
}
