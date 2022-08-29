import { createSlice } from "@reduxjs/toolkit";
import {
  defaultGenresList,
  GenresType,
} from "../../generalData/defaultGenresList";
import { currentYear } from "../../utils/currentYear";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    isOpened: false,
    filterConfigure: {
      movieName: "death",
      genres: defaultGenresList as Array<GenresType>,
      year: currentYear,
      raitingFrom: 5 as number,
      raitingTo: 10 as number,
      country: "" as string,
    },
    sortConfigure: "Raiting" as "Raiting" | "Year",
  },
  reducers: {
    open: (state) => {
      state.isOpened = true;
    },
    close: (state) => {
      state.isOpened = false;
    },
    sortBy: (state, action) => {
      state.sortConfigure = action.payload;
    },
    changeFilter: () => {},
    clearFilter: () => {},
  },
});

export const { reducer: filterReducer, actions: filterActions } = filterSlice;
