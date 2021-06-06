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

import { CHANGE_LAYOUT_HEIGHT, SET_TOUCHED_WORK, UPDATE_WORKS, LOADED_IMAGE, RETURN_TO_DEFAULT } from './constants';

export function changeLayoutHeight(itemId, height, isWideScreen) {
  return {
    type: CHANGE_LAYOUT_HEIGHT,
    itemId, 
    height,
    isWideScreen,
  };
}

export function updateWorks(works, isWideScreen) {
  return {
    type: UPDATE_WORKS,
    works, 
    isWideScreen,
  };
}

export function setTouchedWork(itemId) {
  return {
    type: SET_TOUCHED_WORK,
    itemId, 
  };
}

export function loadedImage(itemId) {
  return {
    type: LOADED_IMAGE,
    itemId, 
  };
}

export function returnToDefault() {
  return {
    type: RETURN_TO_DEFAULT,
  };
}
