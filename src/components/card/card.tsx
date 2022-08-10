import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api/getMovieDetails";
import { MovieDetailsType } from "../../types/movieDetailsType";
import { MovieType } from "../../types/movieType";
import { Error } from "../input/inputStyles";
import {
  CardWrapper,
  ImageWrapper,
  MovieName,
  MovieRaiting,
  MovieGenre,
} from "./cardStyles";
import { MutatingDots } from "react-loader-spinner";

export function Card({ movie }: { movie: MovieType }): JSX.Element {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType>();
  const [errors, setErrors] = useState<AxiosError>();

  useEffect(() => {
    getMovieDetails(movie.imdbID)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error: AxiosError) => {
        if (error.isAxiosError) {
          setErrors(error);
        }
      });
  }, []);

  return movieDetails ? (
    <CardWrapper>
      <ImageWrapper>
        <img
          src={
            movieDetails.Poster !== "N/A"
              ? movie.Poster
              : "https://korzik.net/uploads/posts/2011-04/1302509289_1302382236_18.jpg"
          }
          alt={movieDetails.Title}
        />
      </ImageWrapper>
      <MovieRaiting>{movieDetails.imdbRating || <MutatingDots />}</MovieRaiting>
      <MovieName>
        {movieDetails.Title || <MutatingDots radius="0.2rem" color="#fff" />}
      </MovieName>
      <MovieGenre>
        {movieDetails?.Genre?.split(",").map((genre, key) => (
          <li key={key}>{genre}</li>
        ))}
      </MovieGenre>
      <Error>{errors?.message}</Error>
    </CardWrapper>
  ) : (
    <></>
  );
}
