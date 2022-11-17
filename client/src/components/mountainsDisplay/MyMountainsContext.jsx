import React, { useState, createContext, useMemo } from 'react';
import axios from 'axios';

export const MountainsDataContext = createContext();

export function MyMountainsContext({ children }) {
  const [userMountains, setUserMountains] = useState([]);
  const [newUserMountain, setNewUserMountain] = useState({
    location: [],
    mountainConditions: {},
  });
  const [mountainFound, setMountainFound] = useState(false);

  const getUserMountains = async (newUser) => {
    try {
      const mountains = await axios.get('/mountains', { params: { user: newUser } });
      setUserMountains(mountains.data);
    } catch (err) {
      console.log(err);
    }
  };

  const mountainsValues = useMemo(() => ({
    userMountains,
    setUserMountains,
    getUserMountains,
    newUserMountain,
    setNewUserMountain,
    mountainFound,
    setMountainFound,
  }), [userMountains, newUserMountain, mountainFound]);
  return (
    <MountainsDataContext.Provider value={mountainsValues}>
      {children}
    </MountainsDataContext.Provider>
  );
}
