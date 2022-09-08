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
    isOpened: false as boolean,
    movies: [] as MovieDetailsType[],
    isLoading: true as boolean,
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
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addMovies: (state, action) => {
      const uniqMovies = action.payload.filter(
        (newMovie: MovieDetailsType) =>
          !state.movies.filter(
            (movie: MovieDetailsType) => movie.imdbID === newMovie.imdbID
          ).length
      );
      state.movies = [...state.movies, ...uniqMovies];
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
