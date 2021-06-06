import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay';
import React from 'react';
import CustomLoadingIndicator from 'containers/Fallback';
import { customLoadingIndicatorMinDelay } from 'variables';

export default loadable(() =>
  pMinDelay(import('./index'), customLoadingIndicatorMinDelay), {
    fallback: <CustomLoadingIndicator />,
  }
)