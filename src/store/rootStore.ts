import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { favouriteReducer } from "./favouriteMovies/favourite.slice";
import { filterReducer } from "./isOpenedfFilter/filter.slice";

export const rootStore = configureStore({
  reducer: {
    filter: filterReducer,
    favourite: favouriteReducer,
  },
});

rootStore.subscribe((): void => {
  localStorage.setItem(
    "@fovouriteMovies",
    JSON.stringify(rootStore.getState().favourite.favouriteList)
  );
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
