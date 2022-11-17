import React, { useState, useContext } from 'react';
import axios from 'axios';
import { MountainsDataContext } from '../mountainsDisplay/MyMountainsContext';
import { SignInContext } from '../../UserContext';
import Location from './Location';
import CurrentConditions from '../card/CurrentConditions';
import {
  ConfirmModal,
  DarkOut,
  ConfirmList,
  ConfirmButton
} from '../../styles/confirmStyles/ConfirmMountain.styles';

export default function ConfirmMountain() {
  const { user } = useContext(SignInContext);
  const [userMountainName, setUserMountainName] = useState('');
  const [userMountainId, setUserMountainId] = useState('');
  const {
    getUserMountains,
    newUserMountain,
    setNewUserMountain,
    setMountainFound
  } = useContext(MountainsDataContext);
  const locationComponents = newUserMountain.location.map((loc) => (
    <Location
      key={loc.id}
      loc={loc}
    />
  ));
  return (
    <DarkOut>
      <ConfirmModal
        onSubmit={(e) => {
          e.preventDefault();
          const axiosObject = {
            user,
            name: userMountainName,
            locationId: userMountainId,
          };
          axios.post('/mountains', axiosObject)
            .then((response) => {
              setNewUserMountain({
                location: [],
                mountainConditions: {},
              });
              setMountainFound(false);
              getUserMountains(user);
              console.log(response);
            })
            .catch((err) => console.log(err))
        }}
      >
        <ConfirmList
          onChange={(e) => {
            const values = e.target.value.split('$');
            setUserMountainName(values[0]);
            setUserMountainId(values[1]);
          }}
        >
          {locationComponents}
        </ConfirmList>
        <CurrentConditions snowConditions={newUserMountain.mountainConditions} />
        <ConfirmButton type="submit">Confirm</ConfirmButton>
      </ConfirmModal>
    </DarkOut>
  )
}