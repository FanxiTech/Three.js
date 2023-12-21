import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
};

const TextAreaResize = ({ value, className, onChange, ...props }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // 將高度重置為auto以獲取正確的scrollHeight
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 將高度設置為scrollHeight以適應文本
    }
  };
  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(e);
    resizeTextarea();
  }

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleTextChange}
      className={twMerge(
        "my-2 text-[14px] w-full overflow-hidden bg-transparent text-white border border-solid border-[#ccc] focus:border-[#3dce95] rounded-lg resize-none px-3",
        className
      )}
      rows={5}
      placeholder="What's happening?"
      {...props}
    />
  );
};

export default TextAreaResize;
