import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader'
import LoadMorebtn from './components/LoadMorebtn/LoadMorebtn';
import fetchPhotos from './fetchFn'
import ImageModal from './components/ImageModal/ImageModal';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    async function handleSearch() {
      try {
        setIsError(false);
        setIsLoading(true);
    
        const results = await fetchPhotos(searchQuery, page);
        
        setGallery((prev) => [...prev, ...results])
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false)
      }
    }
  
    handleSearch()
  }, [searchQuery, page])


  
  async function changePage() {
    await setPage(prev => prev + 1)
  }

  function handleChangeQuery(newQuery) {
    if (newQuery === searchQuery) return;
    setSearchQuery(newQuery);
    setPage(1);
    setGallery([])
  }

  function openModal(photo){
    setIsModalOpen(photo);
  }
  
  function closeModal(){
    setIsModalOpen(false);
    }
 
  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery}/>
      {isLoading && <Loader/>}
      {isError && <ErrorMessage/>}
      {gallery && gallery.length > 0 && <ImageGallery pics={gallery} onImageClick={openModal}/>  }
      {gallery && gallery.length > 0 && <LoadMorebtn changePage={changePage} />}
      {isModalOpen && <ImageModal photoInfo={isModalOpen} onModalClose={closeModal}/>}
    </>
  )
}
  export default App;
