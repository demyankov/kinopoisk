import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { GenresType } from "../../generalData/defaultGenresList";
import { MovieDetailsType } from "../../types/movieDetailsType";
import { uniqMovies } from "../../utils/uniqMovies";
import { getMoviesAction } from "./filter.actions";

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
    currentPage: 1 as number,
    filterConfigure: initialFilterConfigure,
    mainInputValue: "",
    sortConfigure: "Rating" as "Rating" | "Year",
    pageCount: 1 as number,
    error: null as SerializedError | null,
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setMainInputValue: (state, action) => {
      state.mainInputValue = action.payload;
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
    clearMovies: (state) => {
      state.movies = [];
    },
    sortBy: (state, action) => {
      state.sortConfigure = action.payload;
    },
    changeFilter: (state, action) => {
      state.filterConfigure = { ...state.filterConfigure, ...action.payload };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMoviesAction.fulfilled, (state, action) => {
        const fulfilledResponse = action.payload.map((responseItem) =>
          responseItem.status === "fulfilled" ? responseItem.value : null
        ) as MovieDetailsType[];
        const newMovies = uniqMovies(fulfilledResponse, state.movies);
        state.movies = [...state.movies, ...newMovies];
        state.currentPage += 1;
        state.isLoading = false;
        // state.pageCount = Math.ceil(+action.payload.totalResults / 10);
      })
      .addCase(getMoviesAction.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const { reducer: filterReducer, actions: filterActions } = filterSlice;
