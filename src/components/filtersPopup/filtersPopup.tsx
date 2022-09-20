import { useEffect, useMemo, useRef, useState } from "react";
import { SyntheticEventData } from "react-dom/test-utils";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { countriesList } from "../../generalData/countries";
import {
  defaultGenresList,
  GenresType,
} from "../../generalData/defaultGenresList";
import {
  filterConfigureSelector,
  filterIsLoadingSelector,
  filterSelectorIsOpened,
} from "../../store/filter/filter.selector";
import {
  filterActions,
  FilterConfigureType,
} from "../../store/filter/filter.slice";
import { useAppDispatch } from "../../store/rootStore";
import { checkEmptyField } from "../../utils/checkEmptyField";
import { currentYear } from "../../utils/currentYear";
import { isFilterChanged } from "../../utils/isFilterChanged";
import { numberError } from "../../utils/numberError";
import { setAppFilterParams } from "../../utils/setAppFilterParams";
import { setAppSearchParams } from "../../utils/setAppSearchParams";
import { useOutside } from "../../utils/useOutside";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { Select } from "../select/select";
import { Error } from "../styles/error";
import {
  ButtonWrapper,
  CloseSearchForm,
  DeleteGenre,
  GenreItem,
  Genres,
  InputGroup,
  PopUpHeader,
  PopupWrapper,
} from "./filtersPopupStyles";
import { SortBySwitcher } from "./sortBySwitcher/sortBySwitcher";

export function FiltersPopup(): JSX.Element {
  const { refForm } = useOutside();
  const filterIsOpened = useSelector(filterSelectorIsOpened);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(filterIsLoadingSelector);
  const initialFilterState = useMemo((): FilterConfigureType => {
    return {
      movieName: searchParams.get("movieName") || "death",
      genres: (searchParams.get("genres")?.split(",") ||
        defaultGenresList) as GenresType[],
      year: searchParams.get("year") || "",
      ratingFrom: searchParams.get("ratingFrom") || "",
      ratingTo: searchParams.get("ratingTo") || "",
      country: searchParams.get("country") || "",
    };
  }, []);

  const [filterParams, setFilterParams] =
    useState<FilterConfigureType>(initialFilterState);
  const filterConfigureStore = useSelector(filterConfigureSelector);

  useEffect(() => {
    dispatch(filterActions.changeFilter(filterParams));
    setAppSearchParams(setSearchParams, filterParams);
  }, [dispatch, initialFilterState]);

  useEffect(() => {
    setFilterParams((prev) => ({
      ...prev,
      movieName: filterConfigureStore.movieName,
    }));
  }, [filterConfigureStore.movieName]);

  return (
    <PopupWrapper
      ref={refForm}
      className={filterIsOpened ? "active" : undefined}
    >
      <PopUpHeader>
        <h3>Filters</h3>
        <CloseSearchForm onClick={() => dispatch(filterActions.close())}>
          Х
        </CloseSearchForm>
      </PopUpHeader>
      <SortBySwitcher firstLabel="Rating" secondLabel="Year" />
      <Input
        value={filterParams.movieName}
        onChange={setAppFilterParams("movieName", setFilterParams)}
        label="Full or shot movie name"
        placeholder="Your text"
        error={checkEmptyField(filterParams.movieName)}
      />
      <div>
        <p>Genres</p>
        <Genres>
          <ul>
            {filterParams.genres.length ? (
              filterParams.genres.map((genre, i) => (
                <GenreItem key={i}>
                  <span>{genre}</span>
                  <DeleteGenre
                    id={genre}
                    onClick={({ currentTarget }) => {
                      setFilterParams((prevParams) => {
                        return {
                          ...prevParams,
                          genres: prevParams["genres"].filter(
                            (el) => el !== currentTarget.id
                          ),
                        };
                      });
                    }}
                  >
                    x
                  </DeleteGenre>
                </GenreItem>
              ))
            ) : (
              <p>Genres not selected</p>
            )}
          </ul>
        </Genres>
      </div>
      <InputGroup>
        <Input
          label="Year"
          placeholder="Year"
          type="number"
          value={filterParams.year}
          onChange={setAppFilterParams("year", setFilterParams)}
          error={numberError(filterParams.year, 1950, currentYear)}
        />
      </InputGroup>
      <InputGroup>
        <Input
          label="Rating"
          placeholder="From"
          type="number"
          value={filterParams.ratingFrom}
          onChange={setAppFilterParams("ratingFrom", setFilterParams)}
          error={numberError(filterParams.ratingFrom)}
        />
        <Input
          placeholder="To"
          justifyContent="end"
          type="number"
          value={filterParams.ratingTo}
          onChange={setAppFilterParams("ratingTo", setFilterParams)}
          error={numberError(filterParams.ratingTo)}
        />
        {filterParams.ratingTo &&
        +filterParams.ratingFrom > +filterParams.ratingTo &&
        !numberError(filterParams.ratingFrom) &&
        !numberError(filterParams.ratingTo) ? (
          <Error>"Enter the correct rating parameters"</Error>
        ) : null}
      </InputGroup>
      <Select
        label="Country"
        options={countriesList.sort()}
        value={filterParams.country}
        onChange={setAppFilterParams("country", setFilterParams)}
      />
      <ButtonWrapper>
        <Button
          width="100%"
          disabled={!isFilterChanged(filterParams)}
          onClick={() => {
            setSearchParams("");
            setFilterParams({ ...initialFilterState, movieName: "death" });
            dispatch(
              filterActions.changeFilter({
                ...initialFilterState,
                movieName: "death",
              })
            );
          }}
        >
          Clear filter
        </Button>
        <Button
          width="100%"
          disabled={
            !filterParams.movieName ||
            (filterParams.ratingTo &&
              +filterParams.ratingFrom > +filterParams.ratingTo) ||
            numberError(filterParams.year, 1950, currentYear) ||
            numberError(filterParams.ratingFrom) ||
            numberError(filterParams.ratingTo)
              ? true
              : false
          }
          onClick={() => {
            dispatch(filterActions.clearMovies());
            if (!isLoading) {
              dispatch(filterActions.setIsLoading(true));
            }
            dispatch(filterActions.setCurrentPage(1));
            setAppSearchParams(setSearchParams, filterParams);
            dispatch(filterActions.changeFilter(filterParams));
            dispatch(filterActions.setMainInputValue(filterParams.movieName));
            dispatch(filterActions.close());
          }}
        >
          Show results
        </Button>
      </ButtonWrapper>
    </PopupWrapper>
  );
}
