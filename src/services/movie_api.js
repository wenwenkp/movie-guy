// const API_KEY = process.env.API_KEY;
const API_KEY='90ce4aaf41910d53cce3f11e3053992f';

const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${API_KEY}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';





async function getNowPlaying() {
    let result = await fetch(nowPlayingUrl, { mode: 'cors' }).then(response => response.json());
    let nowPlayingMovies = result.results;
    let nowPlaying = nowPlayingMovies.map((movie)=>{
        movie.poster_path = imageBaseUrl + movie.poster_path;
        return movie;
    });
    return nowPlaying;
};

module.exports = {
    getNowPlaying,
};