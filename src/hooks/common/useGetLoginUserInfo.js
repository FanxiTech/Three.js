import { useSelector } from "react-redux";
import axios from "axios";
import { APIURL } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export default function useGetLoginUserInfo() {
  const wallet = useSelector((state) => state.login.user.wallet);

  async function fetchProfile() {
    const res = await axios.post(`${APIURL}/checkIfNewWallet`, {
      walletAddress: wallet,
    });
    return res.data;
  }

  const { data, isLoading, refetch, fetchStatus } = useQuery(
    [`${wallet}/profile`],
    fetchProfile,
    {
      cacheTime: 36000000,
      staleTime: 600000,
    }
  );

  let profileInfo = {};
  if (data && data.Profile) {
    let profilePhoto = data.Profile.profilePhoto
      ? APIURL + data.Profile.profilePhoto
      : "";
    let backgroundPhoto = data.Profile.backgroundPhoto
      ? APIURL + data.Profile.backgroundPhoto
      : "";
    profileInfo = { ...data.Profile, profilePhoto, backgroundPhoto };
  }
  return { profileInfo, refetch, isLoading };
}
