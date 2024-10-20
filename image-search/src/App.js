import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './unsplashApi';
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);
  
  const handleSubmit = async (searchTerm) => {
    const result = await searchImages(searchTerm);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
