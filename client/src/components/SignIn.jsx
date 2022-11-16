import React, { useState, useContext } from 'react';
import { SignInContext } from '../UserContext.jsx';

export default function SignIn() {
  const { setUser } = useContext(SignInContext);
  const [newUser, setNewUser] = useState('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUser(newUser)
      }}
    >
      <input type="text" value={newUser} onChange={(e) => setNewUser(e.target.value)} required/>
      <button type="submit">Sign In</button>
    </form>
  )
}