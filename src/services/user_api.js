import tokenService from '../utils/tokenService';

const BASE_URL = '/api/favmovie/add'; 

export function updateFavMovie(movie) {
    return fetch(`${BASE_URL}/${movie._id}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken(),
        },
      body: JSON.stringify(movie)
    }).then(res => res.json());
  }

export default {
    updateFavMovie,
}