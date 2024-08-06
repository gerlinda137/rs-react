import { useEffect, useRef } from 'react';
import { QueryProps } from '../top/Top';
import './Search.scss';

const Search: React.FC<QueryProps> = ({ setQueryValue, setError }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedQuery = localStorage.getItem('query');
    if (savedQuery) {
      setQueryValue(savedQuery);
      if (inputRef.current) {
        inputRef.current.value = savedQuery;
      }
    }
  }, [setQueryValue]);

  function handleClick() {
    if (inputRef.current) {
      const value = inputRef.current.value;
      if (value.length < 3) {
        setError ? setError('Value must contain at least 3 letters') : null;
      } else {
        setQueryValue(value);
        localStorage.setItem('query', value);
        setError ? setError('') : null;
      }
    }
  }

  return (
    <section className="search">
      <input
        ref={inputRef}
        className="search__input"
        type="search"
        name="search-show"
        id="search-input"
        placeholder="type the name of the movie ot show"
      />
      <button className="search__btn" onClick={handleClick}>
        Search
      </button>
    </section>
  );
};

export default Search;
