export const SOCKETURL = "https://localhost:8080";
export const APIURL = "https://localhost:4000";
export const APIURL_5000 = "https://localhost:5000";
export const NAVBAR_ITEMS = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Messages",
    path: "/messages",
  },
  {
    title: "AdvanceOption",
    path: "/advanceOption", //假路徑
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Profile",
    path: "/profile",
  },
];

export const PortfolioOption = [
  {
    shortName: "avax",
    name: "Avalanche",
    icon: "https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818",
    chainId: "0xa86a",
    tokenAddress: "https://snowtrace.io/",
  },
  {
    shortName: "bsc",
    name: "BNB",
    icon: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    chainId: "0x38",
    tokenAddress: "https://bscscan.com/",
  },
  {
    shortName: "eth",
    name: "Ethereum",
    icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    chainId: "0x1",
    tokenAddress: "https://etherscan.io/",
  },
  {
    shortName: "pol",
    name: "Polygon",
    icon: "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
    chainId: "0x89",
    tokenAddress: "https://polygonscan.com/",
  },
  {
    shortName: "sep",
    name: "SepoliaETH",
    icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    chainId: "0xaa36a7",
    tokenAddress: "https://sepolia.etherscan.io/",
  },
];
export const ChainName = {
  Avalanche: "avax",
  BNB: "bsc",
  Ethereum: "eth",
  Polygon: "pol",
  SepoliaETH: "sep",
};

export const CATEGORY_ITEMS = [
  // {
  //   title: "Favorite",
  //   value: "",
  // },
  {
    title: "DeFi",
    value: "defi",
  },
  {
    title: "NFT",
    value: "nft",
  },
  {
    title: "Gaming",
    value: "gaming",
  },
  {
    title: "Memes",
    value: "memes",
  },
  {
    title: "Yield Farming",
    value: "yieldFarming",
  },
  {
    title: "Metaverse",
    value: "metaverse",
  },
  {
    title: "Decentralize Exchanges",
    value: "decentralizeExchanges",
  },
];

export const DAPP_CHAINS = [
  {
    title: "Favorite",
    value: "Favorite",
    icon: "https://cdn-icons-png.flaticon.com/512/2107/2107957.png",
  },
  {
    title: "ETH",
    value: "Ethereum",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  },
  {
    title: "SOL",
    value: "Solana",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  },
  {
    title: "BNB",
    value: "BNB Smart Chain (BEP20)",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
  },
  {
    title: "MATIC",
    value: "Polygon",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
  },
  {
    title: "AVAX",
    value: "Avalanche C-Chain",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
  },
  // {
  //   title: "LUNA",
  //   value: "Terra Classic",
  // },
  {
    title: "Others",
    value: "Others",
    icon: "https://cdn-icons-png.flaticon.com/128/1782/1782864.png",
  },
];

export const MONTHLY_LABELS = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

export const MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
