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
    sideBarClose: (state) => {
      state.isOpened = false;
    },
  },
});

export const { reducer: sideBarReducer, actions: sideBarAction } = sideBarSlice;
