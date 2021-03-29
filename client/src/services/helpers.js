import axios from 'axios';
import { REACT_APP_SERVER_DEV, REACT_APP_SERVER_PROD } from '../config';

const server_url =
  process.env.NODE_ENV === 'production' ? REACT_APP_SERVER_PROD : REACT_APP_SERVER_DEV;

export const checkAuth = () => {
  return fetch(server_url + '/auth/status', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const getUserProfile = async () => {
  const authToken = localStorage.getItem('foodle-jwt');
  const userId = localStorage.getItem('foodle-usr-id');
  const result = await axios
    .get(server_url + '/api/v1/user/' + userId, {
      headers: {
        Authorization: `Bearer ${authToken}`
      },
      mode: 'cors',
      credentials: 'include'
    })
    .then((resp) => resp.data)
    .then((d) => {
      return d[0];
    })
    .catch((err) => err);
  return result;
};

export const twitterLogin = () => {
  window.open(server_url + '/auth/twitter', '_self');
};

export const googleLogin = () => {
  window.open(server_url + '/auth/google', '_self');
};

export const displayAllDish = () => {
  const authToken = localStorage.getItem('foodle-jwt');
  return fetch(server_url + '/api/v1/dish/all', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const displayDish = async (id) => {
  const authToken = localStorage.getItem('foodle-jwt');
  return await axios
    .get(server_url + `/api/v1/dish/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      },
      mode: 'cors',
      credentials: 'include'
    })
    .then((resp) => resp.data)
    .catch((err) => err);
};

export const addDish = async (name, type, price) => {
  const authToken = localStorage.getItem('foodle-jwt');
  return await axios
    .post(server_url + '/api/v1/dish/', {
      headers: {
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({
        name,
        type,
        price
      }),
      mode: 'cors',
      credentials: 'include'
    })
    .then((resp) => resp.data)
    .catch((err) => err);
};

export const delDish = async (id) => {
  const authToken = localStorage.getItem('foodle-jwt');
  return await fetch(server_url + `/api/v1/dish/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const updateDish = async (name, price) => {
  const authToken = localStorage.getItem('foodle-jwt');
  return await fetch(server_url + `/api/v1/dish/`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      name,
      price
    }),
    mode: 'cors',
    credentials: 'include'
  });
};
