import axios from 'axios';

const server_url = process.env.SERVER_URL || '';

export const loginHelper = (username, password) => {
  return fetch(server_url + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    }),
    mode: 'cors',
    credentials: 'include'
  });
};

export const checkAuth = () => {
  return axios('/auth/login/success', {
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

// export const googleLogin = (username, password) => {
//   return fetch("http://localhost:5000/home", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     mode: "cors",
//     credentials: "include"
//   });
// };

export const displayAllHelper = () => {
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

export const displayOneHelper = (id) => {
  console.log('control at dishone helper');
  return fetch(`api/dish/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const addDishHelper = (name, type, price) => {
  return fetch('api/dish/add', {
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

export const deleteAllHelper = () => {
  return fetch('http://localhost:5000/dish/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const delOneHelper = (id) => {
  return fetch(`http://localhost:5000/dish/p/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const updateHelper = (name, price) => {
  console.log('control in handler');
  console.log(name);
  console.log(price);
  return fetch('http://localhost:5000/dish/', {
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
