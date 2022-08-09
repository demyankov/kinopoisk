import React from "react";

export interface ButtonType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
}
