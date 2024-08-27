import * as React from 'react';
import { useEffect, useState } from 'react';
import validateInput from '../../utils/inputValidation';
import { QueryProps } from '../../interfaces/interfaces';

import './Search.scss';

const Search: React.FC<QueryProps> = ({
  queryValue,
  setQueryValue,
  setError,
}) => {
  const [inputValue, setInputValue] = useState<string>(queryValue);

  useEffect(() => {
    setInputValue(queryValue);
  }, [queryValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    const validated = validateInput(inputValue);
    if (!validated) {
      setError
        ? setError('Query must contain at least 3 letters and be in english')
        : null;
    } else {
      setQueryValue(inputValue);
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
        placeholder="type the name of the movie or show"
        value={inputValue}
      />
      <button className="search__btn" onClick={handleClick}>
        Search
      </button>
    </section>
  );
};

export default Search;
