import { defaultGenresList } from "../../generalData/defaultGenresList";
import { FilterConfigureType } from "../../store/filter/filter.slice";

export const isFilterChanged = (filterConfigure: FilterConfigureType) => {
  return (
    filterConfigure.country ||
    filterConfigure.ratingTo ||
    filterConfigure.ratingFrom ||
    filterConfigure.year ||
    (filterConfigure.movieName && filterConfigure.movieName !== "death") ||
    filterConfigure.genres.length !== defaultGenresList.length
  );
};
