import { RefObject } from "react";
import { LocalStorage } from "../../enums/localStorage";
import { getSavedtheme } from "../../utils/getSavedTheme";
import { AppDispatch } from "../rootStore";
import { themeActions } from "./theme.slice";

export const appRebootThemeAction =
  (input?: RefObject<HTMLInputElement>) => (dispatch: AppDispatch) => {
    try {
      const savedTheme = getSavedtheme();
      if (input?.current) {
        input.current.checked = savedTheme === "Light";
      }
      return dispatch(themeActions.rebootTheme(savedTheme));
    } catch {}
  };
