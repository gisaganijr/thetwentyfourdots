
import React, {useState} from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import windowDimensions from 'react-window-dimensions';
import Zoom from 'react-reveal/Zoom';
import { colors } from 'variables'
import slide from 'images/24DOTS_1-D Slider.svg';
import { getSlideImage } from './imageHelper';
import ImgSlideWrapper from './ImgSlideWrapper';

const ImageSlide = ({ slideIndex, isWideScreen, width, height}) => {
  return (  
    <React.Fragment>
      <Zoom>
        <ImgSlideWrapper 
          height={isWideScreen ? height + 'px' : "350px"} 
          width={isWideScreen ? width + 'px' : '100%'}
        >
            <img src={getSlideImage(slideIndex)} 
              height ={isWideScreen ? "80%" : "250px"} 
              width ={ isWideScreen ? "80%" : "250px"}
            />
        </ImgSlideWrapper>
      </Zoom>   
    </React.Fragment>
  );
}
    
export default ImageSlide;