import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  handleCall: {
    callAddress: "",
    isVideo: false,
  },
  receivingCall: {
    isReceivingCall: false,
    from: null,
    name: null,
    signal: null,
    isVideo: false,
  },
};
const CallingSlice = createSlice({
  name: "calling",
  initialState: initialState,
  reducers: {
    setHandleCall: (state, action) => {
      state.handleCall = action.payload;
    },
    setReceivingCall: (state, action) => {
      state.receivingCall = action.payload;
    },
    hangUpCall: (state) => {
      state.receivingCall = initialState.receivingCall;
      state.handleCall = initialState.handleCall;
    },
   
  },
});

export const { setHandleCall, setReceivingCall, hangUpCall } =
  CallingSlice.actions;

export default CallingSlice.reducer;
