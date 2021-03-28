export const logout = () => {
  window.localStorage.removeItem('foodle-jwt');
  window.localStorage.removeItem('foodle-usr-id');
};

export const login = (authToken, userId) => {
  window.localStorage.setItem('foodle-jwt', authToken);
  window.localStorage.setItem('foodle-usr-id', userId);
};

export const authTokenStatus = () => {
  const resp = window.localStorage.getItem('foodle-jwt') ? true : false;
  return resp;
};
