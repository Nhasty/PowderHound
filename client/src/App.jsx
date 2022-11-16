import React, { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import { SignInContext } from './UserContext';
import SignIn from './components/SignIn';
import MyMountains from './components/MountainsDisplay/MyMountains'
import { MyMountainsContext } from './components/MountainsDisplay/MyMountainsContext'

function App() {
  const { user, setUser } = useContext(SignInContext);
  return (
    <div>
      <h1>Powder Hound</h1>
      {user.length ? <MyMountainsContext><MyMountains /></MyMountainsContext> : <SignIn />}
    </div>
  )
}

export default App
