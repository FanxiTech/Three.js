import { useState, useEffect } from "react";

export default function useGetHeight(compareHeight: number) {
  const [height, setHeight] = useState(window.innerHeight);
  const isHigher = height > compareHeight;
  // useEffect(() => {
  //   const handleResize = () => {
  //     setHeight(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return { height, isHigher };
}
