import { 
  TOGGLE_NAV_MAIN, 
  CLOSE_NAV_MAIN, 
  TOGGLE_NAV_MOBILE, 
  SET_MENU_BUTTON_COLOR , 
  SET_IS_LOGO_COLOURED ,
  SET_SHOW_WELCOME,
  SET_SHOW_PRELOADER,
  SET_SCROLL_TOP,
  SET_APPBAR_BG_COLOR
} from './constants';

export function toggleDrawer() {
  return {
    type: TOGGLE_NAV_MOBILE
  };
}

export function closeDrawer() {
  return {
    type: CLOSE_NAV_MAIN
  };
}

export function toggleMainDrawer() {
  return {
    type: TOGGLE_NAV_MAIN
  };
}

export function setMenuButtonColor(color) {
  return {
    type: SET_MENU_BUTTON_COLOR,
    payload: color
  };
}

export function setIsLogoColoured(value) {
  return {
    type: SET_IS_LOGO_COLOURED,
    payload: value
  };
}

export function setShowWelcome(value) {
  return {
    type: SET_SHOW_WELCOME,
    payload: value
  };
}

export function setShowPreloader(value) {
  return {
    type: SET_SHOW_PRELOADER,
    payload: value
  };
}

export function setScrollTop(value) {
  return {
    type: SET_SCROLL_TOP,
    payload: value
  };
}

export function setAppBarBgColor(value) {
  return {
    type: SET_APPBAR_BG_COLOR,
    payload: value
  };
}