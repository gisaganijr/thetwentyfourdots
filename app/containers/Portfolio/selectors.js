import { createSelector } from 'reselect';
import { initialState } from './reducer';

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
