import { createSlice } from "@reduxjs/toolkit";

export const isOpenedFilterSlice = createSlice({
  name: "filter",
  initialState: {
    isOpened: false,
  },
  reducers: {
    toggleOpen: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { reducer: filterReducer, actions: filterActions } =
  isOpenedFilterSlice;
