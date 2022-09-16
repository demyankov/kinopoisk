import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getMovieDetails } from "../../api/getMovieDetails";
import { getMovies } from "../../api/getMovies";
import { Card } from "../../components/card/card";
import { FiltersPopup } from "../../components/filtersPopup/filtersPopup";
import { AppLoader } from "../../components/loaders/appLoader";
import { RingsLoader } from "../../components/loaders/ringsLoader";
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
  const [pageCount, setPageCount] = useState<number>(1);
  const [errors, setErrors] = useState();
  const isLoading = useSelector(filterIsLoadingSelector);
  const filterConfigure = useSelector(filterConfigureSelector);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(filterActions.setCurrentPage(1));
    dispatch(filterActions.clearMovies());
    dispatch(filterActions.setIsLoading(true));
    setAppSearchParams(setSearchParams);
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);

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
    if (
      ((isLoading && currentPage <= pageCount) || filterConfigure.year) &&
      filterConfigure.movieName
    ) {
      const abortController = new AbortController();

      getMovies({
        abortController,
        s: filterConfigure.movieName,
        r: "json",
        page: currentPage,
        y: filterConfigure.year || "",
      })
        .then((response) => {
          Promise.allSettled(
            response["Search"].map((movie) => getMovieDetails(movie.imdbID))
          ).then((response) => {
            const fulfilledResponse = response.map((responseItem) =>
              responseItem.status === "fulfilled" ? responseItem.value : null
            );
            dispatch(filterActions.addMovies(fulfilledResponse));
          });
          dispatch(filterActions.setCurrentPage(currentPage + 1));
          setPageCount(Math.ceil(+response.totalResults / 10));
        })
        .catch((errors) => setErrors(errors))
        .finally(() => {
          dispatch(filterActions.setIsLoading(false));
        });
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
        {moviesFiltered.map((movie, id) => {
          return <Card key={movie.imdbID} movie={movie} tabindex={+id + 1} />;
        })}
        {isLoading ? <AppLoader /> : null}
        {/* {!isScroll && !filterMovies(sortMoviesList, filterConfigure).length ? (
          <EmptyContentPage />
        ) : null} */}
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
