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

