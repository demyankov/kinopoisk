import styled from "@emotion/styled";
import { Breakpoints } from "../enums/breakpoints";

export const Wrapper = styled.div`
  background-color: var(--background-color);
  min-height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "Header Header"
    "SideBar Main";
  grid-column-gap: var(--spacing-5);
  grid-template-rows: auto 1fr;
  grid-template-columns: var(--sideBarWidth) 1fr;
  max-width: var(--max-width);
  min-width: var(--min-width);
  padding: 0 var(--spacing-9) var(--spacing-4) var(--spacing-9);
  margin: 0 auto;

  @media (max-width: ${Breakpoints.Tablet}) {
    grid-template-areas:
      "Header"
      "Main";
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main`
  grid-area: Main;
`;
