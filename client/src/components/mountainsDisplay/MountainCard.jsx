import React, { useState } from 'react';
import { FaWind } from 'react-icons/fa';
import { parse, format } from 'date-fns';
import {
  MountainCardContainer,
  AlwaysDisplayed,
  TemperatureDisplay,
  ResortDisplay,
  CardColumnFlex,
  CardRowFlex,
  BaseDepthDisplay,
  SnowfallDisplay,
  SmallText,
} from '../../styles/mountainsDisplayStyles/MountainCard.styles';

export default function MountainCard({ mountain }) {
  console.log(mountain)
  return (
    <MountainCardContainer>
      <AlwaysDisplayed>
        <ResortDisplay>
          {mountain.name}
        </ResortDisplay>
        <CardColumnFlex changeWidth="25%">
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
        <CardRowFlex>
          <CardColumnFlex>
            <BaseDepthDisplay>
              Base:&nbsp;
              <sub>
                {mountain.snowConditions.botSnowDepth}
              </sub>
              &#92;
              <sup>
                {mountain.snowConditions.topSnowDepth}
              </sup>
            </BaseDepthDisplay>
            <SmallText>
              recent snow:
            </SmallText>
            {format(parse(mountain.snowConditions.lastSnowfallDate, 'dd MMM yyyy', new Date()), 'PP')}
          </CardColumnFlex>
          <SnowfallDisplay>
            {mountain.snowConditions.freshSnowfall.replace('in', '"')}
            <SmallText>
              Today
            </SmallText>
          </SnowfallDisplay>
        </CardRowFlex>
      </AlwaysDisplayed>
    </MountainCardContainer>
  )
}