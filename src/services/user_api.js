import tokenService from '../utils/tokenService';

const BASE_URL = '/api/favmovie'; 

export function addFavMovie(movie) {
    return fetch(`${BASE_URL}/add/${movie._id}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken(),
        },
      body: JSON.stringify(movie)
    }).then(res => res.json());
  }
export function removeFavMovie(movie) {
    return fetch(`${BASE_URL}/remove/${movie._id}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken(),
        },
      body: JSON.stringify(movie)
    }).then(res => res.json());
  }

export default {
    addFavMovie,
    removeFavMovie,
}