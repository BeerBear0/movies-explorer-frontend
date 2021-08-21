import { MOVIES_URL } from "./const";

class MoviesApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
  }
  _getResponseData (res) {
    if(!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`)
    }
    return res.json();
  }
  getMovies () {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => this._getResponseData(res))
  }
}
export const moviesApi = new MoviesApi({
  baseUrl: MOVIES_URL,
})