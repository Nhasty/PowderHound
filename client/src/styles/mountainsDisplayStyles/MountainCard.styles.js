import styled from 'styled-components';

export const MountainCardContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const AlwaysDisplayed = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TemperatureDisplay = styled.section`
  font-size: 24px;
  width: 50%;
`;

export const ResortDisplay = styled.section`
  font-size: 24px;
  width: 40%
`;

export const CardColumnFlex = styled.section`
  display: flex;
  flex-direction: column;
  justify-content ${(props) => props.justify || 'flex-start'};
  width: 25%;
`;
