import React from "react";
import { Error } from "../styles/error";
import { InputWrapper, StyledInput } from "./inputStyles";
import { InputType } from "./inputType";

export function Input({
  children,
  label,
  error,
  id,
  placeholder,
  justifyContent,
  ...otherProps
}: InputType): JSX.Element {
  return (
    <InputWrapper justifyContent={justifyContent}>
      {children}
      <label htmlFor={id}>{label}</label>
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
