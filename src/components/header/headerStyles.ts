import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  grid-area: Header;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`;

export const OpenFilter = styled.img`
  position: absolute;
  right: var(--spacing-7);
  top: 50%;
  transform: translateY(-50%);
`;

export const UserName = styled.p`
  grid-area: Header;
  color: var(--font-color-base);
  line-height: var(--spacing-6);
`;

export const SignInLink = styled(Link)`
  color: var(--font-color-base);
  line-height: var(--spacing-6);
`;
