import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { contriesList } from "../../generalData/countries";
import { defaultGenresList } from "../../generalData/defaultGenresList";
import { filterConfigureSelector } from "../../store/filter/filter.selector";
import { filterActions } from "../../store/filter/filter.slice";
import { useAppDispatch } from "../../store/rootStore";
import { currentYear } from "../../utils/currentYear";
import { useOutside } from "../../utils/useOutside";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { Select } from "../select/select";
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
  const [movieName, setMovieName] = useState(
    `${searchParams.get("movieName") || "death"}`
  );
  const [genresList, setGenresList] = useState(
    searchParams.get("genres")?.split(",") || defaultGenresList
  );
  const [movieYear, setMovieYear] = useState(
    `${searchParams.get("year") || ""}`
  );
  const [ratingFrom, setRatingFrom] = useState(
    `${searchParams.get("ratingFrom") || ""}`
  );
  const [ratingTo, setRatingTo] = useState(
    `${searchParams.get("ratingTo") || ""}`
  );
  const [country, setCountry] = useState(
    `${searchParams.get("country") || ""}`
  );

  const filterConfigure = useSelector(filterConfigureSelector);
  const dispatch = useAppDispatch();

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
        value={movieName}
        onChange={({ target: { value } }) => setMovieName(value)}
        label="Full or shot movie name"
        placeholder="Your text"
      />
      <div>
        <p>Genres</p>
        <Genres>
          <ul>
            {genresList.length ? (
              genresList.map((genre, i) => (
                <GenreItem key={i}>
                  <span id={genre}>{genre}</span>
                  <DeleteGenre
                    id={genre}
                    onClick={(event) =>
                      setGenresList(
                        genresList.filter((el) => el !== event.currentTarget.id)
                      )
                    }
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
          min="1960"
          max={currentYear}
          value={movieYear}
          onChange={({ target: { value } }) => setMovieYear(value)}
        />
      </InputGroup>
      <InputGroup>
        <Input
          label="Rating"
          placeholder="From"
          justifyContent="end"
          type="number"
          min="0"
          max="10"
          value={ratingFrom}
          onChange={({ target: { value } }) => setRatingFrom(value)}
        />
        <Input
          placeholder="To"
          justifyContent="end"
          type="number"
          min="0"
          max="10"
          value={ratingTo}
          onChange={({ target: { value } }) => setRatingTo(value)}
        />
      </InputGroup>
      <Select
        label="Country"
        options={contriesList.sort()}
        value={country}
        onChange={({ target: { value } }) => setCountry(value)}
      />
      <ButtonWrapper>
        <Button width="100%">Clear filter</Button>
        <Button
          width="100%"
          onClick={() => {
            // const querry = {
            //   movieName: `${movieName}`,
            //   genres: genresList,
            //   year: `${movieYear}`,
            //   ratingFrom: `${ratingFrom}`,
            //   ratingTo: `${ratingTo}`,
            //   country: `${country}`,
            // };
            dispatch(
              filterActions.changeFilter({
                movieName: movieName,
                genres: genresList,
                year: movieYear,
                ratingFrom: ratingFrom,
                ratingTo: ratingTo,
                country: country,
              })
            );
            // for (const key in querry) {
            //   if (querry[`${key}`]) {
            //     setSearchParams(key, querry.key);
            //   }
            // }

            // for (const key in querry) {
            //   if (querry[`${key}`]) {
            //     console.log(key, querry[`${key}`]);
            //   }
            // }
          }}
        >
          Show results
        </Button>
      </ButtonWrapper>
    </PopupWrapper>
  );
}
