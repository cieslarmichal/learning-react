import axios from 'axios';

const searchImages = async (query) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
    },
    params: {
      query,
    },
  });

  return response.data.results;
};

export default searchImages;
