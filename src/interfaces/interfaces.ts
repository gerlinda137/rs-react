export interface QueryProps {
  queryValue: string;
  setQueryValue: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
}

export interface ShowsData {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
}

export interface ShowsInitialResponseSuccess {
  Search: ShowsData[];
  totalResults: string;
  Response: string;
}

export interface ShowsInitialResponseError {
  Response: 'False';
  Error: string;
}

export type ShowsInitialResponse =
  | ShowsInitialResponseSuccess
  | ShowsInitialResponseError;

export interface ShowData {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}
