import { MovieType } from "./movieType";

export interface GetMoviesResponseType {
  Response: string;
  Search: Array<MovieType>;
  totalResults: number;
}
