import { Ref, RefObject } from "react";
import { LocalStorage } from "../../enums/localStorage";
import { AppDispatch, rootStore } from "../rootStore";
import { themeActions } from "./theme.slice";

export const appRebootThemeAction =
  (input?: RefObject<HTMLInputElement>) => (dispatch: AppDispatch) => {
    try {
      const savedTheme = localStorage.getItem(LocalStorage.Theme);
      if (input?.current) {
        input.current.checked = savedTheme === "Light";
      }
      return dispatch(themeActions.rebootTheme(savedTheme));
    } catch {}
  };
