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
  column-gap: var(--spacing-8);
  margin: 0;

  li {
    position: relative;
    padding-left: var(--spacing-8);
    color: var(--font-color-second);
    list-style-type: none;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: calc(var(--spacing-8) / 2);
    height: calc(var(--spacing-8) / 2);
    border-radius: 50%;
    background-color: var(--font-color-second);
  }
`;
