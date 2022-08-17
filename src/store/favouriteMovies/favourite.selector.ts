import { RootState } from "../rootStore";

export const favouriteSelector = (
  state: RootState
): RootState["favourite"]["favouriteList"] => state.favourite.favouriteList;
