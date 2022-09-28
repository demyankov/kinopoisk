import { MovieDetailsType } from "../types/movieDetailsType";

export const uniqMovies = (
  newMovieArray: MovieDetailsType[],
  prevMovieArray: MovieDetailsType[]
): MovieDetailsType[] => {
  return newMovieArray.filter(
    (newMovie) =>
      !prevMovieArray.filter((movie) => movie.imdbID === newMovie.imdbID).length
  );
};
