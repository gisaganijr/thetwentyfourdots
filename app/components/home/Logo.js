import React, {useState} from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import windowDimensions from 'react-window-dimensions';
import Zoom from 'react-reveal/Zoom';
import { colors } from 'variables'
import officialLogo from 'images/official_logo.svg';

const LogoWrapper = styled.div`
  width: 100%;
  text-align: center;
`
const Logo = (props) => {
    function getStyle() {
        if (props && props.onClick) {
            return {
                cursor: 'pointer'
            }
        }
        return null;
    }
    return (  
        <LogoWrapper>
            <img src={officialLogo} width="150px" {...props} style={getStyle()} />
        </LogoWrapper>
    );
}
    
export default Logo;