import styled from "@emotion/styled";

export const MovieRaiting = styled.div<{ isFavourite?: boolean }>`
  padding: var(--spacing-9);
  position: absolute;
  top: var(--spacing-7);
  left: var(--spacing-7);
  border-radius: var(--spacing-9);
  background-color: ${({ isFavourite }) =>
    isFavourite
      ? "var(--background-color-bright)"
      : "var(--background-color-raiting)"};
  color: var(--font-color-base);
  white-space: pre;
`;
