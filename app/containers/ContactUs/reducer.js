/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { getNextSlide, getPrevSlide } from './helpers';
import { CHANGE_SLIDE } from './constants';
import { isNumber } from 'lodash';

// The initial state of the App
export const initialState = {
  slideIndex: 1,
  selectedSlider: {
    index: '1', fontColor: '#ffffff', bgColor: '#138E91'
  },
  sliders: [
    {index: '1', fontColor: '#ffffff', bgColor: '#DA523A'},
    {index: '2', fontColor: '#ffffff', bgColor: '#FCB94D'},
    {index: '3', fontColor: '#ffffff', bgColor: '#138E91'},
    {index: '4', fontColor: '#ffffff', bgColor: '#00A4E4'},
  ]
};


/* eslint-disable default-case, no-param-reassign */
const agencyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SLIDE: {
        let newSlideIndex;
        if (isNumber(action.changeType))
          newSlideIndex = action.changeType;
        else
          newSlideIndex = action.changeType === 'next' ? getNextSlide(state.slideIndex) : getPrevSlide(state.slideIndex);
        
        draft.slideIndex = newSlideIndex;
      } 
    }
  });

export default agencyReducer;
