import React, { useState, useContext } from 'react';
import axios from 'axios';
import { FaWindowClose } from 'react-icons/fa';
import { MountainsDataContext } from '../mountainsDisplay/MyMountainsContext';
import { SignInContext } from '../../UserContext';
import Location from './Location';
import CurrentConditions from '../card/CurrentConditions';
import {
  ConfirmModal,
  DarkOut,
  ConfirmList,
  ConfirmButton,
  ProcessingWarning,
} from '../../styles/confirmStyles/ConfirmMountain.styles';

export default function ConfirmMountain() {
  const { user } = useContext(SignInContext);
  const [userMountainName, setUserMountainName] = useState('');
  const [userMountainId, setUserMountainId] = useState('');
  const [confirmClicked, setConfirmClicked] = useState(false);
  const {
    getUserMountains,
    newUserMountain,
    setNewUserMountain,
    setMountainFound,
    mountainFound,
  } = useContext(MountainsDataContext);
  const locationComponents = newUserMountain.location.map((loc) => (
    <Location
      key={loc.id}
      loc={loc}
    />
  ));

  const submit = () => {
    setConfirmClicked(true);
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
      .catch((err) => {
        setConfirmClicked(false);
        console.log(err);
      });
  };
  return (
    <DarkOut>
      <ConfirmModal
        onSubmit={(e) => {
          e.preventDefault();
          if (!confirmClicked) {
            submit();
          }
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
        <CurrentConditions
          snowConditions={newUserMountain.mountainConditions}
          mountainFound={mountainFound}
        />
        <ConfirmButton id="confirm_button" type="submit">Confirm</ConfirmButton>
        <FaWindowClose
          style={{ gridArea: 'close' }}
          onClick={() => {
            setNewUserMountain({
              location: [],
              mountainConditions: {},
            });
            setMountainFound(false);
          }}
        />
        {confirmClicked && <ProcessingWarning>Adding Mountain</ProcessingWarning>}
      </ConfirmModal>
    </DarkOut>
  )
}