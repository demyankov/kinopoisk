import { createSlice } from "@reduxjs/toolkit";
import {
  defaultGenresList,
  GenresType,
} from "../../generalData/defaultGenresList";
import { currentYear } from "../../utils/currentYear";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterConfigure: {
      movieName: "death",
      genres: defaultGenresList as Array<GenresType>,
      yearOfRelease: currentYear.toString,
      raitingFrom: 5 as number,
      raitingTo: 10 as number,
      country: "" as string,
    },
    sortConfigure: ("raiting" as "raiting") || "year",
  },
  reducers: {
    sortBy: () => {},
    changeFilter: () => {},
    clearFilter: () => {},
  },
});
