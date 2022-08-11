import { useEffect, useState } from "react";
import { getMovies } from "../../api/getMovies";
import { Card } from "../../components/card/card";
import { AppLoader } from "../../components/loader/loader";
import { MovieType } from "../../types/movieType";
import { Wrapper } from "./moviePageStyles";

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
    getMovies({ abortController, s: "matrix", r: "json", page: "1" })
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
    <Wrapper>
      {isLoading ? (
        <AppLoader />
      ) : (
        movies.map((movie) => {
          return <Card key={movie.imdbID} movie={movie} />;
        })
      )}
    </Wrapper>
  );
}
