import tokenService from '../utils/tokenService';

const BASE_URL = '/api/favmovie';

// function to fetch user fav movies from backend
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

// function to send request to add movie to user fav movie list
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

// function to send request to remove movie from user fav move list
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