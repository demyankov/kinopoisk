import styled from "@emotion/styled";
import { MovieRating } from "../../components/Styles/movieRatingStyle";
import { Breakpoints } from "../../enums/breakpoints";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "CurrentMovieImage CurrentMovieHeader"
    "CurrentMovieImage CurrentMovieDescription";
  grid-template-columns: 1fr 3fr;
  gap: var(--spacing-4);

  @media (max-width: ${Breakpoints.Mobile}) {
    grid-template-areas: "CurrentMovieHeader" "CurrentMovieImage" "CurrentMovieDescription";
    grid-template-columns: auto;
  }
`;

export const ImageSection = styled.div`
  grid-area: CurrentMovieImage;
  width: 100%;
  display: flex;
  justify-content: center;
  min-width: 15rem;

  & > div {
    @media (max-width: ${Breakpoints.Mobile}) {
      min-width: 19rem;
      width: 90%;
    }
  }
`;

export const Poster = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const InteractionWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 4px;
  border-radius: var(--spacing-8);
  overflow: hidden;
`;

export const InteractionButton = styled.button<{ isFavourite?: boolean }>`
  flex: 1;
  border: none;
  background-color: ${(props) =>
    props.isFavourite
      ? "var(--background-color-bright)"
      : "var(--background-color-second)"};
  padding: var(--spacing-7);

  & > button {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderMovieDescription = styled.div`
  grid-area: CurrentMovieHeader;
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

export const RatingWrapper = styled.div`
  display: flex;
  gap: var(--spacing-7);
`;

export const Rating = styled(MovieRating)`
  position: static;
`;

export const RatingImdb = styled(Rating)`
  background-color: var(--background-color-second);
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
`;
export const Runtime = styled(Rating)`
  background-color: var(--background-color-second);
`;
