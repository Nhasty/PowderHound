import React from 'react';
import LocationLI from '../../styles/confirmStyles/Location.styles';

export default function Location({ loc }) {
  const theInfo = loc.name + '$' + loc.id;
  return (
    <LocationLI>
      <input type="radio" name="location" value={theInfo} required />
      {loc.name}
      ,&nbsp;
      {loc.state}
      &nbsp;&#40;
      {loc.lat}
      ,&nbsp;
      {loc.lon}
      &#41;
    </LocationLI>
  )
}