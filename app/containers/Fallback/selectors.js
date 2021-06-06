/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { find } from 'lodash';

const selectFallback = state => {
  return state.fallback || initialState
};

const makeSelectShowFallback = () =>
  createSelector(
    selectFallback,
    fallbackState => fallbackState.showFallback,
  );

export {
  selectFallback,
  makeSelectShowFallback,
};
