import styled from 'styled-components';

export const MountainCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  border-radius: 8px;

`;

export const AlwaysDisplayed = styled.article`
  display: flex;
  align-items: center;
  border: 2px solid #003153;
  border-radius: 8px;
  background-color: #448ee4;
  gap: 8%
`;

export const TemperatureDisplay = styled.section`
  font-size: 24px;
  width: 50%;
`;

export const ResortDisplay = styled.section`
  font-size: 32px;
  width: 35%;
  display: flex;
  flex-direction: column;
`;

export const CardColumnFlex = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props.changeWidth};
`;
export const CardRowFlex = styled.section`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.userWidth};
  justify-self: center;
  grid-area: conditions;
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