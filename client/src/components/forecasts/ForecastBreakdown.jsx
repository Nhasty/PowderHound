import React from 'react';
import { FaWind } from 'react-icons/fa';
import { SmallText } from '../../styles/mountainsDisplayStyles/MountainCard.styles';

import {
  BreakdownLI,
  ForecastRowFlex,
  SnowColumnFlex,
  ForecastColumnFlex,
  ForecastSnowDisplay,
} from '../../styles/mountainsDisplayStyles/FiveDay.styles';

export default function ForecastBreakdown({ breakdown, timeOfDay }) {
  const readableTime = (timeIndex) => {
    let timeString = '';
    if (timeIndex === 0) {
      timeString = 'Morning';
    } else if (timeIndex === 1) {
      timeString = 'Afternoon';
    } else if (timeIndex === 2) {
      timeString = 'Night';
    }
    return timeString;
  };
  const pickColor = (timeIndex) => {
    let color = '#C6E6FB';
    if (timeIndex === 0) {
      color = '#F5CA7B';
    } else if (timeIndex === 1) {
      color = '#448ee4';
    } else if (timeIndex === 2) {
      color = '#5c54a4';
    }
    return color;
  }
  return (
    <BreakdownLI bC={pickColor(timeOfDay)}>
      <SnowColumnFlex>
        <SmallText>
          {readableTime(timeOfDay)}
        </SmallText>
        <ForecastSnowDisplay>
          {breakdown.snow.replace('in', '"')}
        </ForecastSnowDisplay>
      </SnowColumnFlex>
      <ForecastColumnFlex>
        <div>
          <sup>
            {breakdown.maxTemp}
          </sup>
          &#47;
          <sub>
            {breakdown.minTemp}
          </sub>
        </div>
        <ForecastRowFlex>
          <FaWind />
          {breakdown.windSpeed}
          &nbsp;
          {breakdown.windDirection}
        </ForecastRowFlex>
      </ForecastColumnFlex>
    </BreakdownLI>
  )
}