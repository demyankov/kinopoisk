import { useSelector } from "react-redux";
import { filterSortSelector } from "../../../store/filter/filter.selector";
import { filterActions } from "../../../store/filter/filter.slice";
import { useAppDispatch } from "../../../store/rootStore";
import { SortBy, SortByWrapper } from "./sortBySwitcherStyles";

export function SortBySwitcher({
  firstLabel,
  secondLabel,
}: {
  firstLabel: string;
  secondLabel: string;
}) {
  const sortBy = useSelector(filterSortSelector);
  const dispatch = useAppDispatch();

  const setSortBy = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterActions.sortBy(value));
  };

  return (
    <SortByWrapper>
      <p>Sort by</p>
      <SortBy id="">
        <div>
          <input
            id={firstLabel}
            type="radio"
            value={firstLabel}
            checked={sortBy === firstLabel ? true : false}
            onChange={setSortBy}
            name="sortBy"
          />
          <label htmlFor={firstLabel}>{firstLabel}</label>
        </div>
        <div>
          <input
            id={secondLabel}
            type="radio"
            value={secondLabel}
            checked={sortBy === secondLabel ? true : false}
            onChange={setSortBy}
            name="sortBy"
          />
          <label htmlFor={secondLabel}>{secondLabel}</label>
        </div>
      </SortBy>
    </SortByWrapper>
  );
}
