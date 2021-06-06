/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */
import React from 'react';
import produce from 'immer';
import { colors } from 'variables';
import { SHOW_FALLBACK, HIDE_FALLBACK, RETURN_TO_DEFAULT  } from './constants';

// The initial state of the App
export const initialState = {
  showFallback: false
};

/* eslint-disable default-case, no-param-reassign */
const fallbackReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_FALLBACK: {
        draft.showFallback = true;
        break;
      }
      case HIDE_FALLBACK: {
        draft.showFallback = false;
        break;
      }
      case RETURN_TO_DEFAULT: {
        return {
          ...initialState,
        };
      }
    }
  });

export default fallbackReducer;
