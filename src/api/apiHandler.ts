import { CardsData } from '../interfaces/interfaces';

interface CardsInitialResponse {
  Search: CardsData[];
  totalResults: string;
  Response: string;
}

export const searchShows = async (query: string): Promise<CardsData[]> => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY as string;
    const BASE_URL = `https://www.omdbapi.com/?apikey=${apiKey}`;

    const url = BASE_URL + '&s=' + query;

    const response = await fetch(url);
    const data: CardsInitialResponse = await response.json();
    console.log(data);
    return data.Search;
  } catch (error) {
    console.error('Error searching shows:', error);
    throw error;
  }
};
