import React from "react";
import { twMerge } from "tailwind-merge";
import { useCanvasStore } from "@/redux/zustand";
import useIsMobile from "@/hooks/useIsMobile";

export function UserView() {
  const { meetingRoomAngle } = useCanvasStore();
  const fixedMeetingRoomAngle = meetingRoomAngle - 180;

  const rotateDegree = "rotate(" + fixedMeetingRoomAngle * -1 + "deg)";
  const { isMobile } = useIsMobile();

  return (
    <div
      className={twMerge(
        "absolute mr-[10px] mt-[10px] z-10 desktop:w-[80px] desktop:h-[80px] w-[50px] h-[50px] origin-center",
        isMobile ? "top-0 right-0 " : "top-[100px] right-1/2  "
      )}
      style={{ transform: rotateDegree }}
    >
      <div
        class="w-full h-full rounded-full border-2 border-white border-solid"
        style={{
          background:
            "conic-gradient(from -30deg, #ffffff8a 60deg, transparent 0)",
        }}
      ></div>
    </div>
  );
}
