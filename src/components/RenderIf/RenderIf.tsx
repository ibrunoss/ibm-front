import * as React from 'react';

import { RenderIfProps } from '../RenderIf/types';

export default function RenderIf({
  match,
  children,
}: RenderIfProps): React.ReactElement {
  if (match) {
    return <>{children}</>;
  }
  return <></>;
}
