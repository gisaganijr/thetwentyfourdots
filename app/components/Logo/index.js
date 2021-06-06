import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from 'variables';
import { ReactComponent as ColourLogo } from 'images/Official_Brand_Colour.svg';
import { ReactComponent as ColourLogoMobile } from 'images/Official_Brand_Colour_Mobile.svg';
import { ReactComponent as PlainLogo } from 'images/Official_Brand_Plain.svg';
import { ReactComponent as PlainLogoMobile } from 'images/Official_Brand_Plain_Mobile.svg';

const StyledIcon = styled.div`
  width: ${props => props.width};
  ${props => !props.isColoured ? {color: colors.white} : null};
`;

const Logo = forwardRef(({isColoured = true, width = '10%', style, isWideScreen = true}, ref) => {

  if (isWideScreen)
    return (
      <StyledIcon ref={ref} width={width} isColoured={isColoured} style={style}>
        {isColoured ? <ColourLogo /> : <PlainLogo />}
      </StyledIcon>
    )

  return (
    <StyledIcon ref={ref} width={width} isColoured={isColoured} style={style}>
      {isColoured ? <ColourLogoMobile /> : <PlainLogoMobile />}
    </StyledIcon>
  )
})

export default Logo;