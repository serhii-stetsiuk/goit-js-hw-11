
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, showLoader, clearGallery, hideLoader }  from './js/render-functions';

const allForm = document.querySelector('.form');
const inputText = document.querySelector('.input_text');

allForm.addEventListener('submit', (e) => {
	if (!inputText.value) return;
		clearGallery();
		e.preventDefault();
		showLoader()
	getImagesByQuery(inputText.value.trim())
		.then(res => {
			if (!res.hits.length) {
				iziToast.error({
					position: 'topRight',
					message: 'Sorry, there are no images matching your search query. Please try again!',
				})
			} else { createGallery(res.hits) }
		})
		.catch(error => iziToast.error({
			position: 'topRight',
			message: error,
		}))
			.finally(()=>hideLoader());
		e.target.reset();
	})


