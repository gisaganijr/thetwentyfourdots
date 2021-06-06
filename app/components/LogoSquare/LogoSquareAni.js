
import React, {useState} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import windowDimensions from 'react-window-dimensions';
import Zoom from 'react-reveal/Zoom';
import { animationConfig, colors, coverBgColor } from 'variables'

import { ReactComponent as CoverImg } from './cover-square-logo.svg';

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

  const Curtain = styled.div`
    width: 150px;
    min-width: 150px;
    max-width: 150px;
    min-height: 150px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 999;
    background: linear-gradient(to right, transparent 50%, ${coverBgColor} 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 1000ms ease-out;
    
    &.cover-logo-enter {
        opacity: 1;
    }
    &.cover-logo-enter-active {
      background-position: left bottom;
    }
    &.cover-logo-enter-done {
      opacity: 1;
      background-position: left bottom;
    }

  `;

  const StaticLogo = styled.div`
    width: 150px;
    min-width: 150px;
    max-width: 150px;
    position: absolute;
    top: 0px;
    left: 0px;
  `;

  const [showLoading, setShowLoading] = useState(false);

  setTimeout(() => {
    setShowLoading(true);
  }, 2000);

  return (  
    <React.Fragment>
      <CSSTransition
        in={showLoading}
        timeout={0}
        classNames='cover-logo'
      >
        {
          () => 
            <Curtain />
        }
      </CSSTransition>
      <StaticLogo>
        <CoverImg></CoverImg>
      </StaticLogo> 
    </React.Fragment>
  );
}
    
export default LogoSquare;