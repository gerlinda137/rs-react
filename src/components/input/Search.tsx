import * as React from 'react';
import { useEffect, useState } from 'react';
import QueryProps from '../interfaces/interfaces';

import './Search.scss';

const Search: React.FC<QueryProps> = ({ setQueryValue, setError }) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const savedQuery = localStorage.getItem('query');
    if (savedQuery) {
      setQueryValue(savedQuery);
      setInputValue(savedQuery);
    }
  }, [setQueryValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.length < 3) {
      setError ? setError('Value must contain at least 3 letters') : null;
    } else {
      setQueryValue(inputValue);
      localStorage.setItem('query', inputValue);
      setError ? setError('') : null;
    }
  };

  return (
    <section className="search">
      <input
        onChange={handleInputChange}
        className="search__input"
        type="search"
        name="search-show"
        id="search-input"
        placeholder="type the name of the movie ot show"
        value={inputValue}
      />
      <button className="search__btn" onClick={handleClick}>
        Search
      </button>
    </section>
  );
};

export default Search;
