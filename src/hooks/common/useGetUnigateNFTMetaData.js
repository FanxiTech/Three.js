import { APIURL } from "@/constants";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetUnigateNFTMetaData(contractAddress, tokenID) {
  const [metaData, setMetaData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const { data } = await axios.post(`${APIURL}/getUnigateNFTMetadata`, {
        contractAddress,
        tokenID,
      });
      setMetaData(data);
      setLoading(false);
    }
    getData();
  }, []);

  return { metaData, loading };
}
