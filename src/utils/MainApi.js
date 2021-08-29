import {BASE_URL} from "./const";
import {IMAGE_URL} from "./const";

class MainApi {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status} : ${res.statusText}`);
  }

  _fetch(url) {
    return fetch(`${this._baseUrl}${url}`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse);
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: IMAGE_URL + movie.image.url,
        trailer: movie.trailerLink,
        thumbnail: IMAGE_URL + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    }).then(this._checkResponse);
  }

  unSaveMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  }

  getSavedMovies(url='/movies') {
    return this._fetch(url)
  }

  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    }).then((res) => {
      return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    })
  }

  login({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    }).then((res) => {
      return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    })
  }

  getUser(url='/users/me') {
    return this._fetch(url)
  }

  updateUser({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        "name": name,
        "email": email
      })
    }).then((res) => {
      return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    })
  }

  logout() {
    return fetch(`${this._baseUrl}/logout`, {
      headers: this._headers,
      credentials: "include",
    })
      .then(this._checkResponse);
  }
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});
