import { P } from "../../components/styles/P";
import { SecondaryP } from "../../components/styles/secondaryP";
import { getMoviesDetailsResponseType } from "../../types/getMoviesDetailsResponseType";
import { DescriptionWrapper } from "./movieDescriptionStyles";

export function MovieDescription({
  movie,
}: {
  movie: getMoviesDetailsResponseType;
}) {
  return (
    <DescriptionWrapper>
      <P>{movie.Plot}</P>
      <div>
        <SecondaryP>Year</SecondaryP>
        <P>{movie.Year}</P>
        <SecondaryP>Released</SecondaryP>
        <P>{movie.Released}</P>
        <SecondaryP>BoxOffice</SecondaryP>
        <P>{movie.BoxOffice}</P>
        <SecondaryP>Country</SecondaryP>
        <P>{movie.Country}</P>
        <SecondaryP>Production</SecondaryP>
        <P>{movie.Production}</P>
        <SecondaryP>Actors</SecondaryP>
        <P>{movie.Actors}</P>
        <SecondaryP>Director</SecondaryP>
        <P>{movie.Director}</P>
        <SecondaryP>Writers</SecondaryP>
        <P>{movie.Writer}</P>
      </div>
    </DescriptionWrapper>
  );
}
