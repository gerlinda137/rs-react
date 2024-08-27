import { useState } from 'react';

type UseLocalStorageReturn = [string, (newQuery: string) => void];

function useLocalStorage(
  key: string,
  existingQuery: string,
): UseLocalStorageReturn {
  const savedQuery = localStorage.getItem(key);

  const [query, setQuery] = useState<string>(savedQuery || existingQuery);

  const setSavedQuery = (newQuery: string) => {
    setQuery(newQuery);
    localStorage.setItem(key, newQuery);
  };

  return [query, setSavedQuery];
}

export default useLocalStorage;
