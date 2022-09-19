import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Breakpoints } from "../../enums/breakpoints";
import { Button } from "../button/button";

export const HeaderWrapper = styled.header`
  grid-area: Header;
  display: grid;
  align-items: end;
  grid-template-areas: "HeaderImage Input User HeaderAuth";
  grid-template-columns: auto 1fr auto auto;
  position: sticky;
  top: 0;
  z-index: 9999;
  gap: var(--spacing-6);
  padding: var(--spacing-6) 0;
  background-color: var(--background-color);

  @media (max-width: ${Breakpoints.Tablet}) {
    grid-template-areas: "HeaderImage Input Burger";
    grid-template-columns: auto 1fr auto;
  }

  @media (max-width: ${Breakpoints.Mobile}) {
    grid-template-areas:
      "HeaderImage Burger"
      "Input Input";
    grid-template-columns: 1fr auto;
  }
`;

export const ImageWrapper = styled.div`
  grid-area: HeaderImage;
  width: var(--sideBarWidth);
  padding-left: var(--spacing-4);

  @media (max-width: ${Breakpoints.Tablet}) {
    width: auto;
    padding-left: 0;
  }
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
  grid-area: User;
  display: flex;
  align-items: center;
  color: var(--font-color-base);
  line-height: var(--spacing-6);
  min-height: 100%;

  @media (max-width: ${Breakpoints.Tablet}) {
    display: none;
  }
`;

export const SignInLink = styled(Link)`
  grid-area: HeaderAuth;
  color: var(--font-color-base);
  line-height: var(--spacing-6);

  @media (max-width: ${Breakpoints.Tablet}) {
    display: none;
  }
`;

export const SignOutLink = styled(Button)`
  grid-area: HeaderAuth;
  @media (max-width: ${Breakpoints.Tablet}) {
    display: none;
  }
`;
