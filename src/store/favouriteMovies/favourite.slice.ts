import { createSlice } from "@reduxjs/toolkit";
import { MovieType } from "../../types/movieType";

export const favouriteMoviesSlice = createSlice({
  name: "favourite",
  initialState: {
    favouriteList: [] as Array<MovieType["imdbID"]>,
  },
  reducers: {
    addInFavourite: (state, action) => {
      if (!state.favouriteList.includes) {
        state.favouriteList.push(action.payload);
      }
    },
    removeFromFavourite: (state, action) => {
      state.favouriteList = state.favouriteList.filter(
        (movieId) => movieId !== action.payload
      );
    },
  },
});

export const { reducer: favouriteReducer, actions: favouriteAction } =
  favouriteMoviesSlice;
