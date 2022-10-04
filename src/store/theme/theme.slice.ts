import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "../../enums/localStorage";
import { getSavedtheme } from "../../utils/getSavedTheme";

export type ThemeVariant = "Dark" | "Light";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeVariant: (getSavedtheme() || "Dark") as ThemeVariant,
    initialThemeVariant: (getSavedtheme() || "Dark") as ThemeVariant,
  },
  reducers: {
    toggleTheme: (state) => {
      state.themeVariant = state.themeVariant === "Dark" ? "Light" : "Dark";
    },
    rebootTheme: (state, action) => {
      state.themeVariant = action.payload;
    },
  },
});

export const { reducer: themeReducer, actions: themeActions } = themeSlice;
