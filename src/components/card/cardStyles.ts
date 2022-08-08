import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  position: relative;
  flex-basis: calc(17%);
  min-width: 200px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: var(--spacing-6);

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const MovieName = styled.p``;

export const MovieGenre = styled.p``;

export const MovieRaiting = styled.div`
  padding: var(--spacing-9);
  position: absolute;
  top: var(--spacing-7);
  left: var(--spacing-7);
  border-radius: var(--spacing-9);
  background-color: var(--background-raiting);
  color: var(--font-color-base);
`;
