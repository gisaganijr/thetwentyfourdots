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
