import { RootState } from "../rootStore";

export const sideBarSelector = (
  state: RootState
): RootState["sideBar"]["isOpened"] => state.sideBar.isOpened;
