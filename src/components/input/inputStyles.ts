import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-9);
`;

export const Label = styled.label``;

export const StyledInput = styled.input`
  width: 100%;
  padding: var(--spacing-7) var(--spacing-6);
  background-color: var(--background-color-second);

  &::placeholder {
    color: var(--font-color-second);
  }
`;

export const Error = styled.p`
  color: var(--font-color-error);
`;
