import { useState } from 'react';
import Search from '../input/Search';
import { QueryProps } from '../../interfaces/interfaces';
import TriggerErrorBtn from '../triggerErrorBtn/TriggerErrorBtn';
import './Top.scss';

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
      <TriggerErrorBtn />
    </section>
  );
};

export default Top;
