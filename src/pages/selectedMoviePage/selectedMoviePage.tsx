import { getMoviesDetailsResponseType } from "../../types/getMoviesDetailsResponseType";
import { MovieDescription } from "./movieDescription";
import imdb from "../../components/images/Imdb.svg";
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
} from "./selectedMoviePageStyles";
import { P } from "../../components/styles/P";
import { MovieGenre } from "../../components/card/cardStyles";

export function SelectedMoviePage({
  movie,
}: {
  movie: getMoviesDetailsResponseType;
}) {
  return (
    <Wrapper>
      <ImageSection>
        <ImageWrapper>
          <img src={movie.Poster} alt="Movie poster"></img>
        </ImageWrapper>
        <div></div>
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
            <img src={imdb} alt="IMDB" /> {movie.imdbRating}
          </RaitingImdb>
          <Runtime>{movie.Runtime}</Runtime>
        </RaitingWrapper>
        <P>{movie.Plot}</P>
        <MovieDescription movie={movie} />
      </InfoSection>
    </Wrapper>
  );
}
