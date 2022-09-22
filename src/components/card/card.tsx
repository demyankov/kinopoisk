import { MovieDetailsType } from "../../types/movieDetailsType";
import { CardWrapper, ImageWrapper, MovieName, MovieGenre } from "./cardStyles";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../enums/AppRoute";
import { FavoriteIconWrapper, MovieRating } from "../styles/movieRatingStyle";
import { useSelector } from "react-redux";
import { favouriteSelector } from "../../store/favouriteMovies/favourite.selector";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import { urlDefaultPoster } from "../../generalData/urlDefaultPoster";
import { IconFavorites } from "../images/iconComponents";

export function Card({
  movie,
  tabindex = 0,
}: {
  movie: MovieDetailsType;
  tabindex?: number;
}): JSX.Element {
  const isFavourite: boolean = useSelector(favouriteSelector).includes(
    movie.imdbID
  );
  const user = useSelector(signInUserSelector);

  return movie ? (
    <CardWrapper tabIndex={tabindex}>
      <ImageWrapper>
        <NavLink to={`${AppRoute.Movie}/${movie.imdbID}`}>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : urlDefaultPoster}
            alt={movie.Title}
          />
        </NavLink>
      </ImageWrapper>

      <MovieRating isFavourite={user.username ? isFavourite : false}>
        {movie.imdbRating || "--"}
      </MovieRating>
      {isFavourite ? (
        <FavoriteIconWrapper>
          <IconFavorites />
        </FavoriteIconWrapper>
      ) : null}

      <MovieName>{movie.Title}</MovieName>
      <MovieGenre>
        {movie?.Genre?.split(",").map((genre, key) => (
          <li key={key}>{genre}</li>
        ))}
      </MovieGenre>
    </CardWrapper>
  ) : (
    <></>
  );
}
