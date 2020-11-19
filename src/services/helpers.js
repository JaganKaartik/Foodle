const server_url = process.env.REACT_APP_SERVER_URL || '';

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

export const twitterLogin = () => {
  window.open(server_url + '/auth/twitter', '_self');
};

export const googleLogin = () => {
  window.open(server_url + '/auth/google', '_self');
};

export const displayAllDish = () => {
  return fetch(server_url + '/api/v1/dish/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const displayDish = (id) => {
  return fetch(server_url + `/api/v1/dish/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const addDish = (name, type, price) => {
  return fetch(server_url + '/api/v1/dish/', {
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
  return fetch(server_url + `/api/v1/dish/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    credentials: 'include'
  });
};

export const updateDish = (name, price) => {
  return fetch(server_url + `/api/v1/dish/`, {
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
