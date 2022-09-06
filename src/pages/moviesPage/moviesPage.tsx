import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getMovieDetails } from "../../api/getMovieDetails";
import { getMovies } from "../../api/getMovies";
import { Card } from "../../components/card/card";
import { EmptyContentPage } from "../../components/emptyContentPage/emptyContentPage";
import { FiltersPopup } from "../../components/filtersPopup/filtersPopup";
import { AppLoader } from "../../components/loaders/appLoader";
import { RingsLoader } from "../../components/loaders/ringsLoader";
import {
  filterConfigureSelector,
  filterSortSelector,
  moviesSelector,
} from "../../store/filter/filter.selector";
import { filterActions } from "../../store/filter/filter.slice";
import { useAppDispatch } from "../../store/rootStore";
import { MovieDetailsType } from "../../types/movieDetailsType";
import { filterMovies } from "../../utils/filterMovies";
import { setAppSearchParams } from "../../utils/setAppSearchParams";
import { sortMovies } from "../../utils/sortMovies";
import {
  ShowMoreButton,
  CardsWrapper,
  ShowMoreButtonWrapper,
} from "./moviePageStyles";

export function MoviesPage(): JSX.Element {
  const movies = useSelector(moviesSelector);
  const sortBy = useSelector(filterSortSelector);
  const [sortMoviesList, setSortMoviesList] = useState<MovieDetailsType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [errors, setErrors] = useState();
  const [isScroll, setIsScroll] = useState(true);
  const filterConfigure = useSelector(filterConfigureSelector);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (filterConfigure.year) {
      setCurrentPage(1);
    }
  }, [filterConfigure.year]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterConfigure.movieName]);

  useEffect(() => {
    dispatch(filterActions.clearMovies());
    setAppSearchParams(setSearchParams);
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = (e: any): void => {
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      50
    ) {
      setIsScroll(true);
    }
  };

  console.log(filterConfigure);
  useEffect(() => {
    // console.log("in");
    // console.log(
    //   "isLoading && currentPage <= pageCount:",
    //   isLoading && currentPage <= pageCount
    // );
    // console.log("filterConfigure.year:", !!filterConfigure.year);
    // console.log("filterConfigure.movieName:", !!filterConfigure.movieName);
    if (
      ((isScroll && currentPage <= pageCount) || filterConfigure.year) &&
      filterConfigure.movieName
    ) {
      console.log("in in");
      const abortController = new AbortController();
      getMovies({
        abortController,
        s: !!filterConfigure.movieName ? filterConfigure.movieName : "",
        r: "json",
        page: currentPage,
        y: filterConfigure.year || "",
      })
        .then((response) => {
          response["Search"].map((movie) => {
            getMovieDetails(movie.imdbID).then((response) => {
              if (!isScroll) {
                console.log("clear");
                dispatch(filterActions.clearMovies());
              }
              dispatch(filterActions.addMovies(response));
            });
          });
          setCurrentPage((prevPage) => prevPage + 1);
          setPageCount(Math.ceil(+response.totalResults / 10));
        })
        .catch((errors) => setErrors(errors))
        .finally(() => {
          setIsScroll(false);
        });
      return () => {
        // abortController.abort();
        setIsScroll(false);
      };
    }
  }, [isScroll, filterConfigure.year, filterConfigure.movieName]);

  useEffect(() => {
    setSortMoviesList(() => sortMovies(movies, sortBy));
  }, [movies, sortBy, filterConfigure]);

  return (
    <>
      <FiltersPopup />
      <CardsWrapper>
        {filterMovies(sortMoviesList, filterConfigure).map((movie) => {
          return <Card key={movie.imdbID} movie={movie} />;
        })}
        {isScroll ? <AppLoader /> : null}
        {!isScroll && !filterMovies(sortMoviesList, filterConfigure).length ? (
          <EmptyContentPage />
        ) : null}
      </CardsWrapper>
      <ShowMoreButtonWrapper>
        <ShowMoreButton>
          Show More <RingsLoader />
        </ShowMoreButton>
      </ShowMoreButtonWrapper>
    </>
  );
}
