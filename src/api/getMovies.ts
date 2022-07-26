import { ApiKey } from "../enums/apiKey";
import { getMoviesResponseType } from "../types/getMoviesResponseType";
import { querrySearchParamsType } from "../types/querrySearchParamsType";

export const apiPath = `${process.env.REACT_APP_API_PATH}`;

export async function getMovies({
  abortController,
  ...params
}: {
  abortController?: AbortController;
} & querrySearchParamsType): Promise<getMoviesResponseType> {
  const querryParams = (Object.keys(params) as (keyof typeof params)[])
    .reduce((acc, key) => {
      if (typeof params[key] !== "undefined") {
        acc.append(String(key), `${params[key]}`);
      }
      return acc;
    }, new URLSearchParams())
    .toString();

  const response = await fetch(
    `${apiPath}/?apikey=${ApiKey.key}&${querryParams}`,
    {
      signal: abortController?.signal,
    }
  );

  if (response.status === 200) {
    console.log(response);
    return (await response.json()) as getMoviesResponseType;
  }

  return Promise.reject({
    status: response.status,
    errors: {
      global: response.statusText,
    },
  });
}
