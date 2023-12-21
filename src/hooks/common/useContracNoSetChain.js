import { useSelector } from "react-redux";
import { ethers } from "ethers";
import useToastContext from "../context/useToastContext";
// 與 contract 相關的方法
// 1. 使用合約
// 2. 等待合約

export const useContracNoSetChain = () => {
  const { provider } = useSelector((state) => state.login.user);
  const addToast = useToastContext();

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

  return {
    getContractInstance,
    getReadContractInstance,
    waitTransactionConfirmation,
  };
};
