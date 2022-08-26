import styled from "@emotion/styled";

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
  padding: 0 var(--spacing-9) var(--spacing-4) var(--spacing-9);
  margin: 0 auto;
`;

export const Main = styled.main`
  grid-area: Main;
`;
