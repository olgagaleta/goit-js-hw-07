import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

function createGalleryMarkup() {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
  </a>
</div>`
    )
    .join('');
}

galleryBox.innerHTML = createGalleryMarkup(galleryItems);

let instance;

const onImageClick = e => {
  e.preventDefault();
  if (!e.target.nodName === 'IMG') return;
  const newImg = e.target.dataset.source;
  instance = basicLightbox.create(`<img src="${newImg}" width="800" height="600">`);
  instance.show();
  document.addEventListener('keydown', onCloseModal);
};

function onCloseModal(e) {
  e.preventDefault();
  if (e.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onCloseModal);
  }
}

galleryBox.addEventListener('click', onImageClick);
