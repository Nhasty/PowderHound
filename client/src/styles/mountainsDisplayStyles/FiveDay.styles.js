import styled from 'styled-components';

export const FutureForecast = styled.article`
  display: flex;
  justify-content:space-between;
`;

export const ForecastLI = styled.li`
  display: flex;
  flex-direction: column;
  width: 225px;
`;

export const BreakdownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0px;
  border-radius: 8px;
`;

export const BreakdownLI = styled.li`
  display: flex;
  border: 2px solid #003153;
  justify-content: space-between;
  gap: 10px;
  height: 80px;
  border-radius: 8px;
  background-color: ${(props) => props.bC || '#C6E6FB'};
`;

export const ForecastRowFlex = styled.section`
  display: flex;
  font-size: 14px;
`;

export const SnowColumnFlex = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 85px;
`;

export const ForecastColumnFlex = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ForecastDayDisplay = styled.div`
  align-self: center
`;

export const ForecastSnowDisplay = styled.div`
  font-size: 32px;
  align-self: center;
`;
