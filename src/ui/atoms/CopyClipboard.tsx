import React from "react";
import { BiCopy } from "react-icons/bi";
import { FaShareSquare } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useToastContext from "@/hooks/context/useToastContext";

type CopyClipboardProps = {
  text: string,
  content?: string,
  type?: string,
  className?: string,
};

export default function CopyClipboard({
  text,
  content = "複製完成",
  type = "copy",
  className,
}: CopyClipboardProps) {
  const addToast = useToastContext();

  return (
    <CopyToClipboard text={text} onCopy={() => addToast?.success(content)}>
      {type === "copy" ? (
        <BiCopy
          className={className}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      ) : (
        <FaShareSquare
          className={className}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      )}
    </CopyToClipboard>
  );
}
