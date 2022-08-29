import { getMoviesDetailsResponseType } from "../../types/getMoviesDetailsResponseType";
import { MovieDescription } from "./movieDescription";
import Imdb from "../../components/images/Imdb.svg";
import {
  ImageSection,
  ImageWrapper,
  InfoSection,
  MovieName,
  Raiting,
  RaitingImdb,
  Wrapper,
  Runtime,
  RaitingWrapper,
  InteractionWrapper,
  InteractionButton,
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
          <img src={movie.Poster} alt="Movie poster"></img>
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

        <RaitingWrapper>
          <Raiting>{movie.imdbRating}</Raiting>
          <RaitingImdb>
            <img src={Imdb} alt="IMDB" /> {movie.imdbRating}
          </RaitingImdb>
          <Runtime>{movie.Runtime}</Runtime>
        </RaitingWrapper>
        <P>{movie.Plot}</P>
        <MovieDescription movie={movie} />
      </InfoSection>
    </Wrapper>
  ) : (
    <AppLoader />
  );
}
