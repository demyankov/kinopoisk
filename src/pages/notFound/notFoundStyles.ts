import styled from "@emotion/styled";

export const Wrapper = styled.div<{ themeVariant: "Light" | "Dark" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  justify-content: center;
  color: red;
  font-size: 1.5rem;
  background-color: var(--background-color);
  margin: auto;

  svg path:nth-of-type(2),
  svg path:nth-of-type(3),
  svg path:nth-of-type(4),
  svg path:nth-of-type(5),
  svg path:nth-of-type(7) {
    fill: var(--font-color-base);
  }
`;
