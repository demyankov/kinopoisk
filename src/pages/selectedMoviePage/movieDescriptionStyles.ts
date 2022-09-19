import styled from "@emotion/styled";

export const DescriptionWrapper = styled.div`
  grid-area: CurrentMovieDescription;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);

  & > div:first-of-type {
    display: grid;
    grid-template-columns: auto 1fr;
    row-gap: var(--spacing-7);
    column-gap: var(--spacing-3);
  }
`;
