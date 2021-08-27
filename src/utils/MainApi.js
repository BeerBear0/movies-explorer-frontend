import {BASE_URL} from "./const";
import {IMAGE_URL} from "./const";

class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
  }
  _getResponse (res) {
    if(!res.ok) {
     return Promise.reject(new Error(res.status))
    }
    return res.json();
  }
  getSavedMovies(token) {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(this._getResponse)
  }
  saveMovie(movieCard, token) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(this._getResponse)
  }
  deleteMovie(id, token) {
    return fetch(this._baseUrl + '/movies' + id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(this._getResponse)
  }
  getUserInfo(token) {
    return fetch(this._baseUrl + 'users/me', {
      method: 'GET',
      headers: {
        'Authorization':`Bearer ${token}`
      }
    })
      .then(this._getResponse)
  }
  updateUserInfo(data, token) {
    return fetch(this._baseUrl + 'users/me', {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
      .then(this._getResponse)
  }
  register (name, email, password) {
    return fetch(this._baseUrl + '/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
      .then(this._getResponse)
  }

  login (email, password) {
    return fetch(this._baseUrl + 'signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(this._getResponse)
  }
  getContent(token) {
    return fetch(this._baseUrl + "/users/me", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._getResponse)
  }
}



export const mainApi = new MainApi({
  baseUrl: BASE_URL,
})