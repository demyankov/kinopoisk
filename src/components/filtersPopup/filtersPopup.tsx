import { useState } from "react";
import { defoultGenresList } from "../../generalData/defaultGenresList";
import { Input } from "../input/input";
import { Select } from "../select/input/select";
// import { Select } from "../select/input/select";
import {
  CloseSearchForm,
  DeleteGenre,
  GenreItem,
  Genres,
  InputGroup,
  PopupWrapper,
  SortBy,
} from "./filtersPopupStyles";

export function FiltersPopup(): JSX.Element {
  const [genresListFilter, setGenresListFilter] = useState(defoultGenresList);
  const [searchFornIsActive, setSearchFornIsActive] = useState(true);

  return (
    <PopupWrapper className={searchFornIsActive ? "active" : undefined}>
      <CloseSearchForm onClick={() => setSearchFornIsActive(false)}>
        Х
      </CloseSearchForm>

      <SortBy id="sortBy">
        <Input
          id="raiting"
          label="Raiting"
          type="radio"
          value="raiting"
          name="sortBy"
        />
        <Input id="year" label="Year" type="radio" value="year" name="sortBy" />
      </SortBy>

      <Input label="Full or shot movie name" placeholder="Your text" />
      <Genres>
        <ul>
          {genresListFilter.length ? (
            genresListFilter.map((genre, i) => (
              <GenreItem key={i}>
                <span id={genre}>{genre}</span>
                <DeleteGenre
                  id={genre}
                  onClick={(event) =>
                    setGenresListFilter(
                      genresListFilter.filter(
                        (el) => el !== event.currentTarget.id
                      )
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
      <InputGroup>
        <Input label="Years of release" placeholder="From" type="number" />
        <Input placeholder="To" justifyContent="end" />
      </InputGroup>
      <InputGroup>
        <Input label="Raiting" placeholder="From" />
        <Input placeholder="To" justifyContent="end" />
      </InputGroup>
      <Select
        label="Country"
        options={["USA", "United Kingdom", "India", "France"]}
      />
    </PopupWrapper>
  );
}
