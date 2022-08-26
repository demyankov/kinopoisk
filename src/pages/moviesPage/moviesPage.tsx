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
  const [movies, setMovie] = useState<MovieType[]>([
    {
      Title: " ",
      Year: " ",
      imdbID: " ",
      Type: " ",
      Poster: " ",
    },
  ]);

  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    getMovies({ abortController, s: "death", r: "json", page: "2" })
      .then((response) => {
        console.log(response);
        setMovie(response["Search"]);
        setIsLoading(false);
      })
      .catch((errors) => setErrors(errors));
    return () => {
      abortController.abort();
      setIsLoading(false);
    };
  }, []);

  return (
    <>
      <FiltersPopup />
      <CardsWrapper>
        {isLoading ? (
          <AppLoader />
        ) : (
          movies.map((movie) => {
            return <Card key={movie.imdbID} movieId={movie.imdbID} />;
          })
        )}
      </CardsWrapper>
      <ShowMoreButtonWrapper>
        <ShowMoreButton>
          Show More <RingsLoader />
        </ShowMoreButton>
      </ShowMoreButtonWrapper>
    </>
  );
}
