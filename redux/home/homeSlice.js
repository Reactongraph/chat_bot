import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatData: [],
};

export const homepageSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setChatData: (state, action) => {
      state.chatData.push(action.payload);
    },
  },
});

// actions
export const { setChatData } = homepageSlice.actions;

// selectors
export const selectCurrentChat = (state) => state.store?.home?.chatData;

export default homepageSlice.reducer;
