export interface getMoviesDetailsResponseType {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: "movie" | "series" | "episode";
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}
