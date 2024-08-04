import axios from 'axios';

const perPage = 15;
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImages(name, page) {
  const API_KEY = '45112034-271f1d190327e1d75e8ffdf0b';

  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: name,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: perPage,
      safesearch: true,
    },
  });
  return response;
}
