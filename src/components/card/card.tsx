import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api/getMovieDetails";
import { MovieDetailsType } from "../../types/movieDetailsType";
import { CardWrapper, ImageWrapper, MovieName, MovieGenre } from "./cardStyles";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../enums/AppRoute";
import { MovieRaiting } from "../styles/movieRaitingStyle";
import { Error } from "../styles/error";
import { useSelector } from "react-redux";
import { favouriteSelector } from "../../store/favouriteMovies/favourite.selector";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import { urlDefaultPoster } from "../../generalData/urlDefaultPoster";

export function Card({
  movieId,
}: {
  movieId: MovieDetailsType["imdbID"];
}): JSX.Element {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType>();
  const [errors, setErrors] = useState<AxiosError>();
  const isFavourite: boolean = useSelector(favouriteSelector).includes(movieId);
  const user = useSelector(signInUserSelector);

  useEffect(() => {
    getMovieDetails(movieId)
      .then((response) => {
        setMovieDetails(response);
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
                : urlDefaultPoster
            }
            alt={movieDetails.Title}
          />
        </NavLink>
      </ImageWrapper>

      <MovieRaiting isFavourite={user.username ? isFavourite : false}>
        {movieDetails.imdbRating || "--"}
      </MovieRaiting>
      <MovieName>{movieDetails.Title}</MovieName>
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
