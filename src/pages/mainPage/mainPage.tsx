import { useEffect, useState } from 'react';
import { searchShows } from '../../api/apiHandler';
import Top from '../../components/top/Top';

const MainPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    searchShows(query);
  }, [query]);

  return (
    <section className="main-page">
      <Top queryValue={query} setQueryValue={setQuery} />
    </section>
  );
};

export default MainPage;
