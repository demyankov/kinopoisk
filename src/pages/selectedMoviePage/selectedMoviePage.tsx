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
import { favouriteSelector } from "../../store/favouriteMovies/favourite.selector";
import { useAppDispatch } from "../../store/rootStore";
import { favouriteAction } from "../../store/favouriteMovies/favourite.slice";

export function SelectedMoviePage() {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<getMoviesDetailsResponseType>();

  const favouriteMoviesList = useSelector(favouriteSelector);
  const dispatch = useAppDispatch();
  console.log(favouriteMoviesList);

  useEffect(() => {
    getMovieDetails(movieId).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return movie ? (
    <Wrapper>
      <ImageSection>
        <ImageWrapper>
          <img src={movie.Poster} alt="Movie poster"></img>
        </ImageWrapper>
        <InteractionWrapper>
          <InteractionButton
            onClick={() => {
              dispatch(favouriteAction.addInFavourite(movie.imdbID));
              console.log(favouriteAction.addInFavourite);
            }}
          >
            <img src={ToFavouriteIcon} alt="To Favourite Icon" />
          </InteractionButton>
          <InteractionButton>
            <img src={ToShareIcon} alt="To Share Icon" />
          </InteractionButton>
        </InteractionWrapper>
      </ImageSection>
      <InfoSection>
        <div>
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
