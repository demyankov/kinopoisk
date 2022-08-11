import { getMoviesDetailsResponseType } from "../../types/getMoviesDetailsResponseType";
import { MovieDescriptionItem } from "./movieDescriptionItem";
import {
  About,
  Genres,
  ImageSection,
  ImageWrapper,
  InfoSection,
  Raitings,
  Wrapper,
} from "./selectedMoviePageStyles";

export function SelectedMoviePage({
  movie,
}: {
  movie: getMoviesDetailsResponseType;
}) {
  return (
    <Wrapper>
      <ImageSection>
        <ImageWrapper>
          <img src={movie.Poster}></img>
        </ImageWrapper>
        <div></div>
      </ImageSection>
      <InfoSection>
        <Genres></Genres>
        <Raitings></Raitings>
        <About></About>
        <MovieDescriptionItem header="Year" text={movie.Year} />
        <MovieDescriptionItem header="Released" text={movie.Released} />
        <MovieDescriptionItem header="BoxOffice" text={movie.BoxOffice} />
        <MovieDescriptionItem header="Country" text={movie.Country} />
        <MovieDescriptionItem header="Production" text={movie.Production} />
        <MovieDescriptionItem header="Actors" text={movie.Actors} />
        <MovieDescriptionItem header="Director" text={movie.Director} />
        <MovieDescriptionItem header="Writers" text={movie.Writer} />
      </InfoSection>
    </Wrapper>
  );
}
