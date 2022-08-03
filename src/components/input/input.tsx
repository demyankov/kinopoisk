import React from "react";
import { InputWrapper, Label, StyledInput } from "./inputStyles";

export interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: "string";
  error?: "string";
}

export function Input({ label, id, placeholder }: InputType): JSX.Element {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        placeholder={placeholder ? placeholder : undefined}
      ></StyledInput>
    </InputWrapper>
  );
}
