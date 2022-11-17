import React, {useContext} from 'react';
import { MountainsDataContext } from '../mountainsDisplay/MyMountainsContext';
import { SignInContext } from '../../UserContext';
import Location from './Location';
import { ConfirmModal, DarkOut } from '../../styles/confirmStyles/ConfirmMountain.styles';

export default function ConfirmMountain() {
  const { user } = useContext(SignInContext);
  const {
    getUserMountains,
    newUserMountain,
    setNewUserMountain,
    setMountainFound
  } = useContext(MountainsDataContext);
  const locationComponents = newUserMountain.location.map((loc) => (
    <Location key={loc.id} loc={loc} />
  ));
  return (
    <DarkOut>
      <ConfirmModal>
        <ul>
          {locationComponents}
        </ul>
      </ConfirmModal>
    </DarkOut>
  )
}