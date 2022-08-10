import { MovieType } from "./movieType";

export interface getMoviesResponseType {
  Response: string;
  Search: Array<MovieType>;
  totalResults: number;
}
