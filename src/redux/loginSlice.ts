import { createSlice } from "@reduxjs/toolkit";

export interface RootState {
  login: {
    user: {
      name: string;
      profilePhoto: string;
      isLogin: boolean;
      wallet: string;
      label: string;
      provider: any;
    };
    xmtp: any;
  };
}

const initialState = {
  user: {
    name: "",
    profilePhoto: "",
    isLogin: false,
    wallet: "",
    label: "",
    provider: null,
  },
  xmtp: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    LoginToConnectWallet: (state, action) => {
      const loginInfo = {
        name: action.payload.name,
        profilePhoto: action.payload.profilePhoto,
        wallet: action.payload.wallet,
        label: action.payload.label,
        provider: action.payload.provider,
      };
      state.user = { ...state.user, ...loginInfo };
    },
    UpdateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setLoginStatus: (state, action) => {
      state.user.isLogin = action.payload;
    },
    UpdateProfilePhoto: (state, action) => {
      state.user.profilePhoto = action.payload;
    },
    UpdateName: (state, action) => {
      state.user.name = action.payload;
    },
    LogoutToDisconnectWallet: (state) => {
      state.user = {
        name: "",
        profilePhoto: "",
        isLogin: false,
        wallet: "",
        label: "",
        provider: null,
      };
      state.xmtp = null;
    },
    ChangeWalletInMetaMask: (state, action) => {
      state.user.wallet = action.payload.wallet;
    },
    SignXmtp: (state, action) => {
      state.xmtp = action.payload;
    },
  },
});

export const {
  LoginToConnectWallet,
  setLoginStatus,
  UpdateProfile,
  UpdateProfilePhoto,
  UpdateName,
  LogoutToDisconnectWallet,
  SignXmtp,
  ChangeWalletInMetaMask,
} = loginSlice.actions;

export default loginSlice.reducer;
