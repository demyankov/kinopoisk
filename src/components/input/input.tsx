import React, { useState } from "react";
import { Error } from "../styles/error";
import {
  InputPositionWrapper,
  InputWrapper,
  ShowPasswordIcon,
  StyledInput,
} from "./inputStyles";
import { InputType } from "./inputType";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

export function Input({
  children,
  password,
  label,
  error,
  errorPosition,
  id,
  placeholder,
  justifyContent,
  type = "text",
  ...otherProps
}: InputType): JSX.Element {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(
    type === "password" ? false : true
  );

  const handleClick = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <InputWrapper justifyContent={justifyContent}>
      {children}
      <label htmlFor={id}>{label}</label>
      <InputPositionWrapper>
        <StyledInput
          id={id}
          placeholder={placeholder ? placeholder : undefined}
          autoComplete="on"
          type={isShowPassword ? "text" : "password"}
          {...otherProps}
        />
        {type === "password" ? (
          <ShowPasswordIcon onMouseDown={handleClick} onMouseUp={handleClick}>
            {isShowPassword ? <Visibility /> : <VisibilityOff />}
          </ShowPasswordIcon>
        ) : null}
      </InputPositionWrapper>
      {error ? <Error position={errorPosition}>{error}</Error> : null}
    </InputWrapper>
  );
}
