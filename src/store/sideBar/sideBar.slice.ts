import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isOpened: false as boolean,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { reducer: sideBarReducer, actions: sideBarAction } = sideBarSlice;
