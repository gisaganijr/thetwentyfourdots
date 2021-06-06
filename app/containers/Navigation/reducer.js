import produce from 'immer';
import { 
  TOGGLE_NAV_MOBILE, 
  TOGGLE_NAV_MAIN, 
  CLOSE_NAV_MAIN, 
  CHANGE_THEME_COLOR, 
  SET_MENU_BUTTON_COLOR, 
  SET_IS_LOGO_COLOURED, 
  SET_SHOW_WELCOME,
  SET_SHOW_PRELOADER,
  SET_SCROLL_TOP,
  SET_APPBAR_BG_COLOR
} from './constants';
import { appBgColor, colors } from 'variables';

// The initial state of the App
export const initialState = {
  isNavMainOpen: false,
  isNavMobileOpen: false,
  mainMenuButtonColor: colors.white,
  isLogoColoured: false,
  showWelcome: false,
  showPreloader: false,
  scrollTop: 0,
  themeColor: '#00a4e4',
  appBarBgColor: appBgColor
};

/* eslint-disable default-case, no-param-reassign */
const navReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_NAV_MOBILE: {
        draft.isNavMobileOpen = !state.isNavMobileOpen;
        draft.isNavMainOpen = !state.isNavMainOpen;
        break;
      } 
      case TOGGLE_NAV_MAIN: {
        draft.isNavMainOpen = !state.isNavMainOpen;
        draft.isNavMobileOpen = !state.isNavMobileOpen;
        break;
      } ;
      case CLOSE_NAV_MAIN: {
        draft.isNavMainOpen = false;
        draft.isNavMobileOpen = false;
        break;
      } 
      case SET_MENU_BUTTON_COLOR: {
        if (action.payload !== null)
          draft.mainMenuButtonColor = action.payload || colors.white;

        break;
      } 
      case SET_IS_LOGO_COLOURED: {
        if (action.payload !== null)
          draft.isLogoColoured = action.payload || false;

        break;
      } 
      case SET_SHOW_WELCOME: {
        draft.showWelcome = action.payload || false;
        break;
      }
      case SET_SHOW_PRELOADER: {
        draft.showPreloader = action.payload || false;
        break;
      }
      case SET_SCROLL_TOP: {
        draft.scrollTop = action.payload || 0;
        break;
      }
      case SET_APPBAR_BG_COLOR: {
        if (action.payload !== null)
          draft.appBarBgColor = action.payload;
        
          break;
      }
      case CHANGE_THEME_COLOR: {
        draft.themeColor = action.color;
        break;
      }
    }
  });

export default navReducer;

