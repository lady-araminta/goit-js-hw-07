import { galleryItems } from './gallery-items.js';

const galleryContRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
       <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>`
  )
  .join('');
galleryContRef.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
