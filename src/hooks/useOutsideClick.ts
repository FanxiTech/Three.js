import React from "react";

export default function useOutsideClick<T extends HTMLElement>(
  callback: () => void
) {
  const ref = React.useRef<T>(null);
  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // if (ref.current && !ref.current.contains(event.target as Node)) {
      if (ref.current && (ref.current != event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
}
