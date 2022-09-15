import { LocalStorage } from "../../enums/localStorage";
import { rootStore } from "../rootStore";

export const appSaveThemeAction = () => {
  try {
    localStorage.setItem(
      LocalStorage.Theme,
      rootStore.getState().theme.themeVariant
    );
  } catch {}
};
