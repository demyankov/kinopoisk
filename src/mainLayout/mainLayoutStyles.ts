import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: var(--background-color);
  min-height: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "SideBar Header"
    "SideBar Main"
    "Footer Footer";
  grid-column-gap: var(--spacing-5);
  grid-row-gap: var(--spacing-2);
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  max-width: var(--max-width);
  padding: var(--spacing-4) var(--spacing-9);
  margin: 0 auto;
`;

export const Main = styled.main`
  grid-area: Main;
`;

export const Footer = styled.footer`
  grid-area: Footer;
  padding-left: var(--spacing-2);
`;
