import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { filterReducer } from "./isOpenedfFlter/filter.slice";

export const rootStore = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
