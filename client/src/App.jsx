import React, { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import { SignInContext } from './UserContext';
import SignIn from './components/SignIn';
import MyMountains from './components/mountainsDisplay/MyMountains';
import { StyledMain, StyledH1 } from './styles/App.styles';

function App() {
  const { user } = useContext(SignInContext);
  return (
    <StyledMain>
      <StyledH1>Powder Hound</StyledH1>
      {user.length ? <MyMountains /> : <SignIn />}
    </StyledMain>
  )
}

export default App;
