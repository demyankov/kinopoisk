import { useEffect, useState } from "react";
import { getMovies } from "../../api/getMovies";
import { Card } from "../../components/card/card";
import { FiltersPopup } from "../../components/filtersPopup/filtersPopup";
import { AppLoader } from "../../components/loaders/appLoader";
import { RingsLoader } from "../../components/loaders/ringsLoader";
import { MovieType } from "../../types/movieType";
import {
  ShowMoreButton,
  CardsWrapper,
  ShowMoreButtonWrapper,
} from "./moviePageStyles";

export function MoviesPage(): JSX.Element {
  const [movies, setMovie] = useState<MovieType[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      setIsLoading(true);
      console.log(isLoading);
    }
  };

  useEffect(() => {
    if (isLoading && currentPage <= pageCount) {
      const abortController = new AbortController();
      getMovies({ abortController, s: "death", r: "json", page: currentPage })
        .then((response) => {
          console.log(response);
          setMovie([...movies, ...response["Search"]]);
          setCurrentPage((prevPage) => prevPage + 1);
          setPageCount(Math.ceil(+response.totalResults / 10));
        })
        .catch((errors) => setErrors(errors))
        .finally(() => {
          setIsLoading(false);
        });
      return () => {
        abortController.abort();
        setIsLoading(false);
      };
    }
  }, [isLoading]);

  return (
    <>
      <FiltersPopup />
      <CardsWrapper>
        {movies.map((movie) => {
          return <Card key={movie.imdbID} movieId={movie.imdbID} />;
        })}
      </CardsWrapper>
      {isLoading ? <AppLoader /> : null}

      <ShowMoreButtonWrapper>
        <ShowMoreButton>
          Show More <RingsLoader />
        </ShowMoreButton>
      </ShowMoreButtonWrapper>
    </>
  );
}
