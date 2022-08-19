import { LocalStorage } from "../../enums/localStorage";
import { getMoviesDetailsResponseType } from "../../types/getMoviesDetailsResponseType";
import { AppDispatch, rootStore } from "../rootStore";
import { favouriteAction } from "./favourite.slice";

export const addInFavourite =
  (payload: getMoviesDetailsResponseType["imdbID"]) =>
  (dispatch: AppDispatch) => {
    try {
      dispatch(favouriteAction.inFavourite(payload));
      localStorage.setItem(
        LocalStorage.FavouriveMovies,
        JSON.stringify(rootStore.getState().favourite.favouriteList)
      );
    } catch {}
  };

export const removeFromFavourite =
  (payload: getMoviesDetailsResponseType["imdbID"]) =>
  (dispatch: AppDispatch) => {
    try {
      dispatch(favouriteAction.fromFavourite(payload));
      localStorage.setItem(
        LocalStorage.FavouriveMovies,
        JSON.stringify(rootStore.getState().favourite.favouriteList)
      );
    } catch (e: any) {
      dispatch(favouriteAction.setError(e.message));
    }
  };
