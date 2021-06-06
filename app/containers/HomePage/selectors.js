/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { find } from 'lodash';

const selectHome2 = state => {
  return state.home2 || initialState
};

const makeSelectSliders = () =>
  createSelector(
    selectHome2,
    homeState2 => homeState2.sliders,
  );

const makeSelectSliderIndex = () =>
createSelector(
  selectHome2,
  homeState2 => homeState2.slideIndex,
);

const makeSelectSelectedSlider = () =>
createSelector(
  selectHome2,
  homeState2 => {
    const findItem = find([...homeState2.sliders], function(o) { return parseInt(o.index) === parseInt(homeState2.slideIndex);});
    return findItem;
  },
);

const makeSelectPortfolios = () =>
  createSelector(
    selectHome2,
    homeState2 => homeState2.portfolios,
  );


export {
  selectHome2,
  makeSelectSliders,
  makeSelectSliderIndex,
  makeSelectSelectedSlider,
  makeSelectPortfolios
};
