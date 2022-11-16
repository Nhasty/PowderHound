import styled from 'styled-components';

export const MountainsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MountainsTitleContainer = styled.div`
  padding: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%
`;

export const MountainHeader = styled.h2`
  display: inline-block;
  font-size: 32px;
  margin: 0px 50px 0px 0px;
`;

export const MountainSearchAdd = styled.input`
  height: 28px;
  width: 185px;
  align-self: center;
  border: none;
  padding: 0px;
  text-align: center;
`;

export const MountainsSortLabel = styled.label`
  padding-left: 180px;
`;

export const MountainsSortSelect = styled.select`
  border: none;
  height: 28px;
  font-family: 'Audiowide', cursive;
  font-size: 18x;
`;

export const MountainsList = styled.ul`
  width: 80%;
`;

export const RowFlex = styled.div`
  display: flex;
  align-items: center;
`;
