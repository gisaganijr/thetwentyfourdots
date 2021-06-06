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

export const CHANGE_LAYOUT_HEIGHT = 'boilerplate/Portfolio/CHANGE_LAYOUT_HEIGHT';
export const UPDATE_GRID_ITEMS = 'boilerplate/Portfolio/UPDATE_GRID_ITEMS';
export const CHANGE_LAYOUT_MAX_HEIGHT = 'boilerplate/Portfolio/CHANGE_LAYOUT_MAX_HEIGHT';
export const LOADED_IMAGE = 'boilerplate/Portfolio/LOADED_IMAGE';
export const LOADED_MAIN_IMAGE = 'boilerplate/Portfolio/LOADED_MAIN_IMAGE';
export const RETURN_TO_DEFAULT = 'boilerplate/Portfolio/RETURN_TO_DEFAULT';