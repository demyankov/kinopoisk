import React from "react";
import { Error, InputWrapper, Label, StyledInput } from "./inputStyles";
import { InputType } from "./inputType";

export function Input({
  label,
  error,
  id,
  placeholder,
  ...otherProps
}: InputType): JSX.Element {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        placeholder={placeholder ? placeholder : undefined}
        {...otherProps}
      ></StyledInput>
      <Error>{error}</Error>
    </InputWrapper>
  );
}
