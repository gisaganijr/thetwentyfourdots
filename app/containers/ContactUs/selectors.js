/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { find } from 'lodash';

const selectAgency = state => {
  return state.agency || initialState
};

const makeSelectSliders = () =>
  createSelector(
    selectAgency,
    agencyState => agencyState.sliders,
  );

const makeSelectSliderIndex = () =>
createSelector(
  selectAgency,
  agencyState => agencyState.slideIndex,
);

const makeSelectSelectedSlider = () =>
createSelector(
  selectAgency,
  agencyState => {
    const findItem = find([...agencyState.sliders], function(o) { return parseInt(o.index) === parseInt(agencyState.slideIndex);});
    return findItem;
  },
);

export {
  selectAgency,
  makeSelectSliders,
  makeSelectSliderIndex,
  makeSelectSelectedSlider
};
