import { useSelector } from "react-redux";
import { ethers } from "ethers";
import useToastContext from "../context/useToastContext";
import { useSetChain } from "@web3-onboard/react";
import { useEffect, useState } from "react";
// 與 contract 相關的方法
// 1. 使用合約
// 2. 等待合約

export const useContract = () => {
  const { provider } = useSelector((state) => state.login.user);
  const [chainSet, setChainSet] = useState(false);
  const addToast = useToastContext();
  const [
    {
      chains, // the list of chains that web3-onboard was initialized with
      connectedChain, // the current chain the user's wallet is connected to
      settingChain, // boolean indicating if the chain is in the process of being set
    },
    setChain, // function to call to initiate user to switch chains in their wallet
  ] = useSetChain();
  // 使用合約 參數:(合約地址,合約abi)
  function getContractInstance(contractAddress, abi) {
    const providerForSign = new ethers.providers.Web3Provider(provider, "any");
    const signer = providerForSign.getSigner();
    return new ethers.Contract(contractAddress, abi, signer);
  }

  function getReadContractInstance(contractAddress, abi) {
    var providerForRead = new ethers.providers.InfuraProvider("sepolia");
    return new ethers.Contract(contractAddress, abi, providerForRead);
  }

  //  等待合約 參數: (hash)
  async function waitTransactionConfirmation(hash) {
    const providerForSign = new ethers.providers.Web3Provider(provider, "any");
    const result = await providerForSign.waitForTransaction(hash);
    return addToast.success("交易成功～");
  }

  async function setChainFunc() {
    const isSuceess = await setChain({ chainId: "0xaa36a7" });
    // console.log("setChain", isSuceess);
    if (!isSuceess) throw new Error("not setting to sep chain");
    setChainSet(true);
  }

  useEffect(() => {
    setChainFunc();
  }, []);

  return {
    getContractInstance,
    getReadContractInstance,
    waitTransactionConfirmation,
    setChainFunc,
    chainSet,
  };
};
