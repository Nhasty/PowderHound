import styled from 'styled-components';

export const MountainCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const AlwaysDisplayed = styled.section`
  display: flex;
  align-items: center;
  border: 2px solid #003153;
  gap: 8%
`;

export const TemperatureDisplay = styled.section`
  font-size: 24px;
  width: 50%;
`;

export const ResortDisplay = styled.section`
  font-size: 32px;
  width: 35%
`;

export const CardColumnFlex = styled.section`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.changeWidth};
`;
export const CardRowFlex = styled.section`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;
export const BaseDepthDisplay = styled.div`

`;

export const SnowfallDisplay = styled.div`
  align-self: center;
  font-size: 36px;
`;

export const SmallText = styled.div`
  font-size: 14px;
`;
