import { FilterConfigureType } from "../store/filter/filter.slice";
import { MovieDetailsType } from "../types/movieDetailsType";

export const filterMovies = <T extends MovieDetailsType>(
  moviesArray: Array<T>,
  filterConfigure: FilterConfigureType
): Array<T> => {
  const filterGenres = filterConfigure.genres.map((country: string) =>
    country.toLowerCase()
  );

  const filteredArray = moviesArray.filter((movie) => {
    if (
      +movie.imdbRating >= (+filterConfigure.ratingFrom || 0) &&
      +movie.imdbRating <= (+filterConfigure.ratingTo || 10) &&
      movie.Country.includes(filterConfigure.country) &&
      isGenreInclude(movie, filterGenres)
    ) {
      return movie;
    }
  });
  // console.log("moviesArray: ", moviesArray);
  // console.log("filteredArray: ", filteredArray);
  return filteredArray;
};

export const isGenreInclude = (
  movie: MovieDetailsType,
  filterGenres: Array<string>
): boolean => {
  const movieGenres = movie.Genre.split(",").map((genre) =>
    genre.toLowerCase().trim()
  );
  return !!movieGenres.filter(
    (movieGenre) => filterGenres.indexOf(movieGenre) > -1
  ).length;
};
