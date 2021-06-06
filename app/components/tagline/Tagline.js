
import React, {useState} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import windowDimensions from 'react-window-dimensions';
import Zoom from 'react-reveal/Zoom';
import { animationConfig, colors, coverBgColor } from 'variables'

import TaglineAni from './TaglineAni';

import { CSSTransition } from 'react-transition-group';
import { Button } from '@material-ui/core';


const Tagline = (props) => {
  
  const appearDuration = 3000;
  const transitionName = `cover-logo`;

  const Wrapper = styled.div`
    width: 250px;
    min-width: 250px;
    max-width: 250px;
    height: 50px;
    min-height: 50px;
    max-height: 50px;
    position: relative;
    background: ${coverBgColor};
  `

  return (  
    <Wrapper>
      <TaglineAni delay={props.delay}/>
    </Wrapper>
  );
}
    
export default Tagline;