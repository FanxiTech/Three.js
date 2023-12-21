import { useState } from "react";
import axios from "axios";
import { APIURL } from "@/constants";
import { useQuery } from "@tanstack/react-query";

// 查詢是否有DiD
export default function useGetDiD(wallet) {
  const [isOpen, setIsOpen] = useState(false);
  async function fetchDiD() {
    const res = await axios(`${APIURL}/checkIfMinted/${wallet}`, {
      walletAddress: wallet,
    });
    return res.data;
  }

  const {
    data: did,
    isLoading,
    isError,
    refetch,
    fetchStatus,
  } = useQuery([`${wallet}/did`], fetchDiD, {
    cacheTime: 36000000,
    staleTime: 600000,
  });

  return {
    did,
    isOpen,
    setIsOpen,
    isLoading,
    isError,
    refetch,
    fetchStatus,
  };

  // const { data: did, isLoading, isError, refetch } = useGetDidQuery(wallet);

  // return { did, isOpen, setIsOpen, isLoading, isError, refetch };
}
