import React, { useState, useEffect, JSX } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import LoadMorebtn from './components/LoadMorebtn/LoadMorebtn';
import fetchPhotos from './fetchFn';
import ImageModal from './components/ImageModal/ImageModal';
export interface IGallery {
  urls: {
    regular: string;
    small: string;
  };
  user: {
    instagram_username: string;
  };
  likes: number;
  description: string;
}
function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [gallery, setGallery] = useState<IGallery[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState<IGallery | null>(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    async function handleSearch() {
      try {
        setIsError(false);
        setIsLoading(true);

        const results = await fetchPhotos(searchQuery, page);

        setGallery((prev) => [...prev, ...results]);
      } catch (e) {
        setIsError(true);
        console.log('Search error: ', e);
      } finally {
        setIsLoading(false);
      }
    }

    handleSearch();
  }, [searchQuery, page]);

  async function changePage() {
    setPage((prev) => prev + 1);
  }

  function handleChangeQuery(newQuery: string): void {
    if (newQuery === searchQuery) return;
    setSearchQuery(newQuery);
    setPage(1);
    setGallery([]);
  }

  function openModal(photo: IGallery): void {
    setIsModalOpen(photo);
  }

  function closeModal(): void {
    setIsModalOpen(null);
  }

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {gallery && gallery.length > 0 && (
        <ImageGallery pics={gallery} onImageClick={openModal} />
      )}
      {gallery && gallery.length > 0 && <LoadMorebtn changePage={changePage} />}
      {isModalOpen && (
        <ImageModal modalOpenPicInfo={isModalOpen} onModalClose={closeModal} />
      )}
    </>
  );
}

export default App;
