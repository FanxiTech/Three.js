import React, { useRef } from "react";
import { useCanvasStore } from "@/redux/zustand";
import { FiEdit } from "react-icons/fi";

export default function EditMode() {
  const { edit, setEdit } = useCanvasStore();

  return (
    <>
        <>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-90 rounded-lg w-[180px] h-[50px] z-[999] flex items-center justify-around">
            <>
              <div
                className="text-[18px] flex flex-col items-center rounded-2xl mx-2 cursor-pointer"
                onClick={() => setEdit(!edit)}
              >
                <FiEdit />
                <p className="text-[12px] whitespace-nowrap">
                  {edit ? "取消編輯" : "編輯模式"}
                </p>
              </div>
            </>
          </div>
          {edit ? (
            <div
              className="absolute border-red-700 left-8 top-8 z-20 border-4 border-solid w-[calc(100%_-_40px)] h-[calc(100vh_-_40px)] "
              style={{ pointerEvents: "none" }}
            />
          ) : null}
        </>
    </>
  );
}
