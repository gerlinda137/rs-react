import { useEffect, useState } from 'react';
import { searchShows } from '../../api/apiHandler';
import Bottom from '../../components/bottom/Bottom';
import { CardsData } from '../../interfaces/interfaces';

import Top from '../../components/top/Top';
import useLocalStorage from '../../hooks/useLocalStorage';

const MainPage: React.FC = () => {
  const [query, setQuery] = useLocalStorage('query', 'Movie');
  const [cardsData, setCardsData] = useState<CardsData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        setIsLoading(true);
        const data = await searchShows(query);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        data ? setCardsData(data) : null;
      } catch (error) {
        console.log(error);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    fetchCardsData();
  }, [query]);

  return (
    <section className="main-page">
      <Top queryValue={query} setQueryValue={setQuery} />
      <Bottom cardsData={cardsData} isLoading={isLoading} />
    </section>
  );
};

export default MainPage;
