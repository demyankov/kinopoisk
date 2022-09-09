import { LocalStorage } from "../../enums/localStorage";
import { AppDispatch, rootStore } from "../rootStore";

export const appSaveThemeAction = () => (dispatch: AppDispatch) => {
  try {
    localStorage.setItem(
      LocalStorage.Theme,
      rootStore.getState().theme.themeVariant
    );
  } catch {}
};
