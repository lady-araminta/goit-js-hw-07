import { galleryItems } from './gallery-items.js';

const galleryContRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
  )
  .join('');

galleryContRef.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryContRef.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();
  const { target } = event;
  const largeImg = target.dataset.source;
  const alt = target.alt;
  if (target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${largeImg}" alt="${alt}">
  `,
    {
      onShow: () => window.addEventListener('keydown', onEscClick),
      onClose: () => window.removeEventListener('keydown', onEscClick),
    }
  );

  instance.show();

  function onEscClick(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

console.log(galleryItems);
