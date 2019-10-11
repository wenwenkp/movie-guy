const API_KEY = process.env.REACT_APP_API_KEY;

const apiBaseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';

async function getMovies(type) {
    let choice = type;
    let movieUrl = `${apiBaseUrl}/movie/${choice}?api_key=${API_KEY}`;
    
    let result = await fetch(movieUrl, { mode: 'cors' }).then(response => response.json());
    let movies = result.results;
    let pages = 5;
    if(result.total_pages < pages) pages = result.total_pages;
    for(let i = 2; i <= pages; i++){
        let nextPageUrl = movieUrl + `&page=${i}`;
    
        let content = await fetch(nextPageUrl, {mode: 'cors'}).then(response => response.json());

        movies = movies.concat(content.results);
    }

    let movieList = movies.map((movie)=>{
        if(movie.poster_path !== null){
            movie.poster_path = imageBaseUrl + movie.poster_path;
        }
        return movie;    
    });
    return movieList;
};

async function getMovie(id) {
    let movieId = id;
    const movieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${API_KEY}`;
    let movie = await fetch(movieUrl, { mode: 'cors' }).then(response => response.json());
    movie.poster_path = imageBaseUrl + movie.poster_path;
    return movie;
};

// function getFavMovies(arr){
//     let result = arr.map( async (id)=>{
//         const movieUrl = `${apiBaseUrl}/movie/${id}?api_key=${API_KEY}`;
//         let temp = await fetch(movieUrl, {mode : 'cors'}).then(response => response.json());
//         temp.poster_path = imageBaseUrl + temp.poster_path;
//         console.log(temp);
//         return temp;
//     });
//     return result;
// }

async function searchMovie(input) {
    let query = input;
    const searchUrl = `${apiBaseUrl}/search/movie?api_key=${API_KEY}&query=${query}`;
    let result = await fetch(searchUrl, {mode: 'cors'}).then(response => response.json());
    let movies = result.results;
    let pages = 5;
    if(result.total_pages < pages) pages = result.total_pages;
    for(let i = 2; i <= pages; i++){
        let nextPageUrl = searchUrl + `&page=${i}`;
    
        let content = await fetch(nextPageUrl, {mode: 'cors'}).then(response => response.json());

        movies = movies.concat(content.results);
    }

    let movieList = movies.map((movie)=>{
        if(movie.poster_path !== null){
            movie.poster_path = imageBaseUrl + movie.poster_path;
        }
        return movie;    
    });
    return movieList;
}



export default {
    getMovies,
    getMovie,
    // getFavMovies,
    searchMovie,
};
