import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api/getMovieDetails";
import { MovieDetailsType } from "../../types/movieDetailsType";
import { MovieType } from "../../types/movieType";

import { CardWrapper, ImageWrapper, MovieName, MovieGenre } from "./cardStyles";
import { MutatingDots } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../enums/AppRoute";
import { MovieRaiting } from "../styles/movieRaitingStyle";
import { Error } from "../styles/error";

export function Card({
  movieId,
}: {
  movieId: MovieDetailsType["imdbID"];
}): JSX.Element {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType>();
  const [errors, setErrors] = useState<AxiosError>();

  useEffect(() => {
    getMovieDetails(movieId)
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
        <NavLink to={`${AppRoute.Movie}/${movieDetails.imdbID}`}>
          <img
            src={
              movieDetails.Poster !== "N/A"
                ? movieDetails.Poster
                : "https://korzik.net/uploads/posts/2011-04/1302509289_1302382236_18.jpg"
            }
            alt={movieDetails.Title}
          />
        </NavLink>
      </ImageWrapper>

      <MovieRaiting>
        {movieDetails.imdbRating || <MutatingDots color="red" radius="15%" />}
      </MovieRaiting>
      <MovieName>
        {movieDetails.Title || <MutatingDots color="red" radius="15%" />}
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
