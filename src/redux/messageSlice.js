import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

const initialState = {
  previewMessages: new Map(),
  groupMessagesList: [],
};


enableMapSet();
const MessageSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    setNewPreviewMessage: (state, action) => {
      state.previewMessages.delete(action.payload.key);
      state.previewMessages.set(action.payload.key, action.payload.message);
    },
    hideConversation: (state, action) => {
      state.previewMessages.delete(action.payload);
    },
    setPreviewMessages: (state, action) => {
      state.previewMessages = action.payload;
    },
    setGroupMessagesList: (state, action) => {
      state.groupMessagesList = action.payload;
    },
  },
});

export const {
  setNewPreviewMessage,
  setGroupMessagesList,
  setPreviewMessages,
  hideConversation,
} = MessageSlice.actions;

export default MessageSlice.reducer;
