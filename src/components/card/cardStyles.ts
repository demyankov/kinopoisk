import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  position: relative;
  flex-basis: calc(17%);
  min-width: 200px;
  min-height: 100%;
  overflow: hidden;
  transition: 0.2s ease-in-out;

  & > div:first-of-type::before {
    content: "";
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5)
    );
    height: 100%;
    width: 50px;
    position: absolute;
    top: 0;
    left: -150%;
    transform: skewX(-45deg);
  }

  &:focus {
    outline: none;
  }
  &:focus > div:first-of-type::before {
    left: 150%;
    transition: 0.5s ease-in-out;

    outline: none;
  }

  &:focus > div:first-of-type {
    /* outline: solid 1px #fff;
    transform: scale(1.02); */
    background: #000;
  }

  /* .shine-button:focus {
    background: #83bec5;
    color: #fff !important;
    outline: none;
} */
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

  @keyframes imageHover {
    0% {
      transform: scale(0.98);
      transform: rotate(-1deg);
    }

    50% {
      transform: scale(0.98);
      transform: rotate(1deg);
    }
    100% {
      transform: scale(1);
      transform: rotate(0deg);
    }
  }
  &:hover {
    animation: imageHover 0.3s infinite ease-in-out;
    animation-iteration-count: 1;
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
