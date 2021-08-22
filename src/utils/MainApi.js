import {BASE_URL} from "./const";
import {IMAGE_URL} from "./const";

class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
  }
  _getResponse (res) {
    if(!res.ok) {
      Promise.reject(`Error ${res.status}`)
    }
    return res.json();
  }
  _getHeaders (jwt) {
    jwt = typeof jwt === 'undefined' ? '' : jwt;
    return {
      authorization: `Bearer ${jwt}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  getToken() {
    return localStorage.getItem('jwt')
  }
  // _fetch(url) {
  //   return fetch(`${this._baseUrl}${url}`, {
  //     headers: this._getHeaders
  //   })
  // }

  likeAndSaveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._getHeaders(localStorage.getItem('jwt')),
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${IMAGE_URL}${movie.image.url}`,
        trailer: movie.trailerLink,
        thumbnail: `${IMAGE_URL}${movie.image.url}`,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
      .then(this._getResponse)
  }

  removeMovieFromSave(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._getHeaders(localStorage.getItem('jwt'))
    })
      .then(this._getResponse)
  }
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
})