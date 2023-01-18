import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomepageInitialState } from "@/utils/interface";

// initialize state
const initialState: HomepageInitialState = {
  chatData: [],
};

// reducer and actions
export const homepageSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setChatData: (state, action: PayloadAction<any>) => {
      state.chatData.push(action.payload);
    },
  },
});

// actions
export const { setChatData } = homepageSlice.actions;

// selectors
export const selectCurrentChat = (state: any) => state.store?.home?.chatData;

export default homepageSlice.reducer;
