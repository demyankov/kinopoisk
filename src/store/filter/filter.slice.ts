import { createSlice } from "@reduxjs/toolkit";
import { GenresType } from "../../generalData/defaultGenresList";
import { MovieDetailsType } from "../../types/movieDetailsType";

export interface FilterConfigureType {
  movieName: string;
  genres: Array<GenresType>;
  year: string;
  ratingFrom: string;
  ratingTo: string;
  country: string;
}

const initialFilterConfigure: FilterConfigureType = {
  movieName: "",
  genres: [],
  year: "",
  ratingFrom: "",
  ratingTo: "",
  country: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    isOpened: false,
    movies: [] as MovieDetailsType[],
    filterConfigure: initialFilterConfigure,
    sortConfigure: "Rating" as "Rating" | "Year",
  },
  reducers: {
    open: (state) => {
      state.isOpened = true;
    },
    close: (state) => {
      state.isOpened = false;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    addMovies: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    clearMovies: (state) => {
      state.movies = [];
    },
    sortBy: (state, action) => {
      state.sortConfigure = action.payload;
    },
    changeFilter: (state, action) => {
      state.filterConfigure = { ...state, ...action.payload };
    },
  },
});

export const { reducer: filterReducer, actions: filterActions } = filterSlice;
