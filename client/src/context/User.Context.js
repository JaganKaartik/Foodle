import React, { useState, createContext, useEffect } from 'react';
import { getUserProfile } from '../services/helpers.js';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      const result = await getUserProfile();
      return result;
    }
    const res = fetchUserProfile();
    setData(res);
  }, []);
  return <UserContext.Provider value={[data, setData]}>{props.children}</UserContext.Provider>;
};
