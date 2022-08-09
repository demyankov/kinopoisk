import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: var(--background-color);
`;

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "SideBar Header"
    "SideBar Main";
  grid-column-gap: var(--spacing-5);
  grid-row-gap: var(--spacing-2);
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  max-width: var(--max-width);
  padding: var(--spacing-4) var(--spacing-9);
  margin: 0 auto;
`;
