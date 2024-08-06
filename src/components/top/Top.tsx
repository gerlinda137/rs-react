import { useState } from 'react';
import Search from '../input/Search';

export interface QueryProps {
  queryValue: string;
  setQueryValue: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
}

const Top: React.FC<QueryProps> = ({ queryValue, setQueryValue }) => {
  const [error, setError] = useState<string>('');
  return (
    <section className="top">
      <Search
        queryValue={queryValue}
        setQueryValue={setQueryValue}
        error={error}
        setError={setError}
      />
      {error ? <p className="error-message">{error}</p> : null}
    </section>
  );
};

export default Top;
