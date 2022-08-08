import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  grid-area: Header;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`;

export const UserName = styled.p`
  grid-area: Header;
  color: var(--font-color-base);
  line-height: var(--spacing-6);
`;
