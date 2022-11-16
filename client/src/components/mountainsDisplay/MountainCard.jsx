import React, { useState } from 'react';
import { FaWind } from 'react-icons/fa';
import {
  MountainCardContainer,
  AlwaysDisplayed,
  TemperatureDisplay,
  ResortDisplay,
  CardColumnFlex,
} from '../../styles/mountainsDisplayStyles/MountainCard.styles';

export default function MountainCard({ mountain }) {
  console.log(mountain)
  return (
    <MountainCardContainer>
      <AlwaysDisplayed>
        <ResortDisplay>
          {mountain.name}
        </ResortDisplay>
        <CardColumnFlex>
          <TemperatureDisplay>
            {mountain.todaysForecast.temperature}
            &deg;F
          </TemperatureDisplay>
          {mountain.todaysForecast.symbolPhrase}
          <div>
            <FaWind />
            &nbsp;
            {mountain.todaysForecast.windSpeed}
            &nbsp;&#47;&nbsp;
            {mountain.todaysForecast.windGust}
            &nbsp;MPH&nbsp;
            {mountain.todaysForecast.windDirString}
          </div>
        </CardColumnFlex>
        <CardColumnFlex justify="flex-end">
          {mountain.snowConditions.botSnowDepth}
          {mountain.snowConditions.topSnowDepth}
          {mountain.snowConditions.lastSnowfallDate}
          {mountain.snowConditions.freshSnowfall}
        </CardColumnFlex>
      </AlwaysDisplayed>
    </MountainCardContainer>
  )
}