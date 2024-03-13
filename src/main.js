import { searchImages } from './js/pixabay-api';
import { imgsTemplate } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const lightbox = new SimpleLightbox('.gallery a', {});
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtnElem = document.querySelector('.load-more-btn');
let page;
let userData;
let maxPage;
const per_page = 15;

const formElem = document.querySelector('.search-form');
formElem.addEventListener('submit', async e => {
  e.preventDefault();
  page = 1;
  userData = formElem.elements.searchQuery.value;
  if (!userData) {
    iziToast.error({
      message: 'Feild should not be empty!',
    });
    return;
  }
  showLoader();
  try {
    const { data } = await searchImages(userData, page);
    const markup = imgsTemplate(data.hits);
    gallery.innerHTML = markup;
    lightbox.refresh();
      if (data.hits.length == 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
          return
    }
    maxPage = Math.ceil(data.totalHits / per_page);
  } catch {
    iziToast.error({
      message: 'Enter something',
    });
  }
  hideLoader();
  updateBtnStatus();
});

loadBtnElem.addEventListener('click', async e => {
  searchImages(userData, page);
  page += 1;
  showLoader();
  try {
    const { data } = await searchImages(userData, page);
    const markup = imgsTemplate(data.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  } catch {
    console.log('Try later');
  }
  hideLoader();
    updateBtnStatus();
    scroll();
});

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

function showLoadBtn() {
  loadBtnElem.classList.remove('is-hidden');
}

function hideLoadBtn() {
  loadBtnElem.classList.add('is-hidden');
}

function updateBtnStatus() {
  if (page >= maxPage) {
      hideLoadBtn();
      iziToast.info({
      message: 'We\'re sorry, but you\'ve reached the end of search results.',
    });
  } else {
    showLoadBtn();
    }
}
function scroll() {
    const cardHeiht = gallery.firstElementChild.getBoundingClientRect().height;
    scrollBy({ 'behavior': 'smooth', 'top': cardHeiht*3});
}