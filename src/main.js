
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery }  from './js/render-functions';


const allForm = document.querySelector('.form');
const inputText = document.querySelector('.input_text');
const bigLoader = document.querySelector('.loader');


   allForm.addEventListener('submit', (e) => {
		e.preventDefault();
		// bigLoader.classList.add('isActive');
		getImagesByQuery(inputText.value.trim())
			.then(res => createGallery(res.hits));

		e.target.reset();
	
	})


