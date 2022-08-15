import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../../api/getMovies";
import { Card } from "../../components/card/card";
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
  const { movieID } = useParams<{ movieID: string }>();

  useEffect(() => {
    const abortController = new AbortController();
    getMovies({ abortController, s: "death", r: "json", page: "1" })
      .then((response) => {
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
      <CardsWrapper>
        {isLoading ? (
          <AppLoader />
        ) : (
          movies.map((movie) => {
            return <Card key={movie.imdbID} movie={movie} />;
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
