export default interface QueryProps {
  queryValue: string;
  setQueryValue: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
}
