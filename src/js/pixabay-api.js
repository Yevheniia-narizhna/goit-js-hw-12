import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export { getImages };

async function getImages(name, page) {
  const API_KEY = '45112034-271f1d190327e1d75e8ffdf0b';

  try {
    if (name.includes(' ')) {
      name.replace(/\s+/g, '+');
    }
    const response = await axios.get('https://pixabay.com/api/', {
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
  } catch {
    iziToast.error({
      title: 'Error',
      message: 'Sorry! Please try later!',
    });
    console.error(error.message);
  }
}
