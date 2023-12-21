import { APIURL } from "@/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import useOutsideClick from "@/hooks/useOutsideClick";

export default function QrCodeEnlarge({ className, close }) {
  const [qrcode, setQrcode] = useState();
  const wallet = useSelector((state) => state.login.user.wallet);

  useEffect(() => {
    const fetchQrCode = async () => {
      const result = await axios.post(`${APIURL}/walletAddressQRcode`, {
        walletAddress: wallet,
      });
      setQrcode(result.data);
    };
    fetchQrCode();
  }, [wallet]);

  const ref = useOutsideClick(close);

  return ReactDOM.createPortal(
    <>
      <div className="h-screen w-screen bg-black bg-opacity-70 fixed top-0 left-0 z-[999] flex items-center justify-center px-4">
        <AiOutlineClose
          className="absolute desktop:top-6 top-[80px]  right-6 cursor-pointer text-[20px]"
          onClick={close}
        />
        {qrcode ? (
          <img
            ref={ref}
            className="w-[80%] max-w-[400px] aspect-square"
            src={qrcode}
            alt="qrcode"
          />
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>,
    document.body
  );
}
