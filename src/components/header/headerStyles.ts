import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Breakpoints } from "../../enums/breakpoints";
import { Button } from "../button/button";

export const HeaderWrapper = styled.header`
  grid-area: Header;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 9999;
  align-items: center;
  gap: var(--spacing-4);
  padding: var(--spacing-4) 0;
  background-color: var(--background-color);
`;

export const ImageWrapper = styled.header`
  width: var(--sideBarWidth);
  padding-left: var(--spacing-4);
`;

export const OpenFilter = styled.button`
  position: absolute;
  right: var(--spacing-7);
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  appearance: none;
  border: none;
  z-index: 9999;
`;

export const UserName = styled.p`
  grid-area: Header;
  color: var(--font-color-base);
  line-height: var(--spacing-6);
  @media (max-width: ${Breakpoints.Tablet}) {
    display: none;
  }
`;

export const SignInLink = styled(Link)`
  color: var(--font-color-base);
  line-height: var(--spacing-6);

  @media (max-width: ${Breakpoints.Tablet}) {
    display: none;
  }
`;

export const SignOutLink = styled(Button)`
  @media (max-width: ${Breakpoints.Tablet}) {
    display: none;
  }
`;
