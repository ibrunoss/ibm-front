import { ReactNode } from 'react';

export type CardState = 'showing' | 'error' | 'loading';

export type CardProps = {
  children: ReactNode;
  state: CardState;
};
