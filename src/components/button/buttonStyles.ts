import styled from "@emotion/styled";

export const ButtonWrapper = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  padding: var(--spacing-7) var(--spacing-1);
  font-size: var(--subheadline-3-font-size);
  font-weight: var(--subheadline-3-font-weight);
  line-height: var(--subheadline-3-line-height);
  background-color: var(--background-color-bright);

  &:hover {
    background-color: var(--background-color-button-hover);
    border: 2px solid var(--background-color-button-hover);
  }

  &:active {
    border: 2px solid var(--background-color-invert);
  }

  &:disabled {
    border: none;
    background-color: var(--background-color-disabled);
  }
`;
