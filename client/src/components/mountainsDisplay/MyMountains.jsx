import React, { useState ,useContext } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import axios from 'axios';
import { MountainsDataContext } from './MyMountainsContext';
import {
  MountainsTitleContainer,
  MountainsListContainer,
  MountainHeader,
  MountainAdd,
  MountainsSortLabel,
  MountainsSortSelect,
  MountainsList,
  RowFlex,
  NewMountainButton,
} from '../../styles/mountainsDisplayStyles/MyMountains.styles';
import MountainCard from './MountainCard';

export default function MyMountains() {
  const { userMountains, setMountainFound, setNewUserMountain } = useContext(MountainsDataContext);
  const [newMountain, setNewMountain] = useState('');
  const mountainsListElements = userMountains.map((mountain) => (
    <MountainCard key={mountain._id} mountain={mountain} />
  ));
  return (
    <MountainsListContainer>
      <MountainsTitleContainer>
        <MountainHeader>Mountains</MountainHeader>
        <RowFlex onSubmit={(e) => {
          e.preventDefault();
          axios.get(`/mountain?resort=${newMountain}`)
            .then((getMountain) => {
              console.log(getMountain.data);
              setNewUserMountain(getMountain.data);
              setMountainFound(true);
              setNewMountain('');
            })
            .catch((err) => console.log(err));
        }}>
          <MountainAdd placeholder="Add" value={newMountain} onChange={(e) => setNewMountain(e.target.value)} required />
          <NewMountainButton type="submit">
            <FaPlusSquare size={32} />
          </NewMountainButton>
        </RowFlex>
        <MountainsSortLabel>
          Sort
          <MountainsSortSelect name="mountains_sort">
            <option>Fresh Snow</option>
            <option>Base Depth</option>
          </MountainsSortSelect>
        </MountainsSortLabel>
      </MountainsTitleContainer>
      <MountainsList>
        {userMountains.length ? mountainsListElements : <h3>Add New Mountains Above</h3>}
      </MountainsList>
    </MountainsListContainer>
  );
}
