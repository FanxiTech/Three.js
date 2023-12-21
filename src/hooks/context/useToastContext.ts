import { useContext } from "react";
import { ToastContext } from "@/templates/Provider/ToastProvider";

export default function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
