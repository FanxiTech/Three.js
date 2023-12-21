import { create } from "zustand";

type MapType = {
  type: string;
  setType: (type: string) => void;
};

export const useMeetingStore = create<MapType>((set) => ({
  type: "",
  setType: (type: string) => set({ type }),
}));
