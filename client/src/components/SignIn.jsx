import React, { useState, useContext } from 'react';
import { SignInContext } from '../UserContext';
import { MountainsDataContext } from './mountainsDisplay/MyMountainsContext';
import { StyledUserForm, StyledUserInput } from '../styles/SignIn.styles';
import { ConfirmButton } from '../styles/confirmStyles/ConfirmMountain.styles';

export default function SignIn() {
  const { setUser } = useContext(SignInContext);
  const { getUserMountains } = useContext(MountainsDataContext);
  const [newUser, setNewUser] = useState('');
  return (
    <StyledUserForm
      onSubmit={(e) => {
        e.preventDefault();
        getUserMountains(newUser);
        setUser(newUser);
      }}
    >
      <StyledUserInput type="text" value={newUser} onChange={(e) => setNewUser(e.target.value)} required />
      <ConfirmButton type="submit">Sign In</ConfirmButton>
    </StyledUserForm>
  );
}
