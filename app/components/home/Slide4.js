import React, {useState} from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import { animationConfig, colors } from 'variables'
import slide from 'images/24DOTS_4-S Slider.svg';
import ImgSlideWrapper from './ImgSlideWrapper';
import _ from "lodash"

const Slide4 = ({ isWideScreen, width, height, widthCat, bottomMargin}) => {
  return (  
    <React.Fragment>
      <Zoom {...animationConfig.zoom}>
        <ImgSlideWrapper 
            widthCat={widthCat}
            width={width}
            height={_.includes(['lg','md'], widthCat) ? height + 'px' : "280px"} 
            bottomMargin={bottomMargin}
        >
          <img src={slide} 
            //height = {_.includes(['lg','md'], widthCat) ? "100%" : "250px"} 
            width = {_.includes(['lg','md'], widthCat) ? "100%" : "250px"}
          />
        </ImgSlideWrapper>
      </Zoom>   
    </React.Fragment>
  );
}
  
export default Slide4;