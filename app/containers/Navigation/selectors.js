/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { find } from 'lodash';

const selectNav = state => {
  return state.navigation || initialState
};

const makeIsNavMainOpen = () =>
  createSelector(
    selectNav,
    navState => navState.isNavMainOpen,
  );

const makeIsNavMobileOpen = () =>
  createSelector(
    selectNav,
    navState => navState.isNavMobileOpen,
  );

const makeMainMenuButtonColor = () =>
  createSelector(
    selectNav,
    navState => navState.mainMenuButtonColor,
  );

const makeIsLogoColoured = () =>
  createSelector(
    selectNav,
    navState => navState.isLogoColoured,
  );

const makeShowWelcome = () =>
  createSelector(
    selectNav,
    navState => navState.showWelcome,
  );

const makeShowPreloader = () =>
  createSelector(
    selectNav,
    navState => navState.showPreloader,
  );

const makeThemeColor = () =>
  createSelector(
    selectNav,
    navState => navState.themeColor,
  );

const makeScrollTop = () =>
  createSelector(
    selectNav,
    navState => navState.scrollTop,
  );

const makeAppBarBgColor = () =>
  createSelector(
    selectNav,
    navState => navState.appBarBgColor,
  );

  
  
export {
  selectNav,
  makeIsNavMainOpen,
  makeIsNavMobileOpen,
  makeMainMenuButtonColor,
  makeIsLogoColoured,
  makeShowWelcome,
  makeShowPreloader,
  makeScrollTop,
  makeAppBarBgColor,
  makeThemeColor
};
