import { useEffect, useState } from "react";
import { getMovies } from "../../api/getMovies";
import { Card } from "../../components/card/card";
import { movieType } from "../../types/movieType";

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

    getMovies({ abortController, s: "matrix", r: "json", page: "10" })
      .then((response) => {
        setMovie(response["Search"]);
      })
      .catch((errors) => console.log(errors));
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {movies.map((movie) => {
        return <Card key={movie.imdbID} movie={movie} />;
      })}
    </>
  );
}
