import { getMoviesDetailsResponseType } from "../../types/getMoviesDetailsResponseType";
import { MovieDescription } from "./movieDescription";
import Imdb from "../../components/Images/Imdb.svg";
import {
  ImageSection,
  ImageWrapper,
  HeaderMovieDescription,
  MovieName,
  Rating,
  RatingImdb,
  Wrapper,
  Runtime,
  RatingWrapper,
  InteractionWrapper,
  InteractionButton,
  Poster,
  InteractionButtonWrapper,
} from "./selectedMoviePageStyles";
import { MovieGenre } from "../../components/Card/cardStyles";
import ToShareIcon from "../../components/Images/toShareIcon.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppLoader } from "../../components/Loaders/AppLoader";
import { useSelector } from "react-redux";
import { favouriteSelector } from "../../store/favouriteMovies/favourite.selector";
import { useAppDispatch } from "../../store/rootStore";
import {
  removeFromFavourite,
  addInFavourite,
} from "../../store/favouriteMovies/appFavouriteActions";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import { urlDefaultPoster } from "../../generalData/urlDefaultPoster";
import { AppRoute } from "../../enums/AppRoute";
import { getMovieDetails } from "../../api/getMovieDetails";
import { EmailShareButton } from "react-share";
import { IconFavorites } from "../../components/Images/IconComponents";

export function SelectedMoviePage() {
  const { movieId } = useParams<{ movieId: string }>();
  const favouriteMovies = useSelector(favouriteSelector);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const user = useSelector(signInUserSelector);
  const [movie, setMovie] = useState<getMoviesDetailsResponseType>();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId)
      .then((movie) => {
        if (user.username) {
          setIsFavourite(favouriteMovies.includes(movie.imdbID));
        }
        setMovie(movie);
      })
      .catch(() => navigate(AppRoute.NotFound));
  }, [movieId, isFavourite]);

  useEffect(() => {
    setIsFavourite(movie ? favouriteMovies.includes(movie.imdbID) : false);
  }, [movie]);

  return movie ? (
    <Wrapper>
      <ImageSection>
        <div>
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
                <IconFavorites></IconFavorites>
              </InteractionButton>
              <InteractionButtonWrapper>
                <EmailShareButton
                  url="https://github.com/demyankov/kinopoisk"
                  subject={`${user.username} invite you to Pixema `}
                  body={`You can send email to ${user.username} ${user.email}`}
                >
                  <img src={ToShareIcon} alt="To Share Icon" />
                </EmailShareButton>
              </InteractionButtonWrapper>
            </InteractionWrapper>
          ) : null}
        </div>
      </ImageSection>
      <HeaderMovieDescription>
        <div>
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
      </HeaderMovieDescription>
      <MovieDescription movie={movie} />
    </Wrapper>
  ) : (
    <AppLoader />
  );
}
