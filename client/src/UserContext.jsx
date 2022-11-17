import React, { createContext, useState, useMemo } from 'react';

export const SignInContext = createContext();

export function UserContext({ children }) {
  const [user, setUser] = useState('');
  const userValues = useMemo(() => ({
    user,
    setUser,
  }), [user]);
  return <SignInContext.Provider value={userValues}>{children}</SignInContext.Provider>;
}
