import * as React from 'react';

import { RenderIf, SkeletonLoader } from '..';
import { CardProps } from './types';
import './Card.css';

export default function Card({ children, state }: CardProps) {
  return (
    <div className="card-container">
      <RenderIf match={state === 'loading'}>
        <SkeletonLoader />
      </RenderIf>
      <RenderIf match={state === 'error'}>❌ Ooopss!</RenderIf>
      <RenderIf match={state === 'showing'}>{children}</RenderIf>
    </div>
  );
}
