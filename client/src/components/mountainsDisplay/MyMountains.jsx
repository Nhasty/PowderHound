import React, { useContext } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { MountainsDataContext } from './MyMountainsContext';
import {
  MountainsTitleContainer,
  MountainsListContainer,
  MountainHeader,
  MountainSearchAdd,
  MountainsSortLabel,
  MountainsSortSelect,
  MountainsList,
} from '../../styles/mountainsDisplayStyles/MyMountains.styles';
import MountainCard from './MountainCard';

export default function MyMountains() {
  const { userMountains } = useContext(MountainsDataContext);
  const mountainsListElements = userMountains.map((mountain) => (
    <MountainCard key={mountain._id} mountain={mountain} />
  ));
  return (
    <MountainsListContainer>
      <MountainsTitleContainer>
        <MountainHeader>Mountains</MountainHeader>
        <MountainSearchAdd placeholder="Search or Add" />
        <FaPlusSquare size={32} />
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
