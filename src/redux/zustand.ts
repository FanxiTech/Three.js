import { create } from "zustand";

export type UserType = {
  name: string;
  profilePhoto: string;
  needLogin: boolean;
  isLogin: boolean;
  wallet: string;
  label: string;
  provider: any;
  update: boolean;
};

export type UserStoreType = {
  user: UserType;
  setUserInfo: (data: UserType) => void;
  updateProfile: (data: any) => void;
  setNeedLogin: (boolean: boolean) => void;
  setUpdate: (boolean: boolean) => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  user: {
    name: "",
    profilePhoto: "",
    needLogin: false,
    isLogin: false,
    wallet: "",
    label: "",
    provider: null,
    update: false,
  },
  setNeedLogin: (data: boolean) =>
    set((state: { user: UserType }) => ({
      user: { ...state.user, needLogin: data },
    })),
  setUpdate: (data: boolean) =>
    set((state: { user: UserType }) => ({
      user: { ...state.user, update: data },
    })),
  setUserInfo: (data: UserType) => set({ user: data }),
  updateProfile: (data: any) =>
    set((state: { user: UserType }) => ({
      user: { ...state.user, ...data },
    })),
}));

type CanvasStoreType = {
  meetingRoomTexture: string;
  meetingRoomAngle: string;
  edit: boolean;
  popout: string;
  setMeetingRoomTexture: (data: string) => void;
  setMeetingRoomAngle: (data: string) => void;
  setEdit: (data: boolean) => void;
  setPopout: (data: string) => void;
};

export const useCanvasStore = create<CanvasStoreType>((set) => ({
  meetingRoomTexture: "/meetingRoom.JPG",
  meetingRoomAngle: "",
  edit: false,
  popout: "",
  setMeetingRoomTexture: (data) => set({ meetingRoomTexture: data }),
  setMeetingRoomAngle: (data) => set({ meetingRoomAngle: data }),
  setEdit: (data) => set({ edit: data }),
  setPopout: (data) => set({ popout: data }),
}));

export type MessageToType = {
  id: string;
  name: string;
  photo: string;
  type: string;
};

type MessageStoreType = {
  id: string;
  name: string;
  photo: string;
  type: string;
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
  setId: (data: string) => void;
  setMessageTo: ({ id, name, photo, type }: MessageToType) => void;
  clearMessageTo: () => void;
};

export const useMessageStore = create<MessageStoreType>((set) => ({
  id: "",
  name: "",
  photo: "",
  type: "single",
  isOpen: false,
  setIsOpen: (data: boolean) => set({ isOpen: data }),
  setId: (id: string) => set({ id }),
  setMessageTo: ({ id, name, photo, type }: MessageToType) =>
    set({ id, name, photo, type }),
  clearMessageTo: () => set({ id: "", name: "", photo: "" }),
}));
