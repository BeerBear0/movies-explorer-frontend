export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export function checkResponse(res) {
    if(res.ok) {
        res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`)
}

export function getMovies() {
    return fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(checkResponse)
}
