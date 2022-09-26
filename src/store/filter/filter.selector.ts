import { createSelector } from "@reduxjs/toolkit";
import { MovieDetailsType } from "../../types/movieDetailsType";
import { filterMovies } from "../../utils/filterMovies/filterMovies";
import { sortMovies } from "../../utils/sortMovies/sortMovies";
import { RootState } from "../rootStore";
import { FilterConfigureType } from "./filter.slice";

export const filterSelectorIsOpened = (
  state: RootState
): RootState["filter"]["isOpened"] => state.filter.isOpened;

export const filterConfigureSelector = (
  state: RootState
): RootState["filter"]["filterConfigure"] => state.filter.filterConfigure;

export const filterIsLoadingSelector = (
  state: RootState
): RootState["filter"]["isLoading"] => state.filter.isLoading;

export const filterCurrentPageSelector = (
  state: RootState
): RootState["filter"]["currentPage"] => state.filter.currentPage;

export const moviesSelector = (
  state: RootState
): RootState["filter"]["movies"] => state.filter.movies;

export const filterSortSelector = (
  state: RootState
): RootState["filter"]["sortConfigure"] => state.filter.sortConfigure;

export const setMainInputValue = (
  state: RootState
): RootState["filter"]["mainInputValue"] => state.filter.mainInputValue;

export const filterResultSelector = createSelector(
  [moviesSelector, filterConfigureSelector, filterSortSelector],
  <T extends MovieDetailsType>(
    moviesArray: Array<T>,
    filterConfigure: FilterConfigureType,
    sortBy: "Rating" | "Year"
  ): Array<MovieDetailsType> => {
    const sortedMoviesArray = sortMovies(moviesArray, sortBy);
    const filteredArray = filterMovies(sortedMoviesArray, filterConfigure);
    return filteredArray;
  }
);
