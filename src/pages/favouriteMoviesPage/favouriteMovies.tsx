import { useSelector } from "react-redux";
import { Card } from "../../components/card/card";
import { favouriteSelector } from "../../store/favouriteMovies/favourite.selector";
import { CardsWrapper } from "./favouriteMoviesPageStyles";

export function FavouriteMoviesPage(): JSX.Element {
  const movieIdList = useSelector(favouriteSelector);

  return (
    <>
      <CardsWrapper>
        {movieIdList.map((movieId) => {
          return <Card key={`${movieId}fav`} movieId={movieId} />;
        })}
      </CardsWrapper>
    </>
  );
}
