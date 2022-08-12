import styled from "@emotion/styled";
import { MovieRaiting } from "../../components/styles/movieRaitingStyle";

export const Wrapper = styled.div`
  display: flex;
  gap: var(--spacing-4);
`;
export const ImageSection = styled.div`
  flex: 1;
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
