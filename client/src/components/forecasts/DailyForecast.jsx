import React from 'react';
import ForecastBreakdown from './ForecastBreakdown';
import {
  ForecastLI,
  ForecastDayDisplay,
  BreakdownList,
} from '../../styles/mountainsDisplayStyles/FiveDay.styles';

export default function DailyForecast({ forecast }) {
  const forecastComponents = [forecast.am, forecast.pm, forecast.night].map((breakdown, index) => (
    <ForecastBreakdown key={forecast.dayOfWeek + index} breakdown={breakdown} timeOfDay={index} />
  ));
  return (
    <ForecastLI>
      <ForecastDayDisplay>
        {forecast.dayOfWeek[0].toUpperCase() + forecast.dayOfWeek.slice(1)}
      </ForecastDayDisplay>
      <BreakdownList>
        {forecastComponents}
      </BreakdownList>
    </ForecastLI>
  );
}
