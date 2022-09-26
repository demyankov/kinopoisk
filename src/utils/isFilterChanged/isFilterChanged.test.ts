import { defaultGenresList } from "../../generalData/defaultGenresList";
import { isFilterChanged } from "./isFilterChanged";

describe("Is filter changed", () => {
  test("Change movie name", () => {
    expect(
      isFilterChanged({
        movieName: "love",
        genres: defaultGenresList,
        year: "",
        ratingFrom: "",
        ratingTo: "",
        country: "",
      })
    ).toBeTruthy();
  });

  test("Change genres", () => {
    expect(
      isFilterChanged({
        movieName: "death",
        genres: ["Action", "Comedy"],
        year: "",
        ratingFrom: "",
        ratingTo: "",
        country: "",
      })
    ).toBeTruthy();
  });
  test("Change year", () => {
    expect(
      isFilterChanged({
        movieName: "death",
        genres: defaultGenresList,
        year: "2018",
        ratingFrom: "",
        ratingTo: "",
        country: "",
      })
    ).toBeTruthy();
  });

  test("Change ratingFrom", () => {
    expect(
      isFilterChanged({
        movieName: "death",
        genres: defaultGenresList,
        year: "0",
        ratingFrom: "7",
        ratingTo: "",
        country: "",
      })
    ).toBeTruthy();
  });

  test("Change ratingTo", () => {
    expect(
      isFilterChanged({
        movieName: "death",
        genres: defaultGenresList,
        year: "0",
        ratingFrom: "",
        ratingTo: "",
        country: "",
      })
    ).toBeTruthy();
  });

  test("Change country", () => {
    expect(
      isFilterChanged({
        movieName: "death",
        genres: defaultGenresList,
        year: "0",
        ratingFrom: "",
        ratingTo: "",
        country: "Belarus",
      })
    ).toBeTruthy();
  });

  test("Filter is not changed", () => {
    expect(
      isFilterChanged({
        movieName: "death",
        genres: defaultGenresList,
        year: "",
        ratingFrom: "",
        ratingTo: "",
        country: "",
      })
    ).toBeFalsy();
  });
});
