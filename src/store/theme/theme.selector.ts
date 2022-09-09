import { RootState } from "../rootStore";

export const themeSelector = (
  state: RootState
): RootState["theme"]["themeVariant"] => state.theme.themeVariant;
