import { useEffect, useRef, useState } from 'react';
import './Search.scss';

export default function Search() {
  const [, setValue] = useState('Random');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedQuery = localStorage.getItem('query');
    if (savedQuery) {
      setValue(savedQuery);
      if (inputRef.current) {
        inputRef.current.value = savedQuery;
      }
    }
  }, []);

  function handleClick() {
    if (inputRef.current) {
      const value = inputRef.current.value;
      if (value.length < 3) {
        console.log('Value must contain at least 3 letters');
      } else {
        setValue(value);
        localStorage.setItem('query', value);
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
}
