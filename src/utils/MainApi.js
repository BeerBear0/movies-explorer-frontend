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
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})