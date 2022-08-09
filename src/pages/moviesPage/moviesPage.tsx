import { useEffect, useState } from "react";
import { getMovies } from "../../api/getMovies";
import { Card } from "../../components/card/card";
import { movieType } from "../../types/movieType";
import { Wrapper } from "./moviePageStyles";

export function MoviesPage(): JSX.Element {
  const [movies, setMovie] = useState<movieType[]>([
    {
      Title: " ",
      Year: " ",
      imdbID: " ",
      Type: " ",
      Poster: " ",
    },
  ]);

  useEffect(() => {
    const abortController = new AbortController();

    getMovies({ abortController, s: "matrix", r: "json", page: "1" })
      .then((response) => {
        setMovie(response["Search"]);
      })
      .catch((errors) => console.log(errors));
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
