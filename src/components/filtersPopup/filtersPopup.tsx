import { useState } from "react";
import { useSelector } from "react-redux";
import { defoultGenresList } from "../../generalData/defaultGenresList";
import { filterSelector } from "../../store/isOpenedfFlter/filter.selector";
import { filterActions } from "../../store/isOpenedfFlter/filter.slice";
import { useAppDispatch } from "../../store/rootStore";
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
  const [genresListFilter, setGenresListFilter] = useState(defoultGenresList);
  // const isOpen = useSelector(filterSelector);
  // const dispatch = useAppDispatch();
  const currentYear = new Date().getFullYear();

  const { refForm, isOpen, dispatch } = useOutside();

  return (
    <PopupWrapper ref={refForm} className={isOpen ? "active" : undefined}>
      <PopUpHeader>
        <h3>Filters</h3>
        <CloseSearchForm onClick={() => dispatch(filterActions.close())}>
          Х
        </CloseSearchForm>
      </PopUpHeader>
      <SortBySwitcher firstLabel="Raiting" secondLabel="Year" />
      <Input label="Full or shot movie name" placeholder="Your text" />
      <div>
        <p>Genres</p>
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
      </div>
      <InputGroup>
        <Input
          label="Years of release"
          justifyContent="end"
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
          justifyContent="end"
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
      <ButtonWrapper>
        <Button width="100%">Clear filter</Button>
        <Button width="100%">Show results</Button>
      </ButtonWrapper>
    </PopupWrapper>
  );
}
