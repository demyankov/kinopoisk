import { ApiKey } from "../enums/apiKey";
import { getMoviesResponseType } from "../types/getMoviesResponseType";
import { querrySearchParamsType } from "../types/querrySearchParamsType";

export const apiPath = `${process.env.REACT_APP_API_PATH}`;

export async function getMovies ({...params}:querrySearchParamsType):Promise<getMoviesResponseType> {

    const querryParams = (Object.keys(params)  as (keyof typeof params)[]).reduce(
        (acc, key)=>{
            if (typeof params[key] !== "undefined") {
                acc.append(`${key}`, `${params[key]}`)            
            }    
            return acc
        }, 
    new URLSearchParams())
   
    const response = await fetch(`${apiPath}/?apikey=${ApiKey.key}&${querryParams}`)

    if (response.status === 200) {   
        return await response.json()
    }

    return Promise.reject (
        {
            status: response.status,
            errors: {
                global: response.statusText
            }
        }
    )
 
}