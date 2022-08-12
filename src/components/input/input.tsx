import React from "react";
import { Error, InputWrapper, Label, StyledInput } from "./inputStyles";
import { InputType } from "./inputType";

export function Input({
  label,
  error,
  id,
  placeholder,
  justifyContent,
  ...otherProps
}: InputType): JSX.Element {
  return (
    <InputWrapper justifyContent={justifyContent}>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        placeholder={placeholder ? placeholder : undefined}
        autoComplete="on"
        type="text"
        {...otherProps}
      ></StyledInput>
      {error ? <Error>{error}</Error> : null}
    </InputWrapper>
  );
}
