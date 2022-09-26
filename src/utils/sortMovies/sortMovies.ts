import { MovieDetailsType } from "../../types/movieDetailsType";
import cloneDeep from "lodash.clonedeep";

export const sortMovies = (
  movies: MovieDetailsType[],
  sortBy: "Rating" | "Year"
) => {
  const moviesClone = cloneDeep(movies);
  if (sortBy === "Rating") {
    return moviesClone.sort(
      (prev, current) => Number(current.imdbRating) - Number(prev.imdbRating)
    );
  }

  if (sortBy === "Year") {
    return moviesClone.sort(
      (prev, current) => parseInt(current.Year) - parseInt(prev.Year)
    );
  }
  return movies;
};
