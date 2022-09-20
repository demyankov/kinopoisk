import styled from "@emotion/styled";

export const InputWrapper = styled.div<{
  justifyContent: string | undefined;
}>`
  grid-area: Input;
  position: relative;
  min-height: 100%;
  width: 100%;
  flex: "1";
  display: flex;
  flex-direction: column;
  gap: var(--spacing-9);
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "start"};
`;

export const InputPositionWrapper = styled.span`
  position: relative;
  /* min-height: 100%; */
`;

export const ShowPasswordIcon = styled.span`
  position: absolute;
  right: var(--spacing-7);
  bottom: 50%;
  transform: translateY(50%);
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: var(--spacing-7) var(--spacing-6);
  background-color: var(--background-color-second);
  border-radius: var(--spacing-9);

  &::placeholder {
    color: var(--font-color-second);
  }
`;
