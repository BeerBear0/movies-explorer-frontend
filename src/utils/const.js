// export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies/';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
// export const BASE_URL = 'https://api.movies.nikko.nomoredomains.monster';
export const BASE_URL = 'http://localhost:3000';
export const IMAGE_URL = 'https://api.nomoreparties.co';


export function filterMovies(movies, userQuery) {
  return  movies.filter((movie) => {
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const userMovie = userQuery.toLowerCase().trim();
    return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
  });
}