import React, { useContext } from 'react';
import { MountainsDataContext } from './MyMountainsContext';

export default function MyMountains() {
  const { userMountains } = useContext(MountainsDataContext);
  return (
    <div>
      Mountains
    </div>
  );
}
