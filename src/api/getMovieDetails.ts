import axios from "axios";

import { MovieDetailsType } from "../types/movieDetailsType";

const apiPath = `${process.env.REACT_APP_API_PATH}`;
const apiKey = `${process.env.REACT_APP_API_KEY}`;

export async function getMovieDetails(movieId = ""): Promise<MovieDetailsType> {
  const querryParams = new URLSearchParams();
  querryParams.append("i", movieId);
  querryParams.append("plot", "full");

  return await axios
    .get(`${apiPath}/?apikey=${apiKey}&${querryParams}`)
    .then(({ data }) => data);
}
