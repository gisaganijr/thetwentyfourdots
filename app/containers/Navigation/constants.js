/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const TOGGLE_NAV_MOBILE = 'boilerplate/Navigation/TOGGLE_NAV_MOBILE';
export const TOGGLE_NAV_MAIN = 'boilerplate/Navigation/TOGGLE_NAV_MAIN';
export const CLOSE_NAV_MAIN = 'boilerplate/Navigation/CLOSE_NAV_MAIN';
export const SET_MENU_BUTTON_COLOR = 'boilerplate/Navigation/SET_MENU_BUTTON_COLOR';
export const SET_IS_LOGO_COLOURED = 'boilerplate/Navigation/SET_IS_LOGO_COLOURED';
export const SET_SHOW_WELCOME = 'boilerplate/Navigation/SET_SHOW_WELCOME';
export const SET_SHOW_PRELOADER = 'boilerplate/Navigation/SET_SHOW_PRELOADER';
export const SET_SCROLL_TOP = 'boilerplate/Navigation/SET_SCROLL_TOP';
export const SET_APPBAR_BG_COLOR = 'boilerplate/Navigation/SET_APPBAR_BG_COLOR';
export const CHANGE_THEME_COLOR = 'boilerplate/Navigation/CHANGE_THEME_COLOR';
export const SHOW_FALLBACK = 'boilerplate/Navigation/SHOW_FALLBACK';
export const HIDE_FALLBACK = 'boilerplate/Navigation/HIDE_FALLBACK';