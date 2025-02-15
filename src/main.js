import './js/pixabay-api';
import { getImages } from './js/pixabay-api';
import './js/render-functions';
import { createMarkUp } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const formEl = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
const btnLoader = document.querySelector('.btn-load');
const loaderMore = document.querySelector('.loader-more');
const inputEl = document.querySelector('input');
let currentPage = 1;
const perPage = 15;
let lightboxPict;

loaderEl.style.display = 'none';
btnLoader.style.display = 'none';
loaderMore.style.display = 'none';

formEl.addEventListener('submit', onSearch);
btnLoader.addEventListener('click', onLoad);

async function onSearch(event) {
  event.preventDefault();

  currentPage = 1;
  galleryEl.innerHTML = '';
  loaderEl.style.display = 'block';
  btnLoader.style.display = 'none';

  const inputValue = inputEl.value.trim();
  if (inputValue === '') {
    loaderEl.style.display = 'none';
    return;
  }
  try {
    const { data } = await getImages(inputValue, currentPage);

    loaderEl.style.display = 'none';
    const totalPages = Math.ceil(data.totalHits / perPage);

    if (currentPage === totalPages) {
      btnLoader.style.display = 'none';
    } else {
      btnLoader.style.display = 'block';
    }
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    galleryEl.insertAdjacentHTML('beforeend', createMarkUp(data.hits));

    lightboxPict = new SimpleLightbox('.gallery-li', {
      captionsData: 'alt',
      captionDelay: 250,
    }).refresh();
  } catch (err) {
    loaderEl.style.display = 'none';
    console.log(err);
  }
}

async function onLoad() {
  currentPage += 1;

  loaderMore.style.display = 'block';
  btnLoader.style.display = 'none';
  const inputValue = inputEl.value.trim();

  const heighCard = () =>
    document.querySelector('.gallery-item').getBoundingClientRect();

  try {
    const { data } = await getImages(inputValue, currentPage);
    galleryEl.insertAdjacentHTML('beforeend', createMarkUp(data.hits));
    window.scrollBy({
      top: heighCard().height * 2,
      left: 0,
      behavior: 'smooth',
    });

    lightboxPict.refresh();
    const totalPages = Math.ceil(data.totalHits / perPage);

    if (currentPage === totalPages) {
      iziToast.info({
        title: 'Caution',
        message: `We're sorry, but you've reached the end of search results.`,
      });
      btnLoader.style.display = 'none';
      loaderMore.style.display = 'none';
      return;
    }

    loaderMore.style.display = 'none';
    btnLoader.style.display = 'block';
  } catch (error) {
    console.log(error);
  }
}
