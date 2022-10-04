import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { EmptyContentPage } from "../../components/EmptyContentPage/EmptyContentPage";
import { FiltersPopup } from "../../components/FiltersPopup/FiltersPopup";
import { AppLoader } from "../../components/Loaders/AppLoader";
import { RingsLoader } from "../../components/Loaders/RingsLoader";
import { AppRoute } from "../../enums/AppRoute";
import { getMoviesAction } from "../../store/filter/filter.actions";
import {
  filterConfigureSelector,
  filterIsLoadingSelector,
  filterCurrentPageSelector,
  filterResultSelector,
} from "../../store/filter/filter.selector";
import { filterActions } from "../../store/filter/filter.slice";
import { useAppDispatch } from "../../store/rootStore";
import { setAppSearchParams } from "../../utils/setAppSearchParams";
import {
  ShowMoreButton,
  CardsWrapper,
  ShowMoreButtonWrapper,
} from "./moviePageStyles";

export function MoviesPage(): JSX.Element {
  const moviesFiltered = useSelector(filterResultSelector);
  const currentPage = useSelector(filterCurrentPageSelector);
  const isLoading = useSelector(filterIsLoadingSelector);
  const filterConfigure = useSelector(filterConfigureSelector);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [isTrends, setIsTrends] = useState<boolean>(false);

  useEffect(() => {
    dispatch(filterActions.setCurrentPage(1));
    dispatch(filterActions.clearMovies());
    dispatch(filterActions.setIsLoading(true));
    setAppSearchParams(setSearchParams);
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname.includes(AppRoute.Trends)) {
      dispatch(
        filterActions.changeFilter({ ...filterConfigure, ratingFrom: "7.0001" })
      );
      setIsTrends(true);
    } else if (filterConfigure.ratingFrom === "7.0001") {
      dispatch(
        filterActions.changeFilter({ ...filterConfigure, ratingFrom: "" })
      );
      setIsTrends(false);
    }
  }, [location.pathname, dispatch]);

  const scrollHandler = (e: any): void => {
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      100
    ) {
      dispatch(filterActions.setIsLoading(true));
    }
  };

  useEffect(() => {
    if ((isLoading || filterConfigure.year) && filterConfigure.movieName) {
      const abortController = new AbortController();
      dispatch(
        getMoviesAction({
          abortController,
          s: filterConfigure.movieName,
          r: "json",
          page: currentPage,
          y: filterConfigure.year || "",
        })
      );
      return () => {
        abortController.abort();
        dispatch(filterActions.setIsLoading(false));
      };
    }
  }, [isLoading, filterConfigure.year, filterConfigure.movieName]);

  return (
    <>
      <FiltersPopup />
      <CardsWrapper>
        {!isLoading && !moviesFiltered.length ? (
          <EmptyContentPage />
        ) : (
          moviesFiltered.map((movie, id) => {
            return (
              <Card
                isTrends={isTrends}
                key={movie.imdbID}
                movie={movie}
                tabindex={+id + 1}
              />
            );
          })
        )}
        {isLoading ? <AppLoader /> : null}
      </CardsWrapper>
      <ShowMoreButtonWrapper>
        <ShowMoreButton
          onClick={() => dispatch(filterActions.setIsLoading(true))}
        >
          Show More <RingsLoader />
        </ShowMoreButton>
      </ShowMoreButtonWrapper>
    </>
  );
}
