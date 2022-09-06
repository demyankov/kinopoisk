import { URLSearchParamsInit } from "react-router-dom";
import { FilterConfigureType } from "../store/filter/filter.slice";

export const setAppSearchParams = (
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          state?: any;
        }
      | undefined
  ) => void,
  filterParams?: FilterConfigureType
) => {
  let params: string = "";
  for (let key in filterParams) {
    if (!!filterParams[key as keyof typeof filterParams]) {
      params += `&${key}=${filterParams[key as keyof typeof filterParams]}`;
      setSearchParams(params ? params : "");
    }
  }
};
