import { ShowData, ShowsInitialResponse } from '../interfaces/interfaces';

// export const searchShows = async (query: string): Promise<ShowsData[]> => {
//   try {
//     const apiKey = import.meta.env.VITE_API_KEY as string;
//     const BASE_URL = `https://www.omdbapi.com/?apikey=${apiKey}`;

//     const url = BASE_URL + '&s=' + query;

//     const response = await fetch(url);
//     const data: ShowsInitialResponse = await response.json();
//     console.log(data);
//     return data.Search;
//   } catch (error) {
//     console.error('Error searching shows:', error);
//     throw error;
//   }
// };

export const searchShows = async (
  query: string,
): Promise<ShowsInitialResponse> => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY as string;
    const BASE_URL = `https://www.omdbapi.com/?apikey=${apiKey}`;

    const url = BASE_URL + '&s=' + query;

    const response = await fetch(url);
    const data: ShowsInitialResponse = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error searching shows:', error);
    throw error;
  }
};

export const searchShowById = async (query: string): Promise<ShowData> => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY as string;
    const BASE_URL = `https://www.omdbapi.com/?apikey=${apiKey}`;

    const url = BASE_URL + '&i=' + query;

    const response = await fetch(url);
    const data: ShowData = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error getting movie data:', error);
    throw error;
  }
};
