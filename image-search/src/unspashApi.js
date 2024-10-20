import axios from 'axios';

const searchImages = async (query) => {
  console.log({token: process.env.REACT_APP_UNSPLASH_ACCESS_KEY})
  const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers:{
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      },
      params: {
        query,
      }
    }
  );

  return response.data.results;
}

export default searchImages;
