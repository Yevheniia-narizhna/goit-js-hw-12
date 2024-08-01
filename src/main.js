import './js/pixabay-api';
import { getImages } from './js/pixabay-api';
import './js/render-functions';
import { createMarkUp } from './js/render-functions';
import { galleryEl } from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
const inputEl = document.querySelector('input');

loaderEl.style.display = 'none';

formEl.addEventListener('submit', event => {
  event.preventDefault();
  galleryEl.innerHTML = '';
  loaderEl.style.display = 'block';
  const inputValue = inputEl.value.trim();
  if (inputValue === '') {
    loaderEl.classList.remove('is-open');
    return;
  }
  getImages(inputValue)
    .then(response => {
      loaderEl.style.display = 'none';
      if (response.hits.length === 0) {
        return iziToast.info({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      createMarkUp(response.hits);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    })
    .finally(() => (loaderEl.style.display = 'none'));
  inputEl.value = '';
});
new SimpleLightbox('.gallery-li', {
  captionsData: 'alt',
  captionDelay: 250,
});
