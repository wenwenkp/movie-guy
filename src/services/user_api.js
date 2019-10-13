import tokenService from '../utils/tokenService';

const BASE_URL = '/api/favmovie';

function getFavMovie() {
	return fetch(`${BASE_URL}/get`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			'Authorization': 'Bearer ' + tokenService.getToken(),
		},
	}).then(res => {
		return res.json();
	});
}

function addFavMovie(movieId, title, url) {
	return fetch(`${BASE_URL}/add`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'Authorization': 'Bearer ' + tokenService.getToken(),
		},
		body: JSON.stringify({ 'movieId': movieId, 'title': title, 'imgUrl': url })
	}).then(res => {
		if (res.ok) return res.json();
		throw new Error('Bad Credentials!');
	});
}

function removeFavMovie(movieId) {
	return fetch(`${BASE_URL}/remove/${movieId}`, {
		method: 'DELETE',
		headers: {
			'content-type': 'application/json',
			'Authorization': 'Bearer ' + tokenService.getToken(),
		},
	}).then(res => res.json());
}

export default {
	getFavMovie,
	addFavMovie,
	removeFavMovie,
}