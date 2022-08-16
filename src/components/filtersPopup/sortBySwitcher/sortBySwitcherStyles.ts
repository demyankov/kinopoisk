import styled from "@emotion/styled";

export const SortByWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-9);
`;

export const SortBy = styled.fieldset`
  display: flex;
  border: 1px solid var(--background-color-second);
  border-radius: var(--spacing-9);
  overflow: hidden;

  & > div {
    flex: 1;
  }

  & > div:first-of-type {
    border-right: 1px solid var(--background-color-second);
  }

  input {
    display: none;
  }

  label {
    display: flex;
    justify-content: center;
    padding: var(--spacing-8);
  }

  input[type="radio"]:checked + label {
    background-color: var(--background-color-second);
  }
`;
