import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "SideBar Header"
    "SideBar Main";
`;

export const Main = styled.main`
  grid-area: Main;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-gap: var(--spacing-9);
`;
