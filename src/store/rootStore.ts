import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { favouriteReducer } from "./favouriteMovies/favourite.slice";
import { filterReducer } from "./filter/filter.slice";
import { signInReducer } from "./auth/auth.slice";

export const rootStore = configureStore({
  reducer: {
    filter: filterReducer,
    favourite: favouriteReducer,
    signIn: signInReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
