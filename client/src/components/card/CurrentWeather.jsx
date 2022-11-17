import React from 'react';
import { FaWind } from 'react-icons/fa';
import {
  CardColumnFlex,
  TemperatureDisplay,

} from '../../styles/mountainsDisplayStyles/MountainCard.styles';

export default function CurrentWeather({ todaysForecast }) {
  return (
    <CardColumnFlex changeWidth="25%">
      <TemperatureDisplay>
        {todaysForecast.temperature}
        &deg;F
      </TemperatureDisplay>
      {todaysForecast.symbolPhrase}
      <div>
        <FaWind />
        &nbsp;
        {todaysForecast.windSpeed}
        &nbsp;&#47;&nbsp;
        {todaysForecast.windGust}
        &nbsp;MPH&nbsp;
        {todaysForecast.windDirString}
      </div>
    </CardColumnFlex>
  );
}
