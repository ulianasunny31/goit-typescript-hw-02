import axios from 'axios';
import { IGallery } from './App';

const ACCESS_KEY = 'Vldx9OWNWrKmNyDqVJSzU58w3g1RnpwGkRl2-FTRFP8';

interface IFetchResults {
  results: IGallery[];
}

async function fetchPhotos(
  searchQuery: string,
  page: number
): Promise<IGallery[]> {
  const url = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${searchQuery}&page=${page}&per_page=15`;

  const { data } = await axios.get<IFetchResults>(url);

  return data.results;
}

export default fetchPhotos;
