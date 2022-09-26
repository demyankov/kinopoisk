import { MovieDetailsType } from "../../types/movieDetailsType";
import { sortMovies } from "./sortMovies";

describe("sort movies", () => {
  const unsortArray = [
    { imdbRating: "5.3", Year: "2020" },
    { imdbRating: "4.2", Year: "2022" },
    { imdbRating: "8.7", Year: "2021" },
  ] as MovieDetailsType[];

  test("Sort movies by Rating", () => {
    expect(sortMovies(unsortArray, "Rating")).toEqual([
      { imdbRating: "8.7", Year: "2021" },
      { imdbRating: "5.3", Year: "2020" },
      { imdbRating: "4.2", Year: "2022" },
    ]);
  });

  test("Sort movies by Year", () => {
    expect(sortMovies(unsortArray, "Year")).toEqual([
      { imdbRating: "4.2", Year: "2022" },
      { imdbRating: "8.7", Year: "2021" },
      { imdbRating: "5.3", Year: "2020" },
    ]);
  });
});
