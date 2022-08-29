import { RootState } from "../rootStore";

export const filterSelectorIsOpened = (
  state: RootState
): RootState["filter"]["isOpened"] => state.filter.isOpened;

export const filterSortSelector = (
  state: RootState
): RootState["filter"]["sortConfigure"] => state.filter.sortConfigure;

export const filterConfigureSelector = (
  state: RootState
): RootState["filter"]["filterConfigure"] => state.filter.filterConfigure;
