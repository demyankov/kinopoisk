import styled from "@emotion/styled";

export const SettingsItemWrapper = styled.div`
  margin-bottom: var(--spacing-4);

  h3 {
    margin-bottom: var(--spacing-7);
  }
`;

export const SettingsItem = styled.div`
  display: flex;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
  background-color: var(--background-color-medium);
  border-radius: var(--spacing-8);

  div:first-of-type {
    flex: 1;
  }

  p {
    color: var(--font-color-second);
  }
`;

export const SettingsSubItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

export const ThemeSwitcher = styled.div`
  input {
    display: none;
  }

  label {
    position: relative;
    width: 4.6rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: var(--background-color-invert);
  }

  label::after {
    content: "";
    position: absolute;
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    left: 0.2rem;
    top: 0.2rem;
    background-color: var(--background-color-medium);
    transition: all 0.3s ease-in;
  }

  input:checked + label::after {
    left: 2.8rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-4);
`;
