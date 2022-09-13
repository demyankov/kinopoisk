import styled from "@emotion/styled";
import { Breakpoints } from "../../enums/breakpoints";

export const BurgerWrapper = styled.button`
  padding: var(--spacing-8) var(--spacing-4);
  border-radius: var(--spacing-8);
  background-color: var(--background-color-bright);
  border: none;
  display: none;

  &:hover {
  }

  &:active {
  }

  &:disabled {
  }

  @media (max-width: ${Breakpoints.Tablet}) {
    display: block;
  }
`;
