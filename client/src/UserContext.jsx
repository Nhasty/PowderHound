import React, { createContext, useState } from 'react';

export const SignInContext = createContext();

export function UserContext({ children }) {
  const [user, setUser] = useState('');
  const userValues = {
    user,
    setUser,
  };
  return <SignInContext.Provider value={userValues}>{children}</SignInContext.Provider>;
}
