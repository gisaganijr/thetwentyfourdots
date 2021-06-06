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

export const CHANGE_LAYOUT_HEIGHT = 'boilerplate/OurWork/CHANGE_LAYOUT_HEIGHT';
export const UPDATE_WORKS = 'boilerplate/OurWork/UPDATE_WORKS';
export const SET_TOUCHED_WORK = 'boilerplate/OurWork/SET_TOUCHED_WORK';
export const LOADED_IMAGE = 'boilerplate/OurWork/LOADED_IMAGE';
export const RETURN_TO_DEFAULT = 'boilerplate/OurWork/RETURN_TO_DEFAULT';