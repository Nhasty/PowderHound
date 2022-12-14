import React, { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import { SignInContext } from './UserContext';
import { MountainsDataContext } from './components/mountainsDisplay/MyMountainsContext';
import SignIn from './components/SignIn';
import MyMountains from './components/mountainsDisplay/MyMountains';
import ConfirmMountain from './components/newMountain/ConfirmMountain';
import {
  StyledMain,
  StyledH1,
  UserInfo,
  SignOut
} from './styles/App.styles';

function App() {
  const { user, setUser } = useContext(SignInContext);
  const { mountainFound } = useContext(MountainsDataContext);
  return (
    <StyledMain>
      <StyledH1>Powder Hound</StyledH1>
      {user.length ? (
        <UserInfo>
          {`Hello ${user}`}
          <SignOut onClick={() => { setUser(''); }}> Sign out</SignOut>
        </UserInfo>
      ) : <div />}
      {user.length ? <MyMountains /> : <SignIn />}
      {mountainFound && <ConfirmMountain />}
    </StyledMain>
  )
}

export default App;
