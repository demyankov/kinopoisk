import { useState } from "react";
import { defoultGenresList } from "../../generalData/defaultGenresList";
import { Input } from "../input/input";
import { Select } from "../select/select";

// import { Select } from "../select/input/select";
import {
  CloseSearchForm,
  DeleteGenre,
  GenreItem,
  Genres,
  InputGroup,
  PopupWrapper,
} from "./filtersPopupStyles";
import { SortBySwitcher } from "./sortBySwitcher/sortBySwitcher";

export function FiltersPopup(): JSX.Element {
  const [genresListFilter, setGenresListFilter] = useState(defoultGenresList);
  const [searchFornIsActive, setSearchFornIsActive] = useState(true);
  const currentYear = new Date().getFullYear();

  return (
    <PopupWrapper className={searchFornIsActive ? "active" : undefined}>
      <CloseSearchForm onClick={() => setSearchFornIsActive(false)}>
        Х
      </CloseSearchForm>
      <SortBySwitcher firstLabel="Raiting" secondLabel="Year" />
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
        <Input
          label="Years of release"
          placeholder="From"
          type="number"
          min="1960"
          max={currentYear}
        />
        <Input
          placeholder="To"
          justifyContent="end"
          type="number"
          min="1960"
          max={currentYear}
        />
      </InputGroup>
      <InputGroup>
        <Input
          label="Raiting"
          placeholder="From"
          type="number"
          min="0"
          max="10"
        />
        <Input
          placeholder="To"
          justifyContent="end"
          type="number"
          min="0"
          max="10"
        />
      </InputGroup>
      <Select
        label="Country"
        options={["USA", "United Kingdom", "India", "France"]}
      />
    </PopupWrapper>
  );
}
