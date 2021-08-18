import {MOVIES_URL} from "./const";

class MoviesApi {
  constructor(url) {
    this._url = url;
  }
  _getResponseData (res) {
    if(!res.ok) {
      Promise.reject(`Ошибка ${res.status}`)
    }
    return res.json
  }
  getMovies () {
    return fetch(this._url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => this._getResponseData(res))
  }
}
export const moviesApi = new MoviesApi(MOVIES_URL)