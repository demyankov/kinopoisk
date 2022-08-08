import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SideBarWrapper = styled.nav`
  grid-area: SideBar;
  min-height: 100vh;
  padding: var(--spacing-2);
`;

export const SideBarLink = styled(NavLink)`
  color: var(--font-color-second);
  display: flex;
  gap: var(--spacing-6);

  &.active {
    color: var(--font-color-active);
    svg > path {
      fill: var(--font-color-active);
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin-top: var(--spacing-1);
`;
