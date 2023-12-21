import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "../../constants";

const fetchNameAndImage = (walletAddress) => async () => {
  const { data } = await axios.post(`${APIURL}/getNameAndImage`, {
    walletAddress: walletAddress,
  });
  return {
    name: data.name,
    photo: APIURL + data.profilePhoto,
    walletAddress,
  };
};

export default function useGetFriends(wallet) {
  const [friends, setFriends] = useState([]);
  const [fans, setFans] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    setUpdate(true);
  }, [wallet]);
  
  useEffect(() => {
    if (!update) return;

    async function getFollow() {
      const result = await axios.post(`${APIURL}/checkIfNewWallet`, {
        walletAddress: wallet,
      });

      const { follower, following } = result.data.Profile;

      const fetchFriendsData = async () => {
        const friendsPromises = following.map(fetchNameAndImage);
        const friendsData = await Promise.all(
          friendsPromises.map((fn) => fn())
        );
        setFriends(friendsData);
      };

      const fetchFansData = async () => {
        const fansPromises = follower.map(fetchNameAndImage);
        const fansData = await Promise.all(fansPromises.map((fn) => fn()));
        setFans(fansData);
      };

      await Promise.all([fetchFriendsData(), fetchFansData()]);
      setUpdate(false);
    }

    getFollow();
  }, [wallet, update]);

  function refetch() {
    setUpdate(true);
  }

  return { friends, fans, refetch };
}
