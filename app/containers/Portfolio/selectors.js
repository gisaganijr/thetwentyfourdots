/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { find } from 'lodash';

const selectPortfolio = state => {
  return state.portfolio || initialState
};

const makeSelectPortfolios = () =>
  createSelector(
    selectPortfolio,
    portfolioState => portfolioState.portfolios,
  );

const makeSelectLayout = () =>
  createSelector(
    selectPortfolio,
    portfolioState => portfolioState.layout,
  );


export {
  selectPortfolio,
  makeSelectPortfolios,
  makeSelectLayout
};
