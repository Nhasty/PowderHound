import React, { useState, useContext } from 'react';
import { SignInContext } from '../UserContext';
import { MountainsDataContext } from './mountainsDisplay/MyMountainsContext';

export default function SignIn() {
  const { setUser } = useContext(SignInContext);
  const { getUserMountains } = useContext(MountainsDataContext);
  const [newUser, setNewUser] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getUserMountains(newUser);
        setUser(newUser);
      }}
    >
      <input type="text" value={newUser} onChange={(e) => setNewUser(e.target.value)} required />
      <button type="submit">Sign In</button>
    </form>
  );
}
