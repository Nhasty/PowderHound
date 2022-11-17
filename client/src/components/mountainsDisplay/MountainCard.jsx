import React, { useState } from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa'
import CurrentWeather from '../card/CurrentWeather';
import CurrentConditions from '../card/CurrentConditions';
import FiveDay from '../card/FiveDay';
import {
  MountainCardContainer,
  AlwaysDisplayed,
  ResortDisplay,
} from '../../styles/mountainsDisplayStyles/MountainCard.styles';

export default function MountainCard({ mountain }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <MountainCardContainer onClick={() => setIsClicked(!isClicked)}>
      <AlwaysDisplayed>
        <ResortDisplay>
          {mountain.name}
          {isClicked ? <FaAngleDoubleUp size={20} /> : <FaAngleDoubleDown size={20} />}
        </ResortDisplay>
        <CurrentWeather todaysForecast={mountain.todaysForecast} />
        <CurrentConditions snowConditions={mountain.snowConditions} />
      </AlwaysDisplayed>
      {isClicked && <FiveDay fiveDayForecast={mountain.fiveDayForecast} />}
    </MountainCardContainer>
  )
}