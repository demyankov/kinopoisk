import { defaultGenresList } from "../../generalData/defaultGenresList";
import { FilterConfigureType } from "../../store/filter/filter.slice";
import { MovieDetailsType } from "../../types/movieDetailsType";
import { filterMovies } from "./filterMovies";

const movies = [
  {
    Title: "love",
    Genre: "Action, Comedy, Drama",
    Year: "2017",
    imdbRating: "9.6",
    Country: "India",
  },
  {
    Title: "sport",
    Genre: "Action, Thriller, Drama",
    Year: "2018",
    imdbRating: "8.3",
    Country: "India, Canada",
  },
  {
    Title: "fashion",
    Genre: "Drama",
    Year: "2018",
    imdbRating: "8.9",
    Country: "United states, Belgium",
  },
  {
    Title: "sport",
    Genre: "Family",
    Year: "2019",
    imdbRating: "7.8",
    Country: "Russia",
  },
  {
    Title: "mother",
    Genre: "Crime, Family",
    Year: "2018",
    imdbRating: "6.3",
    Country: "India, Canada",
  },
] as unknown as MovieDetailsType[];

const filterConfigure: FilterConfigureType = {
  movieName: "sport",
  genres: ["Action"],
  year: "2018",
  ratingFrom: "7",
  ratingTo: "9",
  country: "India",
};

const filterConfigureEmpty: FilterConfigureType = {
  movieName: "",
  genres: defaultGenresList,
  year: "",
  ratingFrom: "",
  ratingTo: "",
  country: "",
};

describe("Filter movies", () => {
  test("filter by all parametres", () => {
    expect(filterMovies(movies, filterConfigure)).toEqual([
      {
        Title: "sport",
        Genre: "Action, Thriller, Drama",
        Year: "2018",
        imdbRating: "8.3",
        Country: "India, Canada",
      },
    ]);
  });

  test("filter without parametres", () => {
    expect(filterMovies(movies, filterConfigureEmpty)).toEqual(movies);
  });
});
