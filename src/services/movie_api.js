// const dotenv = require('dotenv')
// const buf = Buffer.from('BASIC=basic')
// const config = dotenv.parse(buf) // will return an object
// const api = dotenv
// console.log(typeof config, config) // object { BASIC : 'basic' }

const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY='90ce4aaf41910d53cce3f11e3053992f';


const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${API_KEY}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

async function getNowPlaying() {
    // console.log(API_KEY);
    let result = await fetch(nowPlayingUrl, { mode: 'cors' }).then(response => response.json());
    let nowPlayingMovies = result.results;

    let pages = 10;

    if(result.total_pages < 10) pages = result.total_pages;
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

export default {
    getNowPlaying,
    getMovie,
};
