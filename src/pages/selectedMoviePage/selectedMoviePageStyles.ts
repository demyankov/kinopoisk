import styled from "@emotion/styled";
import { MovieRaiting } from "../../components/styles/movieRaitingStyle";

export const Wrapper = styled.div`
  display: flex;
  gap: var(--spacing-4);
`;
export const ImageSection = styled.div`
  min-width: 15rem;
  flex-basis: 30%;
`;
export const Poster = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const InteractionWrapper = styled.div`
  display: flex;
  border-radius: var(--spacing-8);
  border: 2px solid var(--background-color);
  overflow: hidden;
`;

export const InteractionButton = styled.button<{ isFavourite?: boolean }>`
  flex: 1;
  gap: 2px;
  border-radius: none;
  border-color: var(--background-color);
  background-color: ${(props) =>
    props.isFavourite
      ? "var(--background-color-bright)"
      : "var(--background-color-second)"};
  padding: var(--spacing-7);
`;

export const InfoSection = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;
export const ImageWrapper = styled.div`
  border-radius: var(--spacing-7);
  overflow: hidden;
  margin-bottom: var(--spacing-5);
`;
export const MovieName = styled.h2``;

export const RaitingWrapper = styled.div`
  display: flex;
  gap: var(--spacing-7);
`;

export const Raiting = styled(MovieRaiting)`
  position: static;
`;

export const RaitingImdb = styled(Raiting)`
  background-color: var(--background-color-second);
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
`;
export const Runtime = styled(Raiting)`
  background-color: var(--background-color-second);
`;
