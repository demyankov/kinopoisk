import axios from "axios";
import { ApiKey } from "../enums/apiKey";
import { MovieDetailsType } from "../types/movieDetailsType";

export const apiPath = `${process.env.REACT_APP_API_PATH}`;

export async function getMovieDetails(
  movieId: string = ""
): Promise<MovieDetailsType> {
  const querryParams = new URLSearchParams();
  querryParams.append("i", movieId);
  querryParams.append("plot", "full");

  return await axios
    .get(`${apiPath}/?apikey=${ApiKey.key}&${querryParams}`)
    .then(({ data }) => data);
}
