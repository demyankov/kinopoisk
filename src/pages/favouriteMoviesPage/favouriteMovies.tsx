import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMovieDetails } from "../../api/getMovieDetails";
import { Card } from "../../components/card/card";
import { EmptyContentPage } from "../../components/emptyContentPage/emptyContentPage";
import { favouriteSelector } from "../../store/favouriteMovies/favourite.selector";
import { MovieDetailsType } from "../../types/movieDetailsType";
import { CardsWrapper } from "./favouriteMoviesPageStyles";

export function FavouriteMoviesPage(): JSX.Element {
  const movieIdList = useSelector(favouriteSelector);
  const [favouriteMovies, setFavouriteMovies] = useState<MovieDetailsType[]>(
    []
  );

  useEffect(() => {
    movieIdList.map((id) => {
      getMovieDetails(id).then((response) => {
        setFavouriteMovies((prev) => [...prev, response]);
      });
    });
  }, []);

  return (
    <>
      {movieIdList.length ? (
        <CardsWrapper>
          {favouriteMovies.map((movie) => {
            return <Card key={`${movie.imdbID}fav`} movie={movie} />;
          })}
        </CardsWrapper>
      ) : (
        <EmptyContentPage />
      )}
    </>
  );
}
