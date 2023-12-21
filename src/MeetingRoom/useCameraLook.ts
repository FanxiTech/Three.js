import React, { useEffect, useState } from "react";

let sharedLook: number[] = [0, 0, -0.1];
let subscribers: React.Dispatch<React.SetStateAction<number[]>>[] = [];

export default function useCameraLook() {
  const [cameraLook, setCameraLook] = useState<number[]>(sharedLook);

  useEffect(() => {
    subscribers.push(setCameraLook);
    return () => {
      const index = subscribers.indexOf(setCameraLook);
      if (index !== -1) {
        subscribers.splice(index);
      }
    };
  }, []);

  function setSharedCameraLook(updateState: number[]) {
    sharedLook = updateState;
    subscribers.forEach((subscriber) => subscriber(updateState));
  }

  return { cameraLook, setSharedCameraLook };
}
