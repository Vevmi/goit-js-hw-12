import { searchImages } from "./js/pixabay-api"
import { imgsTemplate } from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', { });
const gallery = document.querySelector('.gallery')
const loader = document.querySelector('.loader');

const formElem = document.querySelector('.search-form')
formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = formElem.elements.searchQuery.value
    showLoader()
    searchImages(userData).then(({ data }) => {
        const markup = imgsTemplate(data.hits); 
        gallery.innerHTML = markup
        lightbox.refresh();
    }).catch(() => {
        console.log('Try later');
    }).finally(hideLoader);
})


function showLoader() {
    loader.classList.remove('is-hidden');
}

function hideLoader() {
    loader.classList.add('is-hidden');
}