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
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/getMovieDetails";
import { AppRoute } from "../../enums/AppRoute";

export function SelectedMoviePage() {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<getMoviesDetailsResponseType>();
  const navigate = useNavigate();

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
          <InteractionButton>
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
    <>{navigate(AppRoute.NotFound, { replace: true })}</>
  );
}
