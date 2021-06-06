
import React, {useState} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import windowDimensions from 'react-window-dimensions';
import Zoom from 'react-reveal/Zoom';
import { animationConfig, colors, coverBgColor } from 'variables'

import LogoSquareAni from './LogoSquareAni';

import { CSSTransition } from 'react-transition-group';
import { Button } from '@material-ui/core';


const LogoSquare = () => {
  
  const appearDuration = 3000;
  const transitionName = `cover-logo`;

  const Wrapper = styled.div`
    width: 150px;
    min-width: 150px;
    max-width: 150px;
    height: 150px;
    min-height: 150px;
    max-height: 150px;
    position: relative;
    background: ${coverBgColor};
  `

  return (  
    <Wrapper>
      <LogoSquareAni />
    </Wrapper>
  );
}
    
export default LogoSquare;