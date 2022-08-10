import { useEffect, useState } from "react";
import { getMovies } from "../../api/getMovies";
import { Card } from "../../components/card/card";
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

  useEffect(() => {
    const abortController = new AbortController();
    getMovies({ abortController, s: "matrix", r: "json", page: "1" })
      .then((response) => {
        setMovie(response["Search"]);
      })
      .catch((errors) => setErrors(errors));
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Wrapper>
      {movies.map((movie) => {
        return <Card key={movie.imdbID} movie={movie} />;
      })}
    </Wrapper>
  );
}
