import React, { useState, createContext, useEffect } from 'react';
import { getUserProfile } from '../services/helpers.js';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const result = getUserProfile();
    result.then((resp) => setData(resp));
  }, []);
  return <UserContext.Provider value={[data, setData]}>{props.children}</UserContext.Provider>;
};
