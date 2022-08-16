import { SortBy, SortByWrapper } from "./sortBySwitcherStyles";

export function SortBySwitcher({
  firstLabel,
  secondLabel,
}: {
  firstLabel: string;
  secondLabel: string;
}) {
  return (
    <SortByWrapper>
      <p>Sort by</p>
      <SortBy id="">
        <div>
          <input
            id={firstLabel}
            type="radio"
            value={firstLabel}
            name="sortBy"
            defaultChecked
          />
          <label htmlFor={firstLabel}>{firstLabel}</label>
        </div>
        <div>
          <input
            id={secondLabel}
            type="radio"
            value={secondLabel}
            name="sortBy"
          />
          <label htmlFor={secondLabel}>{secondLabel}</label>
        </div>
      </SortBy>
    </SortByWrapper>
  );
}
