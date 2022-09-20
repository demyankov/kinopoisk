import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { filterSelectorIsOpened } from "../store/filter/filter.selector";
import { filterActions } from "../store/filter/filter.slice";
import { useAppDispatch } from "../store/rootStore";

export function useOutside() {
  const isOpened = useSelector(filterSelectorIsOpened);
  const dispatch = useAppDispatch();

  const refOpen = useRef<HTMLImageElement>(null);
  const refForm = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutsideOpen = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (refOpen.current && refOpen.current.contains(target as Node)) {
        dispatch(filterActions.open());
      }
    };

    const handleClickOutsideClose = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        refForm.current &&
        !(target.tagName === "SPAN") &&
        !refForm.current.contains(target)
      ) {
        dispatch(filterActions.close());
      }
    };

    if (isOpened) {
      document.addEventListener("click", handleClickOutsideClose);
    } else {
      document.addEventListener("click", handleClickOutsideOpen);
    }

    return () => {
      if (isOpened) {
        document.removeEventListener("click", handleClickOutsideClose);
      } else {
        document.removeEventListener("click", handleClickOutsideOpen);
      }
    };
  }, [isOpened]);

  return { refForm, refOpen };
}
