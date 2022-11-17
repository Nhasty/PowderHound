import React, { useState, useContext } from 'react';
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
  const [sorter, setSorter] = useState('Fresh Snow');
  const mountainsListElements = userMountains.sort((a, b) => {
    if (sorter === 'Fresh Snow') {
      const aSnow = Number(a.snowConditions.freshSnowfall.replace('in', ''));
      const bSnow = Number(b.snowConditions.freshSnowfall.replace('in', ''));
      if (aSnow < bSnow) {
        return 1;
      }
      if (aSnow > bSnow) {
        return -1;
      }
      return 0;
    }
    if (sorter === 'Base Depth') {
      const aBotBase = a.snowConditions.botSnowDepth ? Number(a.snowConditions.botSnowDepth.replace('in', '')) : 0;
      const aTopBase = a.snowConditions.topSnowDepth ? Number(a.snowConditions.topSnowDepth.replace('in', '')) : 0;
      const aAvgBase = (aBotBase + aTopBase) / 2;
      const bBotBase = b.snowConditions.botSnowDepth ? Number(b.snowConditions.botSnowDepth.replace('in', '')) : 0;
      const bTopBase = b.snowConditions.topSnowDepth ? Number(b.snowConditions.topSnowDepth.replace('in', '')) : 0;
      const bAvgBase = (bBotBase + bTopBase) / 2;
      if (aAvgBase < bAvgBase) {
        return 1;
      }
      if (aAvgBase > bAvgBase) {
        return -1;
      }
      return 0;
    }
    return null;
  }).map((mountain) => (
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
          <MountainsSortSelect
            name="mountains_sort"
            onChange={(e) => {
              setSorter(e.target.value);
            }}
          >
            <option value="Fresh Snow">Fresh Snow</option>
            <option value="Base Depth">Base Depth</option>
          </MountainsSortSelect>
        </MountainsSortLabel>
      </MountainsTitleContainer>
      <MountainsList>
        {userMountains.length ? mountainsListElements : <h3>Add New Mountains Above</h3>}
      </MountainsList>
    </MountainsListContainer>
  );
}
