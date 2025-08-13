
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const bigGallery = document.querySelector('.gallery');
const bigLoader = document.querySelector('.loader');
export function createGallery(images) {
	
	function templateImage({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
		return `
        <a class="gallery-card" href="${largeImageURL}"
          ><div class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
          </div>
          <div class="gallery-text">
            <div class="likes">
              <p class="gallery-text-item">Likes</p>
              <p class="gallery-text-count">${likes}</p>
            </div>

            <div class="likes">
              <p class="gallery-text-item">Views</p>
              <p class="gallery-text-count">${views}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Comments</p>
              <p class="gallery-text-count">${comments}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Downloads</p>
              <p class="gallery-text-count">${downloads}</p>
            </div>
          </div>
        </a>`;
	};

	function templateImages(images) {
		return images.map(templateImage).join('');
	}
		const markup = templateImages(images);
	bigGallery.innerHTML = markup;
	SimpleLight.refresh();
	hideLoader();
};
	let SimpleLight = new SimpleLightbox('.gallery a', {
	captionDelay: 250,
	overlayOpacity: 0.95,
});
bigGallery.addEventListener('click', e => {
	e.preventDefault();
	if (e.target.noteName !== 'A') return;

});
export function showLoader(){
	bigLoader.classList.add('isActive');
}
export function hideLoader(){
	bigLoader.classList.remove('isActive');
}
export function clearGallery() {
	if (bigGallery) {
		bigGallery.innerHTML = '';
	}
}

