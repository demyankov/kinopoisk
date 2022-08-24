import styled from "@emotion/styled";

export const Error = styled.p<{ position?: string }>`
  position: ${(props) => (props.position ? props.position : "absolute")};
  bottom: calc(-1 * var(--spacing-5));
  color: var(--font-color-error);
`;
