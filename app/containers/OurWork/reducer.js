import React from 'react';
import produce from 'immer';
import { colors } from 'variables';
import { CHANGE_LAYOUT_HEIGHT, UPDATE_WORKS, SET_TOUCHED_WORK, LOADED_IMAGE, RETURN_TO_DEFAULT  } from './constants';
import works from './data';

// The initial state of the App
export const initialState = {
  works: works,
  layout: [],
  touchedWork: null 
};

/* eslint-disable default-case, no-param-reassign */
const ourWorkReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LAYOUT_HEIGHT: {
        let newLayout = [];
        const layoutPropToUpdate = action.isWideScreen ? "layout" : "smLayout";
        const updatedWorks = state.works.map((workItem) => {
          if (workItem.itemId === action.itemId) {
            return {
              ...workItem, 
              [layoutPropToUpdate]: {
                ...workItem[layoutPropToUpdate],
                h: action.height,
              }
            }
          }    
              
          return workItem;
        })

        newLayout = updatedWorks.map((item) => item[layoutPropToUpdate]);
        
        return {
            ...state,
            works: updatedWorks,
            layout: newLayout
        };
      }
      case UPDATE_WORKS: {
        const layoutPropToUpdate = action.isWideScreen ? "layout" : "smLayout";
        const newLayout = action.works.map((item) => item[layoutPropToUpdate]);
        
        return {
            ...state,
            works: action.works,
            layout: newLayout
        };
      } 
      case LOADED_IMAGE: {
        const updatedWorks = state.works.map((workItem) => {
          if (workItem.itemId === action.itemId) {
            return {
              ...workItem, 
              loaded: true,
            }
          }    
              
          return workItem;
        })

        return {
            ...state,
            works: updatedWorks,
        };
      }  
      case SET_TOUCHED_WORK: {
        return {
            ...state,
            touchedWork: action.itemId,
        };
      }
      case RETURN_TO_DEFAULT: {
          return {
              ...initialState,
          };
        break;
      }
    }
  });

export default ourWorkReducer;
