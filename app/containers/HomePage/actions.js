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

import { CHANGE_SLIDE, LOADED_SLIDER_IMAGE, RETURN_TO_DEFAULT, LOADED_PORTFOLIO_IMAGE, RESET_PORTFOLIOS } from './constants';

export function changeSlide(changeType) {
  return {
    type: CHANGE_SLIDE,
    changeType,
  };
}

export function loadedSlideImage(slideIndex) {
  return {
    type: LOADED_SLIDER_IMAGE,
    slideIndex
  };
}

export function loadedPortfolioImage(portfolioName) {
  return {
    type: LOADED_PORTFOLIO_IMAGE,
    portfolioName
  };
}

export function resetPortfolios() {
  return {
    type: RESET_PORTFOLIOS
  };
}

export function returnToDefault() {
  return {
    type: RETURN_TO_DEFAULT,
  };
}

