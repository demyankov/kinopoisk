import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { filterSelector } from "../store/isOpenedfFilter/filter.selector";
import { filterActions } from "../store/isOpenedfFilter/filter.slice";
import { useAppDispatch } from "../store/rootStore";

export function useOutside() {
  const isOpened = useSelector(filterSelector);
  const dispatch = useAppDispatch();

  const refForm = useRef<HTMLFormElement>(null);
  const refOpen = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleClickOutsideOpen: EventListener = (event) => {
      if (refOpen.current && refOpen.current.contains(event.target as Node)) {
        dispatch(filterActions.open());
      }
    };

    const handleClickOutsideClose: EventListener = (event) => {
      if (refForm.current && !refForm.current.contains(event.target as Node)) {
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
  }, [isOpened, dispatch]);
  return { refForm, refOpen, isOpened, dispatch };
}
