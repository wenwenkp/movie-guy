import tokenService from '../utils/tokenService';

const BASE_URL = '/api/favmovie'; 

function addFavMovie(movie) {
  console.log(movie);
  console.log('adding ...');
    return fetch(`${BASE_URL}/add`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken(),
        },
      body: JSON.stringify(movie)
    }).then(res => res.json());
  }
function removeFavMovie(movie) {
  console.log('starting to remove...')
  console.log(movie);
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
    addFavMovie,
    removeFavMovie,
}