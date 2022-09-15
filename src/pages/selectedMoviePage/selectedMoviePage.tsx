import { getMoviesDetailsResponseType } from "../../types/getMoviesDetailsResponseType";
import { MovieDescription } from "./movieDescription";
import Imdb from "../../components/images/Imdb.svg";
import {
  ImageSection,
  ImageWrapper,
  InfoSection,
  MovieName,
  Rating,
  RatingImdb,
  Wrapper,
  Runtime,
  RatingWrapper,
  InteractionWrapper,
  InteractionButton,
  Poster,
} from "./selectedMoviePageStyles";
import { P } from "../../components/styles/P";
import { MovieGenre } from "../../components/card/cardStyles";
import ToFavouriteIcon from "../../components/images/favouriteIcon.svg";
import ToShareIcon from "../../components/images/toShareIcon.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/getMovieDetails";
import { AppLoader } from "../../components/loaders/appLoader";
import { useSelector } from "react-redux";
import {
  favouriteErrorSelector,
  favouriteSelector,
} from "../../store/favouriteMovies/favourite.selector";
import { useAppDispatch } from "../../store/rootStore";
import {
  removeFromFavourite,
  addInFavourite,
} from "../../store/favouriteMovies/appFavouriteActions";
import { Error } from "../../components/styles/error";
import { AxiosError } from "axios";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import { urlDefaultPoster } from "../../generalData/urlDefaultPoster";

export function SelectedMoviePage() {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<getMoviesDetailsResponseType>();
  const [error, setError] = useState<string>();
  const favouriteMovies = useSelector(favouriteSelector);
  const errorFavourite = useSelector(favouriteErrorSelector);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const user = useSelector(signInUserSelector);

  useEffect(() => {
    getMovieDetails(movieId)
      .then((response) => {
        setMovie(response);
        if (user.username) {
          setIsFavourite(favouriteMovies.includes(response.imdbID));
        }
      })
      .catch((e: AxiosError) => setError(e.message));
  }, [movieId]);
  return movie ? (
    <Wrapper>
      <ImageSection>
        <ImageWrapper>
          <Poster
            src={!(movie.Poster === "N/A") ? movie.Poster : urlDefaultPoster}
            alt="Movie poster"
          ></Poster>
        </ImageWrapper>
        {user.username ? (
          <InteractionWrapper>
            <InteractionButton
              isFavourite={isFavourite}
              onClick={() => {
                setIsFavourite(!isFavourite);
                isFavourite
                  ? dispatch(removeFromFavourite(movie.imdbID))
                  : dispatch(addInFavourite(movie.imdbID));
              }}
            >
              <img src={ToFavouriteIcon} alt="To Favourite Icon" />
            </InteractionButton>
            <Error>{errorFavourite}</Error>
            <InteractionButton>
              <img src={ToShareIcon} alt="To Share Icon" />
            </InteractionButton>
          </InteractionWrapper>
        ) : null}
      </ImageSection>
      <InfoSection>
        <div>
          <Error>{error}</Error>
          <MovieGenre>
            {movie.Genre.split(",").map((genre, key) => (
              <li key={key}>{genre}</li>
            ))}
          </MovieGenre>
          <MovieName>{movie.Title}</MovieName>
        </div>

        <RatingWrapper>
          <Rating>{movie.imdbRating}</Rating>
          <RatingImdb>
            <img src={Imdb} alt="IMDB" /> {movie.imdbRating}
          </RatingImdb>
          <Runtime>{movie.Runtime}</Runtime>
        </RatingWrapper>
        <P>{movie.Plot}</P>
        <MovieDescription movie={movie} />
      </InfoSection>
    </Wrapper>
  ) : (
    <AppLoader />
  );
}
