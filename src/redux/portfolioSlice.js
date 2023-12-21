// portfolioSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    portfolioData: null,
  },
  reducers: {
    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export const { setPortfolioData } = portfolioSlice.actions;

export default portfolioSlice.reducer;
