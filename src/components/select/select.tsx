import React from "react";
import { Error } from "../styles/error";
import { Label, SelectWrapper, StyledSelect } from "./selectStyles";

import { SelectType } from "./selectType";

export function Select({
  options,
  label,
  error,
  ...otherProps
}: SelectType): JSX.Element {
  return (
    <SelectWrapper>
      <Label>{label}</Label>
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
