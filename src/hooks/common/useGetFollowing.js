import { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "../../constants";

export default function useGetFollowing(wallet) {
  const [following, setFollowing] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    if (!update) return;
    async function getFollowing() {
      const result = await axios.post(`${APIURL}/checkIfNewWallet`, {
        walletAddress: wallet,
      });
      const { following } = result.data.Profile;
      setFollowing(following);
      setUpdate(false);
    }
    getFollowing();
  }, [wallet, update]);

  function refetch() {
    setUpdate(true);
  }

  return { following, refetch };
}
