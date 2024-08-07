import { useEffect, useState } from 'react';
import { searchShows } from '../../api/apiHandler';
import Bottom from '../../components/bottom/Bottom';
import { CardsData } from '../../components/card/Card';
import Top from '../../components/top/Top';

const MainPage: React.FC = () => {
  const [query, setQuery] = useState<string>('Random');
  const [cardsData, setCardsData] = useState<CardsData[]>([]);

  useEffect(() => {
    const savedQuery = localStorage.getItem('query');
    if (savedQuery) {
      setQuery(savedQuery);
    }
    const fetchCardsData = async () => {
      try {
        const data = await searchShows(query);
        data ? setCardsData(data) : null;
      } catch (error) {
        console.log(error);
      }
    };

    fetchCardsData();
  }, [query]);

  return (
    <section className="main-page">
      <Top queryValue={query} setQueryValue={setQuery} />
      <Bottom cardsData={cardsData} />
    </section>
  );
};

export default MainPage;
