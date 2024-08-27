import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, defData: string) => {
  const [storedQuery, setStoredQuery] = useState<string>(() => {
    const localData = localStorage.getItem(key);
    return localData || defData;
  });

  useEffect(() => {
    localStorage.setItem('query', storedQuery);
  }, [storedQuery]);

  return [storedQuery, setStoredQuery] as const;
};
export default useLocalStorage;
