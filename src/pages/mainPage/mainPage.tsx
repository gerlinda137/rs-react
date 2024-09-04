import { useEffect, useState } from 'react';
import { searchShows } from '../../api/apiHandler';
import Bottom from '../../components/bottom/Bottom';
import {
  ShowsData,
  ShowsInitialResponse,
  ShowsInitialResponseError,
} from '../../interfaces/interfaces';
import Top from '../../components/top/Top';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Outlet } from 'react-router-dom';

import './mainPage.scss';

const MainPage: React.FC = () => {
  const [query, setQuery] = useLocalStorage('query', 'Movie');
  const [cardsData, setCardsData] = useState<ShowsData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchingError, setFetchingError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        setIsLoading(true);
        const data: ShowsInitialResponse = await searchShows(query);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        if (data.Response === 'True') {
          setCardsData(data.Search);
          setFetchingError(null);
        } else {
          const errorData = data as ShowsInitialResponseError;
          setFetchingError(errorData.Error);
          throw new Error('Error fetching shows. ' + errorData.Error);
        }
      } catch (error) {
        setFetchingError((error as Error).message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    fetchCardsData();
  }, [query]);

  return (
    <section className="main-page">
      <div className="main-page__inner">
        <Top queryValue={query} setQueryValue={setQuery} />
        {fetchingError === null ? (
          <Bottom cardsData={cardsData} isLoading={isLoading} />
        ) : (
          <div className="error-message error-message--not-found">
            {fetchingError}
          </div>
        )}
      </div>
      <Outlet />
    </section>
  );
};

export default MainPage;
