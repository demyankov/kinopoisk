import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contriesList } from "../../generalData/countries";
import {
  defaultGenresList,
  GenresType,
} from "../../generalData/defaultGenresList";
import {
  filterActions,
  FilterConfigureType,
} from "../../store/filter/filter.slice";
import { useAppDispatch } from "../../store/rootStore";
import { checkEmptyField } from "../../utils/checkEmptyField";
import { currentYear } from "../../utils/currentYear";
import { numberError } from "../../utils/numberError";
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
  const { refForm, isOpened } = useOutside();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    dispatch(filterActions.changeFilter(filterParams));
  }, [dispatch]);

  const [filterParams, setFilterParams] =
    useState<FilterConfigureType>(initialFilterState);

  const setAppSearchParams = () => {
    let params: string = "";
    for (let key in filterParams) {
      if (!!filterParams[key as keyof typeof filterParams]) {
        params += `&${key}=${filterParams[key as keyof typeof filterParams]}`;
        setSearchParams(params ? params : "");
      }
    }
  };

  const setAppFilterParams =
    (payload: string) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) =>
      setFilterParams((prevParams) => {
        return { ...prevParams, [payload]: e.target.value };
      });

  return (
    <PopupWrapper ref={refForm} className={isOpened ? "active" : undefined}>
      <PopUpHeader>
        <h3>Filters</h3>
        <CloseSearchForm onClick={() => dispatch(filterActions.close())}>
          Х
        </CloseSearchForm>
      </PopUpHeader>
      <SortBySwitcher firstLabel="Rating" secondLabel="Year" />
      <Input
        value={filterParams.movieName}
        onChange={setAppFilterParams("movieName")}
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
          justifyContent="end"
          placeholder="Year"
          type="number"
          value={filterParams.year}
          onChange={setAppFilterParams("year")}
          error={numberError(filterParams.year, 1950, currentYear)}
        />
      </InputGroup>
      <InputGroup>
        <Input
          label="Rating"
          placeholder="From"
          justifyContent="end"
          type="number"
          value={filterParams.ratingFrom}
          onChange={setAppFilterParams("ratingFrom")}
          error={numberError(filterParams.ratingFrom)}
        />
        <Input
          placeholder="To"
          justifyContent="end"
          type="number"
          value={filterParams.ratingTo}
          onChange={setAppFilterParams("ratingTo")}
          error={numberError(filterParams.ratingTo)}
        />
        {filterParams.ratingTo &&
        +filterParams.ratingFrom > +filterParams.ratingTo ? (
          <Error position="absolute">
            "Enter the correct rating parameters"
          </Error>
        ) : null}
      </InputGroup>
      <Select
        label="Country"
        options={contriesList.sort()}
        value={filterParams.country}
        onChange={setAppFilterParams("country")}
      />
      <ButtonWrapper>
        <Button
          width="100%"
          onClick={() => {
            setSearchParams("");
            setFilterParams(initialFilterState);
            dispatch(filterActions.changeFilter(initialFilterState));
          }}
        >
          Clear filter
        </Button>
        <Button
          width="100%"
          disabled={
            !filterParams.movieName ||
            +filterParams.ratingFrom > +filterParams.ratingTo ||
            numberError(filterParams.year, 1950, currentYear) ||
            numberError(filterParams.ratingFrom) ||
            numberError(filterParams.ratingTo)
              ? true
              : false
          }
          onClick={() => {
            setAppSearchParams();
            dispatch(filterActions.changeFilter(filterParams));
            dispatch(filterActions.close());
          }}
        >
          Show results
        </Button>
      </ButtonWrapper>
    </PopupWrapper>
  );
}
