import * as basicLightbox from 'basiclightbox'

 export default function modal (event) {
  const imgSrc = event.target.dataset.src;
  if (imgSrc) {
    basicLightbox
    .create(`<img src="${imgSrc}" width="1000" height="600">`)
    .show()
  }
}
