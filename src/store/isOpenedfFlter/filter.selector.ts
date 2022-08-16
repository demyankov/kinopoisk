import { RootState } from "../rootStore";

export const filterSelector = (
  state: RootState
): RootState["filter"]["isOpened"] => state.filter.isOpened;
