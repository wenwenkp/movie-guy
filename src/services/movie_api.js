const API_KEY = process.env.REACT_APP_API_KEY;

const apiBaseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';

// function to fetch api database to get popular, now_playing and top_rated movies
// results will be up to 5 pages only
// and add image base url into each movie object
async function getMovies(type) {
    let choice = type;
    let movieUrl = `${apiBaseUrl}/movie/${choice}?api_key=${API_KEY}`;
    let result = await fetch(movieUrl, { mode: 'cors' }).then(response => response.json());
    let movies = result.results;
    let pages = 5;
    if (result.total_pages < pages) pages = result.total_pages;
    for (let i = 2; i <= pages; i++) {
        let nextPageUrl = movieUrl + `&page=${i}`;
        let content = await fetch(nextPageUrl, { mode: 'cors' }).then(response => response.json());
        movies = movies.concat(content.results);
    }
    let movieList = movies.map((movie) => {
        if (movie.poster_path !== null) {
            movie.poster_path = imageBaseUrl + movie.poster_path;
        }
        return movie;
    });
    return movieList;
};

// function to fetch individual movie details
// and add image base url to each movie object
async function getMovie(id) {
    let movieId = id;
    const movieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${API_KEY}`;
    let movie = await fetch(movieUrl, { mode: 'cors' }).then(response => response.json());
    movie.poster_path = imageBaseUrl + movie.poster_path;
    return movie;
};

// function to search movie
// add image base url to each movie object
// search result up to 5 pages
async function searchMovie(input) {
    let query = input;
    const searchUrl = `${apiBaseUrl}/search/movie?api_key=${API_KEY}&query=${query}`;
    let result = await fetch(searchUrl, { mode: 'cors' }).then(response => response.json());
    let movies = result.results;
    let pages = 5;
    if (result.total_pages < pages) pages = result.total_pages;
    for (let i = 2; i <= pages; i++) {
        let nextPageUrl = searchUrl + `&page=${i}`;
        let content = await fetch(nextPageUrl, { mode: 'cors' }).then(response => response.json());
        movies = movies.concat(content.results);
    }
    let movieList = movies.map((movie) => {
        if (movie.poster_path !== null) {
            movie.poster_path = imageBaseUrl + movie.poster_path;
        }
        return movie;
    });
    return movieList;
}

export default {
    getMovies,
    getMovie,
    searchMovie,
};