import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #000;
`;

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "SideBar Header"
    "SideBar Main";
  grid-column-gap: var(--spacing-5);
  grid-row-gap: var(--spacing-2);

  max-width: var(--max-width);
  padding: var(--spacing-9);
  margin: 0 auto;
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-9);
`;
