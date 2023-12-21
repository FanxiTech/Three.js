import axios from "axios";
import { APIURL } from "@/constants";
import { useQuery } from "@tanstack/react-query";

// 查詢是否有DiD
export default function useGetNameAndImage(wallet) {
  async function fetchNameAndImage() {
    const res = await axios.post(`${APIURL}/getNameAndImage`, {
      walletAddress: wallet,
    });
    return res.data;
  }

  const { data, isLoading, isError, isSuccess, refetch, fetchStatus } =
    useQuery([`${wallet}/NameAndImage`], fetchNameAndImage, {
      cacheTime: 36000000,
      staleTime: 600000,
    });

  return { data, isLoading, isError, isSuccess, refetch, fetchStatus };
}
