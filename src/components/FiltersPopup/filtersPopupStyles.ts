import styled from "@emotion/styled";
import { Breakpoints } from "../../enums/breakpoints";

export const PopupWrapper = styled.form`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: -32rem;
  max-width: 32rem;
  border-bottom-left-radius: var(--spacing-7);
  border-top-left-radius: var(--spacing-7);
  background-color: var(--background-color-medium);
  min-height: 100%;
  transition: all 0.6s ease;

  & > div {
    height: 100vh;
    padding: var(--spacing-8) var(--spacing-6);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
    justify-content: space-between;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  & > div::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: ${Breakpoints.Mobile}) {
    width: 100%;
    min-height: auto;
  }

  &.active {
    right: 0;
  }
  option {
    color: var(--font-color-base);
  }
`;

export const PopUpHeader = styled.div`
  display: flex;
  gap: var(--spacing-7);
  justify-content: space-between;
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  gap: var(--spacing-6);
`;

export const Genres = styled.div`
  margin-top: var(--spacing-10);
  padding: var(--spacing-9);
  background-color: var(--background-color-second);
  border-radius: var(--spacing-9);

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-9);
    margin: 0;
  }
`;

export const GenreItem = styled.li`
  display: flex;
  gap: var(--spacing-9);
  padding: var(--spacing-10) var(--spacing-9);
  background-color: var(--background-color-medium);
  border-radius: var(--spacing-9);
  border: 1px solid var(--background-color-medium);

  &:hover {
    border: 1px solid var(--background-color-invert);
  }
`;

export const DeleteGenre = styled.span`
  color: var(--font-color-second);

  &:hover {
    color: var(--font-color-error);
    transform: scale(1.05);
  }
`;

export const CloseSearchForm = styled.div`
  color: var(--font-color-base);

  &:hover {
    color: var(--font-color-error);
    transform: scale(1.05);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--spacing-7);
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
`;
