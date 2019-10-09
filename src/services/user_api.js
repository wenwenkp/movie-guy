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
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  });
}

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
  }).then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  });
  // .then(({token}) => tokenService.setToken(token));
}
//   .then(res => res.json())
//   .then(({token}) => {
//     console.log(token);
//     debugger;
//     localStorage.setItem('token', token);

//   });
//   // .then(JSON.parse(atob(localStorage.token.split('.')[1])).user);
// }

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
    getFavMovie,
    addFavMovie,
    removeFavMovie,
}