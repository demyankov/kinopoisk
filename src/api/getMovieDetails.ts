import axios, { AxiosResponse } from "axios";
import { ApiKey } from "../enums/apiKey";

export const apiPath = `${process.env.REACT_APP_API_PATH}`;

export async function getMovieDetails(
  movieId: string = ""
): Promise<AxiosResponse> {
  const querryParams = new URLSearchParams();
  querryParams.append("i", movieId);
  querryParams.append("plot", "full");

  return await axios.get(`${apiPath}/?apikey=${ApiKey.key}&${querryParams}`);
}
