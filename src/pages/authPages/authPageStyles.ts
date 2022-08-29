import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import back from "../../components/images/mainBackground.jpg";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: var(--max-width);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: var(--spacing-3) var(--spacing-3);
  background: ${() => `linear-gradient(rgba(0,0,0, 0.5) 0 100%), url(${back})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  width: 100%;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
  flex-basis: 30%;
  min-width: 25rem;
  background-color: var(--background-color-medium);
  border-radius: var(--spacing-6);
`;

export const SignLink = styled(Link)`
  color: var(--font-color-active);
`;
