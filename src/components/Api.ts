/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class Api {
  _url: any;
  _headers:any;
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;

  }

  _check(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('Произошла ошибка');
  }

  getCards() {
    return fetch(`${this._url}`, {
      headers: this._headers,
    }).then((res) => this._check(res));
  }

  addCard(data) {
    return fetch(`${this._url}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._check(res));
  }

  deleteCard(id) {
    return fetch(`${this._url}/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._check(res));
  }

  setUserInfo(data) {
    return fetch(`${this._url}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._check(res));
  }

  getUserInfo() {
    return fetch(`${this._url}`, {
      headers: this._headers,
    })
      .then((res) => this._check(res));
  }

  setUserAvatar(data) {
    return fetch(`${this._url}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._check(res));
  }

  setLike(id) {
    return fetch(`${this._url}/${id}`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._check(res));
  }

  removeLike(id) {
    return fetch(`${this._url}/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._check(res));
  }
}
