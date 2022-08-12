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

export const MovieName = styled.h5``;

export const MovieGenre = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--spacing-4);
  margin: 0;

  li {
    color: var(--font-color-second);
  }
  li:first-of-type {
    list-style-type: none;
  }
`;
