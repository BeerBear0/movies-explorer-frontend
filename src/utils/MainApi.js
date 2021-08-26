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

  removeSaveMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._getHeaders(localStorage.getItem('jwt'))
    })
      .then(this._getResponse)
  }
  getSavedMovies() {
      return fetch(`${this._baseUrl}/movies`, {
        headers: this._getHeaders(localStorage.getItem('jwt'))
      })
  }
  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._getHeaders(),
      body:JSON.stringify({
        email,
        password,
        name
      })
    })
      .then(this._getResponse);
  }
  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(this._getResponse())
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._getHeaders(localStorage.getItem('jwt')),
    })
      .then(this._getResponse)
  }
  updateProfileUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(localStorage.getItem('jwt'))
    })
      .then(this._getResponse)
  }

}


export const mainApi = new MainApi({
  baseUrl: BASE_URL,
})