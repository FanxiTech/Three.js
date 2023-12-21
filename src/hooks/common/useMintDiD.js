import { useState } from "react";
import { useSelector } from "react-redux";
import NFT_ABI from "@/constants/json/did_nft_abi.json";
import { useContract } from "./useContract";
import { DIDNFT_ERC721 } from "@/constants/abi";
import useGetDiD from "./useGetDiD";
import useGetPortfolio from "./useGetPortfolio";

const useMintDiD = (data, setIsOpen, refetchProfile) => {
  const wallet = useSelector((state) => state.login.user.wallet);
  const { getContractInstance, waitTransactionConfirmation, setChainFunc } =
    useContract();
  const [pending, setPending] = useState(0);
  const { refetch } = useGetDiD(wallet);
  const { refetch: refetchPortfolio } = useGetPortfolio(wallet);

  async function remintDiD() {
    const NFTContract = getContractInstance(DIDNFT_ERC721, NFT_ABI);
    try {
      await setChainFunc();
      const res = await NFTContract.checkThirdPartyVerifiy(
        wallet,
        [data.facebook],
        [data.twitter]
      );
      setPending(1);

      const receipt = await waitTransactionConfirmation(res.hash);
      console.log("交易已完成！", receipt);
      setPending(0);
    } catch (error) {
      console.error("監聽待處理交易時發生錯誤：", error);
    }
    setIsOpen("");
    refetchProfile();
    refetch();
    refetchPortfolio();
  }

  async function burnDiD() {
    const NFTContract = getContractInstance(DIDNFT_ERC721, NFT_ABI);
    const transactionParameters = {
      gasLimit: 4000000,
    };
    try {
      await setChainFunc();
      const tokenID = await NFTContract.addressToTokenID(wallet);
      const burn = await NFTContract.burn(
        tokenID.toNumber(),
        transactionParameters
      );
      setPending(1);
      const receipt = await waitTransactionConfirmation(burn.hash);
      console.log("交易已完成！", receipt);
      setPending(0);
    } catch (error) {
      console.error("監聽待處理交易時發生錯誤：", error);
    }
    setIsOpen("");
    refetchProfile();
    refetch();
    refetchPortfolio();
  }

  async function mintDiD() {
    const NFTContract = getContractInstance(DIDNFT_ERC721, NFT_ABI);
    try {
      await setChainFunc();

      const res = await NFTContract.safeMint(
        wallet,
        "https://ipfs.io/ipfs/bafybeig2pvkp5vydvnqp3sm6hy2362ssavpq7lxn2vvvetj7mzxcpdiida/DID_metadata.json",
        ["testTwitter"],
        ["testFacebook"]
      );
      setPending(1);
      await waitTransactionConfirmation(res.hash);
      setPending(0);
      setIsOpen("");
      refetchProfile();
      refetch();
      refetchPortfolio();
    } catch (error) {
      console.error("監聽待處理交易時發生錯誤：", error);
    }
  }

  return { remintDiD, mintDiD, burnDiD, pending };
};

export default useMintDiD;
