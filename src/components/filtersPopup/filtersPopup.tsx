import { Input } from "../input/input";
import { GenreWrapper, InputGroup, PopupWrapper } from "./filtersPopupStyles";

export function FiltersPopup(): JSX.Element {
  return (
    <PopupWrapper>
      <Input label="Full or shot movie name" placeholder="Your text" />
      <Input label="Country" placeholder="Select country" />
      <InputGroup>
        <Input label="Years of release" placeholder="From" />
        <Input placeholder="To" justifyContent="end" />
      </InputGroup>
      <InputGroup>
        <Input label="Raiting" placeholder="From" />
        <Input placeholder="To" justifyContent="end" />
      </InputGroup>
      <GenreWrapper></GenreWrapper>
    </PopupWrapper>
  );
}
