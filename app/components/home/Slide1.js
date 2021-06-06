
import React, {useState} from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import { animationConfig, colors } from 'variables'
import slide from 'images/24DOTS_1-D Slider.svg';
import ImgSlideWrapper from './ImgSlideWrapper';
import { includes } from "lodash"

const Slide1 = ({ isWideScreen, width, height, widthCat, bottomMargin}) => {
    return (  
      <React.Fragment>
        <Zoom {...animationConfig.zoom}>
          <ImgSlideWrapper 
            widthCat={widthCat}
            width={width}
            height={includes(['lg','md'], widthCat) ? height + 'px' : height + 'px'} 
            bottomMargin={bottomMargin}
          >
              <p>Develop your ideas!!!</p>
          </ImgSlideWrapper>
        </Zoom>   
      </React.Fragment>
    );
}
    
export default Slide1;