import React from 'react';
import styled from 'styled-components'
import { getFontFamily, getFontSize, getLineHeight } from 'helpers';

const CustomParagraph = styled.p`
  font-family: Gotham-ExtraLight;
  ${props => props.noMargin && {margin: '0px'}};
  ${props => props.fontSize && {"font-size": props.fontSize}};
  ${props => props.lineHeight && {"line-height": props.lineHeight}};
  ${props => props.rotated && {
    'transform': 'rotate(270deg)',
    'transform-origin': 'bottom',
    'width': '0',
    'white-space': 'nowrap'
  }}
`

const Copyright = ({rotated = true, fontType = 'light', children, style, noMargin, size = 'sm'}) => {

  return (
    <CustomParagraph 
      noMargin={noMargin} 
      style={style} 
      fontSize={getFontSize(size)} 
      fontFamily={getFontFamily(fontType)} 
      lineHeight={getLineHeight(size)}
      rotated={rotated}
    >
      ©thetwentyfourdots
    </CustomParagraph>
  )
}

export default Copyright;