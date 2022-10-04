import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieDetails } from "../../api/getMovieDetails";
import { getMovies } from "../../api/getMovies";
import { querrySearchParamsType } from "../../types/querrySearchParamsType";

export const getMoviesAction = createAsyncThunk(
  "filter/getMoviesAction",
  ({
    abortController,
    ...params
  }: {
    abortController?: AbortController;
  } & querrySearchParamsType) =>
    getMovies({
      abortController,
      ...params,
    }).then(
      (response) =>
        Promise.allSettled(
          response["Search"].map((movie) => getMovieDetails(movie.imdbID))
        )
      //   setPageCount(Math.ceil(+response.totalResults / 10));
    )
);
