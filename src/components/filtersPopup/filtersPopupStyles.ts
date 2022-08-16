import styled from "@emotion/styled";

export const PopupWrapper = styled.form`
  position: fixed;
  top: 0;
  right: -100%;
  padding: var(--spacing-4);
  max-width: 32rem;
  border-bottom-left-radius: var(--spacing-7);
  border-top-left-radius: var(--spacing-7);
  background-color: var(--background-color-medium);
  min-height: 100%;
  transition: all 0.6s ease;

  &.active {
    right: 0;
  }

  & > div {
    margin-bottom: var(--spacing-4);
  }

  option {
    color: var(--font-color-base);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: var(--spacing-6);
`;

export const Genres = styled.div`
  padding: var(--spacing-8);
  background-color: var(--background-color-second);
  border-radius: var(--spacing-9);

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-6);
    margin: 0;
  }
`;

export const GenreItem = styled.li`
  display: flex;
  gap: var(--spacing-9);
  padding: var(--spacing-9);
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
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: var(--font-color-base);

  &:hover {
    color: var(--font-color-error);
    transform: scale(1.05);
  }
`;
