const API_KEY = process.env.REACT_APP_API_KEY;

const apiBaseUrl = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${API_KEY}`;
const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';

async function getNowPlaying() {
    let result = await fetch(nowPlayingUrl, { mode: 'cors' }).then(response => response.json());
    let nowPlayingMovies = result.results;
    let pages = 5;
    if(result.total_pages < pages) pages = result.total_pages;
    for(let i = 2; i <= pages; i++){
        let nextPageUrl = nowPlayingUrl + `&page=${i}`;
    
        let content = await fetch(nextPageUrl, {mode: 'cors'}).then(response => response.json());
        nowPlayingMovies = nowPlayingMovies.concat(content.results);
    }
    let nowPlaying = nowPlayingMovies.map((movie)=>{
        if(movie.poster_path !== null){
            movie.poster_path = imageBaseUrl + movie.poster_path;
        }
        return movie;    
    });
    return nowPlaying;
};

async function getMovie(id) {
    let movieId = id;
    const movieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${API_KEY}`;
    let movie = await fetch(movieUrl, { mode: 'cors' }).then(response => response.json());
    movie.poster_path = imageBaseUrl + movie.poster_path;
    return movie;
};

async function searchMovie(input) {
    let query = input;
    const searchUrl = `${apiBaseUrl}/search/company?api_key=${API_KEY}&query=${query}`;
    console.log(searchUrl);
    let result = await fetch(searchUrl, {mode: 'cors'}).then(response => response.json());
    console.log(result);
    return result;
}

export default {
    getNowPlaying,
    getMovie,
    searchMovie,
};
