import React from "react";
import { Error } from "../Styles/error";
import { SelectWrapper, StyledSelect } from "./selectStyles";

import { SelectType } from "./selectType";

export function Select({
  options,
  label,
  error,
  ...otherProps
}: SelectType): JSX.Element {
  return (
    <SelectWrapper>
      <label>{label}</label>
      <StyledSelect {...otherProps}>
        <option value="">Not selected</option>
        {options.map((option, id) => (
          <option value={option} key={id}>
            {option}
          </option>
        ))}
      </StyledSelect>
      {error ? <Error>{error}</Error> : null}
    </SelectWrapper>
  );
}
