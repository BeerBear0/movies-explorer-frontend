import {BASE_URL} from "./const";

class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  }
  _getResponse (res) {
    if(!res.ok) {
      Promise.reject(`Error ${res.status}`)
    }
    return res.json();
  }
  _fetch(url) {
    return fetch(`${this._baseUrl}${url}`, {
      headers: this._headers
    })
  }

  likeAndSaveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image.url,
        trailer: movie.trailerLink,
        thumbnail: movie.image.format.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
      .then(this._getResponse)
  }

  unSaveMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._getResponse)
  }
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})