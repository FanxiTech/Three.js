import { postApiData } from "../../utils/request";
import { useState, useEffect } from "react";
import { APIURL } from "@/constants";

export default function useGetWalletInfo(wallet, update = false) {
  const [profileInfo, setProfileInfo] = useState();

  async function fetchProfileInfo(option) {
    try {
      const data = await postApiData(
        `/checkIfNewWallet`,
        { walletAddress: wallet },
        option
      );
      const { Profile } = data;
      let profilePhoto = Profile.profilePhoto
        ? APIURL + Profile.profilePhoto
        : "";
      let backgroundPhoto = Profile.backgroundPhoto
        ? APIURL + Profile.backgroundPhoto
        : "";
      setProfileInfo({ ...Profile, profilePhoto, backgroundPhoto });
    } catch (error) {
      // 处理请求错误
      console.error("请求错误：", error);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchProfileInfo(signal);
    return () => {
      controller.abort();
    };
  }, [wallet, update]);

  return profileInfo;
}
