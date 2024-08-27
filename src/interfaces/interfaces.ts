export interface QueryProps {
  queryValue: string;
  setQueryValue: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
}

export interface CardsData {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
}
