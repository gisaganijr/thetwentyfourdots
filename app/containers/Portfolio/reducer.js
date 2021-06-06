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
import { CHANGE_LAYOUT_HEIGHT, UPDATE_GRID_ITEMS, LOADED_IMAGE, RETURN_TO_DEFAULT  } from './constants';
import portfolios from './data';

// The initial state of the App
export const initialState = {
  portfolios: portfolios,
  layout: []
};

/* eslint-disable default-case, no-param-reassign */
const portfolioReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LAYOUT_HEIGHT: {
        let newLayout = [];
        const portfolio = state.portfolios[action.portfolioName];
        if (portfolio) {
          const layoutPropToUpdate = action.isWideScreen ? "layout" : "smLayout";
          const updateGridItems = portfolio.gridItems.map((gridItem) => {
            if (gridItem.itemId === action.itemId) {
              return {
                ...gridItem,
                [layoutPropToUpdate]: {
                  ...gridItem[layoutPropToUpdate],
                  h: action.height,
                }
              }
            }
            
            return gridItem;
          });
          
          const updatedPortfolio = {
            ...portfolio,
            gridItems: updateGridItems,
          }

          newLayout = updateGridItems.map((item) => item[layoutPropToUpdate]);
          return {
            ...state,
            portfolios: {
              ...state.portfolios,
              [action.portfolioName]: updatedPortfolio,
            },
            layout: newLayout
          };
        }

        return {
            ...state,
            portfolios: {
              ...state.portfolios,
              //...updatedPortfolio,
            },
            layout: newLayout
        };
      } 
      case UPDATE_GRID_ITEMS: {
        let newLayout = [];
        const layoutPropToUpdate = action.isWideScreen ? "layout" : "smLayout";
        const portfolio = state.portfolios[action.portfolioName];
        
        if (portfolio) {
          
          const updatedPortfolio = {
            ...portfolio,
            gridItems: action.gridItems,
          }

          newLayout = action.gridItems.map((item) => item[layoutPropToUpdate]);

          return {
            ...state,
            portfolios: {
              ...state.portfolios,
              [action.portfolioName]: updatedPortfolio,
            },
            layout: newLayout
          };
        }

        return {
            ...state,
        };
      } 
      case LOADED_IMAGE: {
        const portfolio = state.portfolios[action.portfolioName];
        if (portfolio) {
          const layoutPropToUpdate = action.isWideScreen ? "layout" : "smLayout";
          const updateGridItems = portfolio.gridItems.map((gridItem) => {
            if (gridItem.itemId === action.itemId) {
              return {
                ...gridItem, 
                loaded: true,
              }
            }
            
            return gridItem;
          })
          
          const updatedPortfolio = {
            ...portfolio,
            gridItems: updateGridItems,
          }

          return {
            ...state,
            portfolios: {
              ...state.portfolios,
              [action.portfolioName]: updatedPortfolio,
            },
          };
        }

        return { ...state } 
      }
      case RETURN_TO_DEFAULT: {
        return {
          ...initialState,
        };
      }
    }
  });

export default portfolioReducer;
