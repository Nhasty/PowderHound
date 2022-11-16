import { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import { SignInContext } from './UserContext.jsx';
import SignIn from './components/SignIn.jsx';
import MyMountains from './components/MountainsDisplay/MyMountains.jsx'
import { MyMountainsContext } from './components/MountainsDisplay/MyMountainsContext.jsx'

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
