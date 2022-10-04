import styled from "@emotion/styled";

export const ButtonWrapper = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  padding: var(--spacing-8) var(--spacing-4);
  border-radius: var(--spacing-8);
  font-size: var(--subheadline-3-font-size);
  font-weight: var(--subheadline-3-font-weight);
  line-height: var(--subheadline-3-line-height);
  background-color: var(--background-color-bright);
  border: 2px solid var(--background-color);

  &:hover {
    background-color: var(--background-color-button-hover);
    border: 2px solid var(--background-color-button-hover);
  }

  &:active {
    border: 2px solid var(--background-color-invert);
  }

  &:disabled {
    background-color: var(--background-color-disabled);
    border: 2px solid var(--background-color);
  }
`;
