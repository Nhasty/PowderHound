import React from 'react';
import DailyForecast from '../forecasts/DailyForecast';
import {
  FutureForecast,
} from '../../styles/mountainsDisplayStyles/FiveDay.styles';

export default function FiveDay({ fiveDayForecast }) {
  const forecasts = fiveDayForecast.forecast5Day.map((forecast) => (
    <DailyForecast key={forecast._id} forecast={forecast} />
  ));
  return (
    <FutureForecast>
      {forecasts}
    </FutureForecast>
  )
}