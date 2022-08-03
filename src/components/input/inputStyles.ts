import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label``;

export const StyledInput = styled.input`
  width: 100%;
  padding: var(--spacing-7) var(--spacing-6);
  background-color: var(--background-color-second);

  &::placeholder {
    color: var(--placeholder-color);
  }
`;
