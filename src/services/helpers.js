import axios from 'axios';

const server_url = process.env.REACT_APP_SERVER_URL || '';

export const checkAuth = () => {
  return axios(server_url + '/auth/status', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const twitterLogin = () => {
  window.open(server_url + '/auth/twitter', '_self');
};

export const googleLogin = () => {
  window.open(server_url + '/auth/google', '_self');
};

export const displayAllDish = () => {
  console.log('control at dishall helper');
  return fetch(server_url + '/api/dish/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const displayDish = (id) => {
  console.log('control at dishone helper');
  return fetch(server_url + `api/dish/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const addDish = (name, type, price) => {
  return fetch(server_url + '/api/dish/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      type,
      price
    }),
    mode: 'cors',
    credentials: 'include'
  });
};

export const delDish = (id) => {
  return fetch(server_url + `/api/dish/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const updateDish = (id, name, price) => {
  return fetch(server_url + `/api/dish/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      price
    }),
    mode: 'cors',
    credentials: 'include'
  });
};
