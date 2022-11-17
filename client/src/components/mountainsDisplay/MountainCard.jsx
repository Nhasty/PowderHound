import React, { useState } from 'react';
import CurrentWeather from '../card/CurrentWeather';
import CurrentConditions from '../card/CurrentConditions';
import FiveDay from '../card/FiveDay';
import {
  MountainCardContainer,
  AlwaysDisplayed,
  ResortDisplay,
} from '../../styles/mountainsDisplayStyles/MountainCard.styles';

export default function MountainCard({ mountain }) {
  console.log(mountain);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <MountainCardContainer onClick={() => setIsClicked(!isClicked)}>
      <AlwaysDisplayed>
        <ResortDisplay>
          {mountain.name}
        </ResortDisplay>
        <CurrentWeather todaysForecast={mountain.todaysForecast} />
        <CurrentConditions snowConditions={mountain.snowConditions} />
      </AlwaysDisplayed>
      {isClicked && <FiveDay fiveDayForcast={mountain.fiveDayForcast} />}
    </MountainCardContainer>
  )
}