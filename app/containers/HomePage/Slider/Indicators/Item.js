
import React from 'react';
import styled from 'styled-components';
import { find } from "lodash";
import CircularProgress from './CircularProgress'
import { IconButton } from '@material-ui/core';
import { lighten, desaturate } from 'polished'

const Item = ({sliders, slider, activeSlideIndex, isActiveSlide, changeSlide}) => {

  const activeSlide = find(sliders, (slider) => slider.index === activeSlideIndex);
  
  function nextSlide() {
    let nextSlideIndex = activeSlideIndex + 1;
    if (activeSlideIndex === 3)
      nextSlideIndex = 0;

    changeSlide(nextSlideIndex)
  }

  function selectSlide() {
    changeSlide(slider.index);
  }

  return (
    <IconButton key={`slider-indicator-${slider.index}`} onClick={selectSlide}>
      <CircularProgress 
        keyId={`slider-circular-progresss-${slider.index}`}
        variant="determinate" 
        sliders={sliders} 
        dotColor={lighten(0.08, activeSlide.bgColor)}
        activeSlideIndex={activeSlideIndex} 
        isActive={isActiveSlide}  
        nextSlide={nextSlide}
        color={lighten(0.08, activeSlide.bgColor)}
      />
    </IconButton>
  )
}

export default Item;