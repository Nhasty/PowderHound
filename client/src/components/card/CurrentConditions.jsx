import React from 'react';
import { parse, format } from 'date-fns';
import {
  CardRowFlex,
  CardColumnFlex,
  BaseDepthDisplay,
  SmallText,
  SnowfallDisplay,
} from '../../styles/mountainsDisplayStyles/MountainCard.styles';
export default function CurrentConditions({ snowConditions, mountainFound }) {
  const found = !!mountainFound;
  return (
    <CardRowFlex userWidth={found ? '50%' : '20%'}>
      <CardColumnFlex>
        <BaseDepthDisplay>
          Base:&nbsp;
          <sub>
            {snowConditions.botSnowDepth}
          </sub>
          &#92;
          <sup>
            {snowConditions.topSnowDepth}
          </sup>
        </BaseDepthDisplay>
        <SmallText>
          recent snow:
        </SmallText>
        {!(snowConditions.lastSnowfallDate === '—') ? format(parse(snowConditions.lastSnowfallDate, 'dd MMM yyyy', new Date()), 'PP') : 'N/A'}
      </CardColumnFlex>
      <SnowfallDisplay>
        {snowConditions.freshSnowfall ? snowConditions.freshSnowfall.replace('in', '"') : '0"'}
        <SmallText>
          Today
        </SmallText>
      </SnowfallDisplay>
    </CardRowFlex>
  );
}
