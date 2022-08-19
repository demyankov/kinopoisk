import { RootState } from "../rootStore";

export const favouriteSelector = (
  state: RootState
): RootState["favourite"]["favouriteList"] => state.favourite.favouriteList;

export const favouriteErrorSelector = (
  state: RootState
): RootState["favourite"]["error"] => state.favourite.error;
