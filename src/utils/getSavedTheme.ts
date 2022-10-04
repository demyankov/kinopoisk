import { LocalStorage } from "../enums/localStorage";

export const getSavedtheme = () => {
  return localStorage.getItem(LocalStorage.Theme)
    ? localStorage.getItem(LocalStorage.Theme)
    : "";
};
