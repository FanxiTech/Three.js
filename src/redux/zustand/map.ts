import { create } from "zustand";

type currentStoreType = {
  location: {
    lat: string;
    lon: string;
  } | null;
  walletAddress: string;
};

type MapType = {
  currentStore: currentStoreType;
  setCurrentStore: (
    location: currentStoreType["location"],
    walletAddress: string
  ) => void;
};

export const useMapStore = create<MapType>((set) => ({
  currentStore: { location: null, walletAddress: "" },
  setCurrentStore: (
    location: currentStoreType["location"],
    walletAddress: string
  ) => set({ currentStore: { location, walletAddress } }),
}));
