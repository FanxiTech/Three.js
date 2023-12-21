import axios from "axios";
import { APIURL } from "../../constants";

//  接收
async function addSepoliaAsset(address, contractAddress, tokenId) {
  const res = await axios.post(`${APIURL}/addSepoliaAssets`, {
    assets: [
      {
        contractAddress, // 合約地址
        tokenId,
      },
    ],
    walletAddress: address, // 接收者
  });
  console.log(res);
}
async function addWithDrawAllSepoliaAsset(address, data) {
  const assets = Object.values(data)
    .flat()
    .reduce((acc, curr) => {
      acc.push({ contractAddress: curr.nftContract, tokenId: curr.tokenId });
      return acc;
    }, []);
  const res = await axios.post(`${APIURL}/addSepoliaAssets`, {
    assets,
    walletAddress: address, // 接收者
  });
  console.log(res);
}

// 送出
async function deleteSepoliaAsset(address, contractAddress, tokenId) {
  const res = await axios.post(`${APIURL}/deleteSepoliaAssets`, {
    assets: [
      {
        contractAddress, // 合約地址
        tokenId,
      },
    ],
    walletAddress: address, // 傳送者
  });
  console.log(res);
}

export { addSepoliaAsset, deleteSepoliaAsset, addWithDrawAllSepoliaAsset };
