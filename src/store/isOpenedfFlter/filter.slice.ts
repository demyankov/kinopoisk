import { createSlice } from "@reduxjs/toolkit";

export const isOpenedFilterSlice = createSlice({
  name: "filter",
  initialState: {
    isOpened: false,
  },
  reducers: {
    open: (state) => {
      state.isOpened = true;
    },
    close: (state) => {
      state.isOpened = false;
    },
  },
});

export const { reducer: filterReducer, actions: filterActions } =
  isOpenedFilterSlice;
