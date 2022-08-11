import axios, { AxiosResponse } from "axios";
import { ApiKey } from "../enums/apiKey";
import { MovieType } from "../types/movieType";

export const apiPath = `${process.env.REACT_APP_API_PATH}`;

export async function getMovieDetails(
  movieId: MovieType["imdbID"]
): Promise<AxiosResponse> {
  const querryParams = new URLSearchParams();
  querryParams.append("i", movieId);

  return await axios.get(`${apiPath}/?apikey=${ApiKey.key}&${querryParams}`);
}
