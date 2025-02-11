import axios from 'axios';

const ACCESS_KEY = 'Vldx9OWNWrKmNyDqVJSzU58w3g1RnpwGkRl2-FTRFP8';

async function fetchPhotos(searchQuery: string, page: number) {
  const url = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${searchQuery}&page=${page}&per_page=15`;

  const { data } = await axios.get(url);

  return data.results;
}

export default fetchPhotos;
