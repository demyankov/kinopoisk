import { movieType } from "./movieType";

export interface getMoviesResponseType {
    Response: string,
    Search: Array<movieType>,
    totalResults: number,
}