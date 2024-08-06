import { useState } from 'react';
import Top from '../../components/top/Top';

const MainPage: React.FC = () => {
  const [query, setQuery] = useState<string>('Random');
  return (
    <section className="main-page">
      <Top queryValue={query} setQueryValue={setQuery} />
    </section>
  );
};

export default MainPage;
