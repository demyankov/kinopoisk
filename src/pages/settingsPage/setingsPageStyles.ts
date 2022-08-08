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
  label {
    position: relative;
    width: 4.6rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: #fff;
  }

  label::after {
    content: "";
    position: absolute;
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
    left: 0.3rem;
    top: 0.3rem;
    background-color: #000;
  }

  input:checked + label::after {
    left: 2.3rem;
    background-color: green;
  }
`;
