import { movieType } from "../../types/movieType";
import {
  CardWrapper,
  ImageWrapper,
  MovieName,
  MovieRaiting,
} from "./cardStyles";

export function Card({ movie }: { movie: movieType }): JSX.Element {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://korzik.net/uploads/posts/2011-04/1302509289_1302382236_18.jpg"
          }
          alt={movie.Title}
        />
      </ImageWrapper>
      <MovieRaiting>9.4</MovieRaiting>
      <MovieName>{movie.Title}</MovieName>
    </CardWrapper>
  );
}
