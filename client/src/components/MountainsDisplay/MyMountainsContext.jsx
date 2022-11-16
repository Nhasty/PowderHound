import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { SignInContext } from '../../UserContext';

export const MountainsDataContext = createContext();

export function MyMountainsContext({ children }) {
  const [userMountains, setUserMountains] = useState([]);
  const { user } = useContext(SignInContext);
  const getUserMountains = async (newUser) => {
    try {
      const mountains = await axios.get('/mountains', { params: { user: newUser } });
      console.log(mountains.data);
      setUserMountains(mountains.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserMountains(user);
  }, []);
  const mountainsValues = {
    userMountains,
    setUserMountains,
  }
  return (
    <MountainsDataContext.Provider value={mountainsValues}>
      {children}
    </MountainsDataContext.Provider>
  );
}
