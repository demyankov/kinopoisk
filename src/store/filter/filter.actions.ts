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
      async (response) => {
        const movies = await Promise.allSettled(
          response["Search"].map((movie) => getMovieDetails(movie.imdbID))
        );
        return movies;
      }
      //   setPageCount(Math.ceil(+response.totalResults / 10));
    )
);
