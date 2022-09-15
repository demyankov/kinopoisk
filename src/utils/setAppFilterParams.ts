import { FilterConfigureType } from "../store/filter/filter.slice";

export const setAppFilterParams =
  (
    payload: string,
    setFilterParams: React.Dispatch<React.SetStateAction<FilterConfigureType>>
  ) =>
  (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) =>
    setFilterParams((prevParams) => {
      return { ...prevParams, [payload]: e.target.value };
    });
