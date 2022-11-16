import React, { useState, createContext } from 'react';
import axios from 'axios';

export const MountainsDataContext = createContext();

export function MyMountainsContext({ children }) {
  const [userMountains, setUserMountains] = useState([]);

  const getUserMountains = async (newUser) => {
    try {
      const mountains = await axios.get('/mountains', { params: { user: newUser } });
      setUserMountains(mountains.data);
    } catch (err) {
      console.log(err);
    }
  };
  const mountainsValues = {
    userMountains,
    setUserMountains,
    getUserMountains
  }
  return (
    <MountainsDataContext.Provider value={mountainsValues}>
      {children}
    </MountainsDataContext.Provider>
  );
}
