import { configureStore } from "@reduxjs/toolkit";
import callingInfoSlice from "./callingInfoSlice";
import loginSlice from "./loginSlice";
import messageSlice from "./messageSlice";
import portfolioSlice from "./portfolioSlice";

export default configureStore({
  reducer: {
    login: loginSlice,
    message: messageSlice,
    call: callingInfoSlice,
    portfolio: portfolioSlice,
  },
});
