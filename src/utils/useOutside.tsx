import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Button } from "../components/button/button";
import { filterSelector } from "../store/isOpenedfFlter/filter.selector";
import { filterActions } from "../store/isOpenedfFlter/filter.slice";
import { useAppDispatch } from "../store/rootStore";

export function useOutside() {
  const isOpen = useSelector(filterSelector);
  const dispatch = useAppDispatch();
  const refForm = useRef<HTMLFormElement>(null);
  const refOpen = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        isOpen &&
        refForm.current &&
        !refOpen?.current?.contains(event.target as Node) &&
        !refForm.current.contains(event.target as Node)
      ) {
        dispatch(filterActions.close());
      }
    };

    document.addEventListener("click", (event) => handleClickOutside(event));
    return document.removeEventListener("click", (event) =>
      handleClickOutside(event)
    );
  }, []);
  return { refForm, refOpen, isOpen, dispatch };
}
