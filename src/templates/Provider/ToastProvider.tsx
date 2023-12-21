import React, {
  useCallback,
  useState,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { PiWarningCircleBold } from "react-icons/pi"; // make sure this icon exists; it's not standard in `react-icons`
import { twJoin } from "tailwind-merge";

interface Toast {
  text: string;
  type: "success" | "warn" | "info" | "error";
  id: number;
}

interface ToastProviderProps {
  children: ReactNode;
}

interface ToastComponentProps {
  toast: Toast;
  setToasts: React.Dispatch<React.SetStateAction<Toast[]>>;
  index: number;
}
interface ToastActions {
  add: (toast: Omit<Toast, "id">) => void;
  success: (text: string) => void;
  warn: (text: string) => void;
  info: (text: string) => void;
  error: (text: string) => void;
}

const ToastContext = createContext<ToastActions | null>(null);

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    setToasts((toasts) => [...toasts, { ...toast, id: Date.now() }]);
  }, []);

  const toastActions: ToastActions = {
    add: addToast,
    success: (text) => addToast({ text, type: "success" }),
    warn: (text) => addToast({ text, type: "warn" }),
    info: (text) => addToast({ text, type: "info" }),
    error: (text) => addToast({ text, type: "error" }),
  };
  return (
    <ToastContext.Provider value={toastActions}>
      {children}
      <div className="fixed top-8 left-1/2 w-fit -translate-x-1/2 z-[9999]">
        {toasts.map((toast, index) => (
          <ToastComponent
            toast={toast}
            setToasts={setToasts}
            index={index}
            key={toast.id}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const ToastComponent: React.FC<ToastComponentProps> = ({
  toast,
  setToasts,
  index,
}) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      handleHide();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleHide = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      hideToast();
    }, 300);
  }, []);

  const hideToast = useCallback(() => {
    setToasts((toasts) => toasts.filter((x) => x.id !== toast.id));
  }, [toast.id, setToasts]);

  return (
    <div
      // style={{ animationDelay: `${index * 200}ms` }} // 設定動畫延遲時間
      className={twJoin(
        "  bg-[#212121d3] w-[200px] p-4 my-4 text-[14px] rounded-[5px] flex justify-between items-center ",
        toast.type === "success" && " text-green-500 shadow-neumorphic ",
        toast.type === "warn" && " text-orange-600 shadow-red ",
        toast.type === "error" && " text-red-500 shadow-red",
        show ? "animate-toastFadeIn" : "animate-toastFadeOut"
      )}
      onClick={hideToast} // 點擊 Toast 時隱藏它
    >
      {/* <div className="absolute top-0 left-0 w-[10px] horder-b-2 border-r-2 border-solid border-[#3dce95] rounded-[2px]" />
      <div className="absolute bottom-0 left-0 w-[10px] h-[10px] border-b-2 border-l-2 border-solid border-[#3dce95] rounded-[2px]" /> */}

      {toast.type === "success" && (
        <AiOutlineCheckCircle className="text-green-500 text-[20px]" />
      )}
      {toast.type === "warn" && (
        <PiWarningCircleBold className="text-orange-600 text-[20px]" />
      )}
      {toast.type === "error" && (
        <AiOutlineCloseCircle className="text-red-400 text-[20px]" />
      )}
      <p className="font-semibold">{toast.text}</p>
    </div>
  );
};

export default ToastProvider;
export { ToastContext };
