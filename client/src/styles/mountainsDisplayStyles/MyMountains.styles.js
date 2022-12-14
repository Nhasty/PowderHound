import styled from 'styled-components';

export const MountainsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MountainsTitleContainer = styled.div`
  padding: 50px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border-bottom: 2px solid #003153;
`;

export const MountainHeader = styled.h2`
  display: inline-block;
  font-size: 32px;
  margin: 0px 50px 0px 0px;
`;

export const MountainAdd = styled.input`
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
  width: 75%;
  padding: 0px;
`;

export const RowFlex = styled.form`
  display: flex;
  align-items: center;
  vertical-align: center;
`;

export const NewMountainButton = styled.button`
  border: none;
  width: 32px;
  height: 32px;
  background-color: #C6E6FB;
`;
