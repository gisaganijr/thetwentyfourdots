import React from 'react';
import produce from 'immer';
import { getNextSlide, getPrevSlide } from './helpers';
import { colors } from 'variables';
import { CHANGE_SLIDE, LOADED_SLIDER_IMAGE, LOADED_PORTFOLIO_IMAGE, RESET_PORTFOLIOS, RETURN_TO_DEFAULT } from './constants';
import { isNumber } from 'lodash';
import portfolios from 'containers/Portfolio/data';

export const initialState = {
  slideIndex: 0,
  selectedSlider: {
    index: '0', fontColor: '#ffffff', bgColor: '#138E91'
  },
  sliders: [
    {
      index: 0, 
      fontColor: '#ffffff', 
      bgColor: colors.orange, 
      title: <span style={{ whiteSpace: 'nowrap'}}><span className="underline">Develop</span> your<br/>ideas into countless<br/>possibilities</span>,
      videoSrc: "https://thetwentyfourdots.com/assets/videos/ttfd_D_1902x936_Desktop.mp4",
      videoMobileSrc: "https://thetwentyfourdots.com/assets/videos/ttfd_D_1080x1920_Mobile_2.mp4",
      imageSrc: "https://thetwentyfourdots.com/assets/images/ttfd_D.jpg",
      imageMobileSrc: "https://thetwentyfourdots.com/assets/images/ttfd_D_mobile.jpg",
      bgColorGetFrom: "/images/ttfd_D_screenshot.jpg",
      pointerTitle: 'thetwentyfourdots',
      isActive: false,
    },
    {
      index: 1, 
      fontColor: '#ffffff', 
      bgColor: colors.yellow, 
      title: <span style={{ whiteSpace: 'nowrap'}}><span className="underline">Organise</span> your vision<br/> into creative strategies <br/>and models</span>,
      videoSrc: "https://thetwentyfourdots.com/assets/videos/ttfd_O_1902x936_Desktop.mp4",
      videoMobileSrc: "https://thetwentyfourdots.com/assets/videos/ttfd_O_1080x1920_Mobile_2.mp4",
      imageSrc: "https://thetwentyfourdots.com/assets/images/ttfd_O.jpg",
      imageMobileSrc: "https://thetwentyfourdots.com/assets/images/ttfd_O_mobile.jpg",
      bgColorGetFrom: "/images/ttfd_O_screenshot.jpg",
      pointerTitle: 'thetwentyfourdots',
      isActive: false,
    },
    {
      index: 2, 
      fontColor: '#ffffff', 
      bgColor: colors.turquoise, 
      title: <span style={{ whiteSpace: 'nowrap'}}><span className="underline">Transform</span> figments<br/>and translate into <br/>visual impression</span>,
      videoSrc: "https://thetwentyfourdots.com/assets/videos/ttfd_T_1902x936_Desktop.mp4",
      videoMobileSrc: "https://thetwentyfourdots.com/assets/videos/ttfd_T_1080x1920_Mobile_2.mp4",
      imageSrc: "https://thetwentyfourdots.com/assets/images/ttfd_T.jpg",
      imageMobileSrc: "https://thetwentyfourdots.com/assets/images/ttfd_T_mobile.jpg",
      bgColorGetFrom: "/images/ttfd_T_screenshot.jpg",
      pointerTitle: 'thetwentyfourdots',
      isActive: true,
    },
    {
      index: 3, 
      fontColor: '#ffffff', 
      bgColor: colors.cyan, 
      title: <span><span className="underline">Solutions</span> are<br/>always achievable<br/>and viable</span>,
      videoSrc: "https://thetwentyfourdots.com/assets/videos/ttfd_S_1902x936_Desktop.mp4",
      videoMobileSrc: "https://thetwentyfourdots.com/assets/videos/ttfd_S_1080x1920_Mobile.mp4",
      imageSrc: "https://thetwentyfourdots.com/assets/images/ttfd_S.jpg",
      imageMobileSrc: "https://thetwentyfourdots.com/assets/images/ttfd_S_mobile.jpg",
      bgColorGetFrom: "/images/ttfd_S_screenshot.jpg",
      pointerTitle: 'thetwentyfourdots',
      isActive: false,
    },
  ],
  portfolios: portfolios,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SLIDE: {
        let newSlideIndex;
        if (isNumber(action.changeType))
          newSlideIndex = action.changeType;
        else
          newSlideIndex = action.changeType === 'next' ? getNextSlide(state.slideIndex) : getPrevSlide(state.slideIndex);

        draft.slideIndex = newSlideIndex;
        break;
      } 
      case LOADED_SLIDER_IMAGE: {
        const updateSliders = state.sliders.map((slider) => {
          if (slider.index === action.slideIndex)
            return {
              ...slider, 
              imageLoaded: true
            }

          return { ...slider }
        })

        return {
          ...state,
          sliders: updateSliders
        }
      }
      case LOADED_PORTFOLIO_IMAGE: {
        const portfolio = state.portfolios[action.portfolioName];
        if (portfolio) {
          
          const updatedPortfolio = {
            ...portfolio,
            imageLoaded: true
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
      case RESET_PORTFOLIOS: {
        return {
          ...state,
          portfolios: portfolios,
        };
      }
      case RETURN_TO_DEFAULT: {
        draft = initialState;
        break;
      }
    }
  });

export default homeReducer;
