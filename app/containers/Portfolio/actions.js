/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_LAYOUT_HEIGHT, UPDATE_GRID_ITEMS, CHANGE_LAYOUT_MAX_HEIGHT, LOADED_IMAGE, RETURN_TO_DEFAULT } from './constants';

export function changeLayoutHeight(portfolioName, itemId, height, isWideScreen) {
  return {
    type: CHANGE_LAYOUT_HEIGHT,
    portfolioName, 
    itemId, 
    height, 
    isWideScreen,
  };
}

export function updateGridItems(portfolioName, gridItems, isWideScreen) {
  return {
    type: UPDATE_GRID_ITEMS,
    portfolioName, 
    gridItems, 
    isWideScreen
  };
}

export function loadedImage(portfolioName, itemId) {
  return {
    type: LOADED_IMAGE,
    portfolioName, 
    itemId, 
  };
}

export function returnToDefault() {
  return {
    type: RETURN_TO_DEFAULT,
  };
}
