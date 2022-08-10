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
    width: var(--theme-switcher-width);
    height: calc(var(--theme-switcher-width) * 0.5);
    border-radius: 9999px;
    background-color: var(--background-color-invert);
  }

  @keyframes moveRight {
    10% {
      transform: scale(0.97);
    }
    20% {
      transform: scale(1.03);
    }
    30% {
      transform: scale(0.97);
    }
    40% {
      transform: scale(1.03);
    }
    50% {
      transform: scale(0.97);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes moveLeft {
    10% {
      transform: scale(0.97);
    }
    20% {
      transform: scale(1.03);
    }
    30% {
      transform: scale(0.97);
    }
    40% {
      transform: scale(1.03);
    }
    50% {
      transform: scale(0.97);
    }
    100% {
      transform: scale(1);
    }
  }

  label::after {
    content: "";
    position: absolute;
    height: calc(var(--theme-switcher-width) * 0.4);
    width: calc(var(--theme-switcher-width) * 0.4);
    border-radius: 50%;
    top: 10%;
    left: 5%;
    background-color: var(--background-color-medium);
    transition: left 0.5s ease-in;
    animation: moveLeft 0.5s infinite ease-in-out;
    animation-iteration-count: 1;
  }

  input:checked + label::after {
    left: calc(var(--theme-switcher-width) * 0.55);
    animation: moveRight 0.5s infinite ease-in-out;
    animation-iteration-count: 1;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-4);
`;
