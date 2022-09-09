import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "../../enums/localStorage";

export type ThemeVariant = "Dark" | "Light";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeVariant: (localStorage.getItem(LocalStorage.Theme) ||
      "Dark") as ThemeVariant,
    initialThemeVariant: (localStorage.getItem(LocalStorage.Theme) ||
      "Dark") as ThemeVariant,
  },
  reducers: {
    toggleTheme: (state) => {
      state.themeVariant = state.themeVariant === "Dark" ? "Light" : "Dark";
    },
    saveTheme: (state) => {
      state.initialThemeVariant = state.themeVariant;
    },
  },
});

export const { reducer: themeReducer, actions: themeActions } = themeSlice;
