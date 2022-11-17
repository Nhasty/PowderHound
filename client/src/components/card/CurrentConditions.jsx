import React from 'react';
import { parse, format } from 'date-fns';
import {
  CardRowFlex,
  CardColumnFlex,
  BaseDepthDisplay,
  SmallText,
  SnowfallDisplay,
} from '../../styles/mountainsDisplayStyles/MountainCard.styles';
export default function CurrentConditions({ snowConditions }) {
  return (
    <CardRowFlex>
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
        {format(parse(snowConditions.lastSnowfallDate, 'dd MMM yyyy', new Date()), 'PP')}
      </CardColumnFlex>
      <SnowfallDisplay>
        {snowConditions.freshSnowfall.replace('in', '"')}
        <SmallText>
          Today
        </SmallText>
      </SnowfallDisplay>
    </CardRowFlex>
  );
}
