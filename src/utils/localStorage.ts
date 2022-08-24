import { LocalStorage } from "../enums/localStorage";

export const initialState = (name: string) => {
  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name) || "")
    : [];
};

export function removeTokensFromLocalStorage(): void {
  localStorage.removeItem(LocalStorage.AccessToken);
  localStorage.removeItem(LocalStorage.RefreshToken);
}
