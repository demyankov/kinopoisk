import { createSlice } from "@reduxjs/toolkit";
import {
  defaultGenresList,
  GenresType,
} from "../../generalData/defaultGenresList";
import { currentYear } from "../../utils/currentYear";

interface filterConfigureType {
  movieName: string;
  genres: Array<GenresType>;
  year: number;
  ratingFrom: number;
  ratingTo: number;
  country: string;
}

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    isOpened: false,
    filterConfigure: <filterConfigureType>{
      movieName: "death",
      genres: defaultGenresList,
      year: currentYear - 1,
      ratingFrom: 5,
      ratingTo: 10,
      country: "",
    },
    sortConfigure: "Rating" as "Rating" | "Year",
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
    changeFilter: (state, action) => {
      state.filterConfigure = action.payload;
    },
    clearFilter: () => {},
  },
});

export const { reducer: filterReducer, actions: filterActions } = filterSlice;
