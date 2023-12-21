import axios from "axios";
import { APIURL } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPortfolioData } from "@/redux/portfolioSlice";

// 查詢是否有DiD
export default function useGetPortfolio(wallet) {
  async function fetchPortfolio() {
    const res = await axios.post(`${APIURL}/get_wallet_activities`, {
      walletAddress: wallet,
    });
    return res.data;
  }

  const {
    data,
    isLoading,
    isError,
    isSuccess,
    refetch: fetchData,
    fetchStatus,
  } = useQuery([`${wallet}/portfolio`], fetchPortfolio, {
    cacheTime: 36000000,
    staleTime: 35000000,
    enabled: !!wallet,
  });
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.portfolio);

  async function refetch(params) {
    const { data } = await fetchData();
    console.log("新的資料:", data);
    dispatch(setPortfolioData(data));
  }
  useEffect(() => {
    if (!portfolioData && fetchStatus !== "fetching") {
      dispatch(setPortfolioData(data));
    }
  }, [data]);

  return {
    portfolioData,
    isLoading,
    isError,
    isSuccess,
    refetch,
    fetchStatus,
  };
}
