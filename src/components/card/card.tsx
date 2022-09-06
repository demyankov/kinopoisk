import { MovieDetailsType } from "../../types/movieDetailsType";
import { CardWrapper, ImageWrapper, MovieName, MovieGenre } from "./cardStyles";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../enums/AppRoute";
import { MovieRaiting } from "../styles/movieRaitingStyle";
import { useSelector } from "react-redux";
import { favouriteSelector } from "../../store/favouriteMovies/favourite.selector";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import { urlDefaultPoster } from "../../generalData/urlDefaultPoster";

export function Card({ movie }: { movie: MovieDetailsType }): JSX.Element {
  // const [movieDetails, setMovieDetails] = useState<MovieDetailsType>();
  // const [errors, setErrors] = useState<AxiosError>();
  const isFavourite: boolean = useSelector(favouriteSelector).includes(
    movie.imdbID
  );
  const user = useSelector(signInUserSelector);

  // useEffect(() => {
  //   getMovieDetails(movieId)
  //     .then((response) => {
  //       setMovieDetails(response);
  //     })
  //     .catch((error: AxiosError) => {
  //       if (error.isAxiosError) {
  //         setErrors(error);
  //       }
  //     });
  // }, []);

  return movie ? (
    <CardWrapper>
      <ImageWrapper>
        <NavLink to={`${AppRoute.Movie}/${movie.imdbID}`}>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : urlDefaultPoster}
            alt={movie.Title}
          />
        </NavLink>
      </ImageWrapper>

      <MovieRaiting isFavourite={user.username ? isFavourite : false}>
        {movie.imdbRating || "--"}
      </MovieRaiting>
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
