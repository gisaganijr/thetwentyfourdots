
import React, {useState} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import windowDimensions from 'react-window-dimensions';
import Zoom from 'react-reveal/Zoom';
import { animationConfig, colors, coverBgColor, taglineColor } from 'variables'
import { CSSTransition } from 'react-transition-group';

const StyledTagline = styled.p`
 font-size: 16px;
 color: ${taglineColor};
 font-family: 'Gotham-Bold';
 text-align: center;
`

const TaglineAni = (props) => {
  const appearDuration = 3000;
  const transitionName = `tagline`;

  const Curtain = styled.div`
    width: 250px;
    min-width: 250px;
    max-width: 250px;
    min-height: 50px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 999;
    background: linear-gradient(to right, transparent 50%, ${coverBgColor} 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 1000ms ease-out;
    
    &.tagline-enter {
        opacity: 1;
    }
    &.tagline-enter-active {
      background-position: left bottom;
    }
    &.tagline-enter-done {
      opacity: 1;
      background-position: left bottom;
    }

  `;

  const Static = styled.div`
    width: 250px;
    min-width: 250px;
    max-width: 250px;
    height: 50px;
    position: absolute;
    top: 0px;
    left: 0px;
  `;

  const [showLoading, setShowLoading] = useState(false);

  setTimeout(() => {
    setShowLoading(true);
  }, props.delay);

  return (  
    <React.Fragment >
      <CSSTransition
        in={showLoading}
        timeout={0}
        classNames='tagline'
      >
        {
          () => 
            <Curtain />
        }
      </CSSTransition>
      <Static>
        <StyledTagline>CONNECTING CREATIVITY</StyledTagline>
      </Static> 
    </React.Fragment>
  );
}
    
export default TaglineAni;