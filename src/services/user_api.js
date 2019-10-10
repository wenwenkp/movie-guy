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

function addFavMovie(movie) {
  return fetch(`${BASE_URL}/add`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify(movie)
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  });
}

function removeFavMovie(movie) {
  return fetch(`${BASE_URL}/remove`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify(movie)
  }).then(res => res.json());
}

export default {
  getFavMovie,
  addFavMovie,
  removeFavMovie,
}