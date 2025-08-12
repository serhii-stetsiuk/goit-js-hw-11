import axios from 'axios';


export function getImagesByQuery(query) {

	return axios.get('https://pixabay.com/api/', {
		params: {
			key: '51732314-3454f0789e14ece522df46b66',
			q: query,
			image_type: 'photo',
			orientation: 'horizontal',
			safesearch: true,
		}
	}).then(rez => rez.data);
}

